## Global controls
- Chrome component controls navigation elements for some landing pages - I have a variable that's set within that component that hides the navigation options
	- Separately, I have another variable in the Footer component that controls hiding the footer content on a different set of pages.
- Redirects should be handled with the *next.config.js* file within the redirects function
- Vercel.json file controls the cron job that syncs blog posts with Marketo
	- API endpoint up under the API directory
- The session cookie script (public/assets/js/session-cookies.js - NOT cookie-utm.js; which is the deprecated version) is hosted on Vercel, but enabled through Google Tag Manager
- New pages are auto-created for any URL endpoint that's named "[slug.js]'' within the file system. All other pages must be manually created and matched with an entry ID within Contentful.

## Middleware and testing
- Middleware control for A/B testing
	- [Middleware](https://vercel.com/docs/concepts/functions/edge-middleware) is a method to trigger compute operations BEFORE a page render occurs for the request page.
	- It is leveraged with [Statsig](https://github.com/vercel/examples/tree/main/edge-middleware/ab-testing-statsig) to make experimentation possible without any FOC (Flash of Original Content)
	- Here's the middleware file (middleware.ts in the Git) with some added notes

```javascript
import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import Statsig from 'statsig-node'
import { EdgeConfigDataAdapter } from 'statsig-node-vercel'
import { EXPERIMENT, UID_COOKIE, GROUP_PARAM_FALLBACK, DEMO_EXPERIMENT } from './lib/constants'

// We'll use this to validate a random UUID
const IS_UUID = /^[0-9a-f-]+$/i
const dataAdapter = new EdgeConfigDataAdapter(process.env.EDGE_CONFIG_ITEM_KEY!)
export const config = {
// this is to set which pages this middleware function should run on - this can save some middleware calls on Vercel (we have 1M/month, but are only $0.65/million + config calls at $3/million)
	matcher: ['/', '/demo/l'],
}

export async function middleware(req: NextRequest, event: NextFetchEvent) {

// Get the user ID from the cookie or get a new one
let userId = req.cookies.get(UID_COOKIE)?.value
let hasUserId = !!userId
// If there's no active user ID in cookies or its value is invalid, get a new one
if (!userId || !IS_UUID.test(userId)) {
	userId = crypto.randomUUID()
	hasUserId = false
}
 
await Statsig.initialize(process.env.STATSIG_SERVER_API_KEY!, { dataAdapter })

const experiment = await Statsig.getExperiment({ userID: userId }, EXPERIMENT)

// if you're running a secondary test on another page (e.g., the demo page, you can add an additional variable here for a second experiment)
// const demoExperiment = await Statsig.getExperiment({ userID: userId }, DEMO_EXPERIMENT)

const bucket = experiment.get<string>('bucket', GROUP_PARAM_FALLBACK)
// const demoBucket = demoExperiment.get<string>('bucket', GROUP_PARAM_FALLBACK)

// Clone the URL and change its pathname to point to a bucket
const url = req.nextUrl.clone()

// if the URL is /demo/t, we'll redirect to the test bucket
// if (url.pathname === '/demo/l') {
// url.pathname = `/demo/t/${demoBucket}`
// }
if (url.pathname === '/') {
	url.pathname = `/${bucket}`
}

// Response that'll rewrite to the selected bucket
const res = NextResponse.rewrite(url)

// Add the user ID to the response cookies if it's not there or if its value was invalid
	if (!hasUserId) {
		res.cookies.set(UID_COOKIE, userId, {
		maxAge: 60 * 60 * 24, // identify users for 24 hours
	})
}

// Flush exposure logs to Statsig
event.waitUntil(Statsig.flush());
	return res
}
```

- 