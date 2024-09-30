
---
date: 2024-03-27
tags: note
summary:  Ed, Peter, Lauren S, Vikas, Dig
---
---

This endpoint info can be passed to HeyJones team to incorporate into page:

`curl --location --request POST 'https://recruit-admin-func-dev.azurewebsites.net/api/smb/user' \` `--header 'x-functions-key: xxxxxx' \` `--header 'Content-Type: application/json' \` `--data-raw '{` `"email": "test123@zst.com",` `"firstName": "Test",` `"lastName": "123",` `"company": "SeekOut Test",` `"title": "Recruiter",` `"phone": "1234567890",` `"country": "US",` `"state": "WA"` `}'` `Response:` `{` `"signUpLink": "https://app-dev.seekout.io/smbSignUp?code=xxxxxx "` `}`

- Team still needs to use Marketo API to pass unique link info back into Marketo.
- Awaiting final content for page (requested deadline today, 3/27)

- [ ] Create a separate ticket for writing URL back to Marketo

- Include a failure state message
	- Ed would like a slack alert for this
- VM: Don't want to make calls from the client side so that the is not visible