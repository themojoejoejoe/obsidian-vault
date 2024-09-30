
---
date: 2024-02-29
tags: note
summary:  
---
---

SeekOut will be implementing a pricing/packages page with an option for qualified prospects to purchase a limited license intended for SMB customers. Qualification criteria includes:

1. `Num Employees` < 100
2. `Lifecycle Status` ≠ SAL or SQL
3. `Account Open Opportunities Count` = 0 or NULL

There are two ways to achieve this, and both begin with a form submission:

1. **Marketo Processing + Follow-up Email** – this would be the easiest to facilitate in terms of level of effort. In this scenario, after the user submits a form, a Marketo trigger would fire and route that user along an accept or reject path, serving the appropriate response via email.
2. **Marketo API + Appropriate Page Redirect** – this would create a better customer experience, however requires some technical knowledge to create an API call into Marketo. In this scenario, after the user submits the form, there is an API call into Marketo to review the above fields. If any qualification criteria does not apply, the user is redirected to a page to inform them they unfortunately are not qualified for the SMB offer, but provides an option to book a meeting with (i.e. Calendly) or otherwise contact sales.

![[Pasted image 20240229082326.png]]

