---
date: 2024-09-11
tags:
  - note
---
---

>[!tip] Situation
> P0 for the [Maturity Assessment](https://www.seekout.com/maturity-model) project was to create the assessment, store each value to a cookie, and then capture that information via a form submission at the end of the assessment before redirecting the user to the associated content. 
>  
> Now we are enabling a paid social experiment on LinkedIn, where the user fills out a LinkedIn Lead Gen form at the beginning of the experience (on LinkedIn), completes the assessment, and instead of a form at the end of the experience they click a simple CTA button that sends an API call into Marketo to capture the information in the same manner as the organic experience.

>[!danger] Challenge
> We need to understand how to:
> 1. Ping Marketo for a user's email address accessing the assessment via LinkedIn
> 2. Store that user's email address into a cookie so that the CTA click (in effect, form submission via API) knows which record to update in Marketo

The following details *how* we can solve for these challenges.
##  LinkedIn Lead Gen Form Setup:
When someone fills out a LinkedIn Lead Gen Form, the form data (including the email address) is captured by LinkedIn.

## Webhook or API Call from Marketo:

Once the form is submitted on LinkedIn, and the data is in Marketo, we can use a Marketo webhook to send the email address to the website.

Alternatively, we could set up a **Smart Campaign** in Marketo that triggers when a new lead is created from LinkedIn or a specific LinkedIn Lead Gen form is submitted. The campaign could then call a webhook that passes the email address to a specific endpoint on your website.

## Create a Custom Endpoint on Your Website:

We can develop a custom API endpoint on our website that receives the email address from Marketo via the webhook or API call.

This endpoint should accept the email address and respond with a JavaScript snippet that sets a cookie on the user’s browser.

## Set Up the Cookie on Your Website:

 Once the above steps are completed, custom JavaScript on the initial assessment page will run, reading the email address from the webhook or API response and setting it as a cookie in the user’s browser. Here’s a sample JavaScript code snippet:
 
```
// Example JavaScript to set the cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Set email as cookie
setCookie("email", "example@domain.com", 7);  // Replace with the email from the webhook response
```

## Security & Privacy
To ensure the data is handled securely, the cookie should be HTTPOnly and Secure to prevent it from being accessed by JavaScript or transmitted over insecure connections.

To ensure compliance iwth GDPR, CCPA, and other relevant data privacy laws, the [automated compliance engine](https://publish.obsidian.md/moperator/MOPs/Marketo+Compliance+Engine) in Marketo will protect the business from legal risks.