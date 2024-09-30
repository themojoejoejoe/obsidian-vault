---
date: 2024-08-12
tags:
  - meeting
---
> [!note] Agenda + Notes
> 
- Want to have a landing page with a CTA that when the user clicks on the button, capture the User ID + email address without filling out the form and get that information into salesforce

**API CALL PAYLOAD**

```
POST {{base_url}}/rest/v1/leads.json?access_token={{access_token}}
{
  "action": "createOrUpdate",
  "lookupField": "email",
  "input": [
    {
      "email": "user@example.com",
      "cTAURL": "https://seekout.io/specific-page"
    }
  ]
}
```

> [!todo] Action Items

