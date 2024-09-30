> [!danger] Challenge
>We currently lack a method for capturing scheduled meeting requests via  scheduling tools (Calendly or Outreach) as attribution touchpoints. This is important because it creates a visibility gap in the customer journey when individuals request meetings through marketing channels, such as the marketing website, Intercom (chatbot), or email systems, which in turn could prevent us from making certain strategic optimizations 
>
>Bizible can only fire if the script is on a domain where a form submission event occurs. This is the case for the marketing website as well as Marketo landing pages, however our scheduling tools operate via their respective domains. 

> [!tip] Solutions
> There are two primary methods we could use to help account for this visibility:
> 1. A new Subchannel of "WebReferral"
> 2. A new offline channel for meeting requests

From a strict channel management perspective, Option 1 makes sense because meeting booking forms represent a specific tactic moreso than an overall channel. However, because WebReferral is an online channel it requires a form submission to register as a touchpoint. Technically we could force this by redirecting Calendly meeting requests to a standard thank you page that in turn sends a hidden form back to the Marketo ecosystem, but this would be error-prone and require consistent human behavior. This is because it would require all meeting requests to use a centrally managed event in Calendly (and this would not work at all for meeting requests via Outreach).

This limitation and potential for data loss necessitates the use of an offline channel. Offline channels work by virtue of membership in an SFDC campaign of a certain type. Calendly will pass any UTM parameter values to SFDC, which in turn can be ingested by Marketo. We could set up an automated job to route individuals to certain SFDC campaigns that would help us establish unique subchannels for the meeting request channel. Those subchannel values could be something like:

* PaidSearch - Adwords
* PaidSearch - Bing
* PaidDisplay - Google
* OrganicSearch - Google
* OganicSearch - Bing
* OrganicSocial - Twitter
* OrganicSocial - LinkedIn
* Email - Marketo
* Email - Outreach
* Email - ChurnZero
* PaidSocial - LinkedIn
* PaidDisplay - DoubleClick
* Other


> [!alert] Action Items

- [x] #attribution Create Offline Channel for "Meeting Requests" ✅ 2023-07-20
- [x] #attribution Create SFDC New Campaign Type "Meeting Requests" ✅ 2023-07-21
- [x] #attribution Create subchannels for each channel/subchannel combination ✅ 2023-07-20
- [x] #attribution Test Outreach meeting bookings to see if UTMs are passed to SFDC/Marketo ✅ 2023-07-20