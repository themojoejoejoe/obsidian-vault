- Core website
	- NextJS (React framework for frontend)
	- Vercel (hosting infrastructure)
	- Statsig (AB testing platform)
	- Contentful (headless CMS)
- Help Center
	- NextJS
	- Vercel
	- Contentful
	- Algolia (search indexer)
- ROI Calculator
	- NextJS
	- Cloudflare (host infrastructure)
- URL Shortener
	- NextJS
	- Vercel
	- MongoDB (database)


## Vercel - https://vercel.com/home
An Infrastructure as a Service (IaaS) platform that allows us to quickly deploy code changes without a lot of backend management. It is analogous to AWS Amplify, Heroku, Cloudflare Pages, Netlify, and other services. It takes a GitHub repo for a website and does the rest, essentially. It provides hosting, deployment architecture, and more that allows a really great developer expeirence.

Vercel also provides middleware (functions that happen before the time a page loads), a global CDN (hosting around the world for fast performance), preview functionality with commenting, and edge-configuration for a fast and dependable hosting provider.

Vercel is the creator and maintainer of NextJS.
## NextJS - https://nextjs.org/
Built on top of React, a Javascript framework to create web applications and front-end experiences. Primary benefits of vanilla React are a LOT of optimizations (for images, scripts, and fonts), improved data-fetching handling (allows the trifecta of static site generation, incremental static regeneration, and server-side rendering).

We use the pages router today—they've since launched a secondary routing option called the app router. In their docs, just look at pages. 
## Contentful - https://www.contentful.com/
Headless CMS. It's a fancy database with some nice prebuilt UI and functionality that makes content creation super easy. We also use their CDN to host most of the images on the site.

## Statsig - https://www.statsig.com
A/B testing platform of choice for the edge. They have a Vercel-focused edge-specific runtime that we use. This allows middleware functionality to route the test experiences without any funky display issues.

## Algolia - https://www.algolia.com
Search platform for the Help Center—it indexes ALL entries into Contentful and parses that into a searchable index that the help center leverages. 

We have two indexes here: main index for all information and data, and a secondary index for typeahead search.

## Cloudflare - https://www.cloudflare.com
Mainly just a DNS at this point, however the ROI calculator is hosted here on a Cloudflare Pages experience. No specific reason for using this vs. Vercel to host that experience, except I wanted to test out the experience. Can be moved and consolidated, but is no additional cost.

## MongoDB - https://www.mongodb.com
Database for the URL Shortener and user management for that system. It's a NoSQL database that's create at taking in a bunch of random data and making it readily available.

Our schema is super simple:
- myFirstDatabase (don't judge me, it defaulted to this and I'm too lazy to change it)
	- accounts - used with the SSO login
	- url-info
		- id - mongoDB ID for the entry
		- link - inputted link
		- uid - hash created by tool
		- shortUrl - s.seekout.com/ + uid
		- createdAt - date of input
	- users - used both for SSO and password login for user information
	- verfication_tokens - token states for login

You can ignore the other inputs—roi-calculator-data is not used, *admin* and *local* are both used by mongoDB directly.

For ~2.2k records, we only use 3.4MB of 512MB in the free tier plan we're on.