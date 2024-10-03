## Summary
This program relies on a scalable trigger and executable campaign flow. This approach enables us to modify the flow in the future with additional executable campaigns, or alternatively remove campaigns as requirements evolve.

>[!question] Why Executable Campaigns?
>The beauty of executable campaigns is that they ensure we avoid race conditions. All flow steps of one executable campaign must complete before the next executable campaign is run.
>
>There are 2 notable limitations with Executable campaigns: 
>	1. They cannot include wait steps
>	2. They cannot call webhooks

### High Level Flow
As the diagram below suggests, the user experience begins with a Marketo form on seekout.com/pricing. When a user submits that form, the data goes into Marketo as normal *but also* is sent to SeekOut's Admin database. Within the admin database, the following checks are run:

1. User is not in the Auto-deny list (i.e. freemail domains, competitors, etc.)
2. User's account has not exceeded current SMB license limit (3)
3. User is provisioned a secure link to the payment portal, which is then passed to Marketo

After those checks run, the user's unique link is stamped to a field in Marketo (currently `Misc - Ops Field: String 01`). Once Marketo receives this signal, it checks a few other requirements:

1. Does the record have a value for company size? If not, request enrichment via ZoomInfo
2. Does the record belong to an account with fewer than 100 employees?
3. Does the record belong to an account that has any other open opportunities with SeekOut?

In the event that the answer to either the 2nd or 3rd question above is "no," the user is automatically sorted into a rejection bucket and sent an email informing them that they'll need to work with sales directly, and also give them the option to book time with the appropriate salesperson from within that email experience.

In the event that they pass both checks, the user is sent an email with the authorized link provided by Admin and guided through the rest of the self-service purchasing process on [Seekout.io](seekout.io). 
![SMB Marketo Flow.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/SMB%20Marketo%20Flow.png)

## Lists
The following smart lists and static lists help inform whether someone clears or fails the requirement checks, placing a final record of whether they were accepted or rejected into either of the appropriate lists for posterity. These smart lists are configurable and can be updated in the event that requirements change (e.g. we offer the SMB SKU to people at companies of 250 or less employees)

![Pasted image 20240321123215.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321123215.png)

### 00 - Enrichment Needed
![Pasted image 20240321112040.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321112040.png)
### 01 - Employee Size < 100
![Pasted image 20240405145328.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405145328.png)
### 02 - No Active Opportunities
![Pasted image 20240321111514.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321111514.png)
### 03 - Passed All Checks
![Pasted image 20240405150221.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405150221.png)


## Smart Campaigns
![Pasted image 20240405150333.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405150333.png)

### 100 - SMB Trigger
This campaign is the point of entry for the approval flow in Marketo and is intended to run after receiving the appropriate signals from the Admin database.


**Smart List:**
![Pasted image 20240405150832.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405150832.png)
**Flow:**!
![Pasted image 20240405150856.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405150856.png)
>[!tip] What about Enrichment?
>If enrichement is required, a separate campaign is requested. Generally enrichment occurs in under 60 seconds, and the requested campaign will attempt to retry enrichment up to 5 times. Once a record is successfully enriched, the controller is then called to check the remaining requirements. More information on this in the following 101 and 102 Smart Campaign sections.

#### Webhook Details
![Pasted image 20240405155159.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405155159.png)
### 101 - Request Enrichment
When this campaign is requested, we fire the standard ZoomInfo enrichment webhook, wait 1 minute, then either route someone to the `102 - Enrichment Loop` Smart Campaign *or* send them directly to the `200 - SMB Controller` Executable.
![Pasted image 20240321112430.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321112430.png)

>[!question] Why not implement the Enrichment Loop logic within this Smart Campaign?
>Technically we could. The only reason they were initially separated is to help us get a baseline on how fast ZoomInfo enrichment occurs. In our testing, it's generally been less than 1 minute, however that time may be extended if the system is under load, ZoomInfo is unavailable, or some other sort of unforeseen error. In a perfect world, no one ever qualifies for the Enrichment Loop, but it's there as a safety net as we gain learnings from a real-world/production deployment.

### 102 - Enrichment Loop
This campaign re-attempts sending someone to the `200 - SMB Controller` by waiting 1 minute and rechecking if the `ZoomInfo Last Updated` field receives a value. If it has a value, executes the controller campaign and removes that record from this flow.
![Pasted image 20240321113031.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321113031.png)
In the event that this loop executes 4 additional times, this campaign automatically sorts that record into the reject bucket so they can receive an update as soon as possible and instructions to either contact their assigned sales team member *or* wait for them to reach out (user's choice). Finally, the campaign writes an interesting moment to clarify why this person was rejected to provide the salesperson with detailed context.

![Pasted image 20240321113246.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321113246.png)

### 200 - SMB Controller
Simply put, this controller executes the remaining requirements and results in the user receiving the appropriate email response. 
![Pasted image 20240405151240.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405151240.png)

### 201 Review Company Size
This flow simply adds people to either a passed list or a rejected list, and stamps an interesting moment appropriately.

![Pasted image 20240321114318.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321114318.png)

**Interesting Moment text:**
* Accepted:
	* *Attempted to purchase SMB license and passed automated checks for company size. Employee Count: {{company.Num Employees}} (Limit: 100)*
* Rejected:
	* *Attempted to purchase SMB license but did not pass automated checks for company size. Employee Count: {{company.Num Employees}} (Limit: 100)*

### 202 - Review Active Opportunities
Similar to the previous executable, if the user is  in the `02 - No Active Opportunities` Smart List, they are added to an accepted list related to opportunities. If they are *not in* that list, they are automatically sorted into the reject bucket. Another interesting moment is also stamped

![Pasted image 20240321115555.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240321115555.png)

**Interesting Moment Text**
* Accepted:
	* *Attempted to purchase SMB license and passed automated checks for no active opportunities on {{system.datetime}}*
* Rejected:
	* *Attempted to purchase SMB license, but there were {{lead.Account Open Opportunities Count}} opportunities open with their account.*

### 203 - Check Country
This simply confirms the prospect is located in the US because that is the only country where this offer is currently valid.
![Pasted image 20240405151802.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405151802.png)
**Interesting Moment Text:**
- *Attempted to purchase SMB license but is located outside the United States. This offer is only available within the US.*
### 204 - Sort Accept/Reject Emails
This smart campaign is the final mechanism to add records to the `A - Accepted` static list, which will ultimately be used as the qualifier that the user should receive an email with an authorized sign-up link. This logic is governed by the smart list `03 - Passed All Checks`.

![Pasted image 20240405151914.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405151914.png)

### 205 - Populate Accepted Link
Requested by `204 - Sort Accept/Reject Emails`, this fires the webhook to create an authorized link for people who passed all requirements checks and kicks off the remaining executable campaigns.

![Pasted image 20240405152132.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405152132.png)
![Pasted image 20240405152253.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405152253.png)
>[!question] Why is this a trigger and not an executable?
>This is due to the unfortunate fact that you can't call a webhook from an executable campaign. The reason that isn't possible is because webhooks in Marketo can't confirm they've received the response and only that the request has been sent. Because executables are intended to control race conditions and order of operations, this could inadvertently create errors. So Marketo's response is to disallow webhooks from being called from executables. You could think of this trigger as "SMB Controller, part 2"

#### Webhook Details
Payload:
```
{
  "email": "{{lead.Email Address}}",
  "firstName": "{{lead.First Name}}",
  "lastName": "{{lead.Last Name}}",
  "company": "{{company.Company Name}}",
  "title": "{{lead.Job Title}}",
  "phone": "{{lead.Phone Number}}",
  "country": "{{lead.Country}}",
  "state": "{{lead.State}}"
}
```

![Pasted image 20240405155117.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405155117.png)

### 300 - Send Emails
Now that the email cohorts are sorted into lists, this executable simply sends the appropriate email.
![Pasted image 20240405152325.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405152325.png)

### 400 - Concatenate Next Steps
The intent of this campaign is to package up all failed checks in a single easy-to-read update for sales in the `Next Steps (new)` field. Sales is generally aligned and trained to reference this field as part of their normal MQL follow-up as well as any current/future notes relevant to a given record.

This campaign initially writes and concatenates all the check failures to the `Misc - Ops Field: Text Area 01` field, and then in turn stamps all of those updates to the `Next Steps (new)` field.

>[!question] Why not write to the `Next Steps (new)` field directly?
>This approach ensures that the field is only updated once and doesn't trigger several updates to the `Next Steps (historical)` field. There is an automation in SFDC that transfers the value of `Next Steps (new)` into `Next Steps (historical)` as a means of maintaining full detailed history of our interactions with a given person.
>
>Or stated another way, this approach helps us avoid maxing out character count limits on the `Next Steps (historical)` field.

![Pasted image 20240405152614.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405152614.png)
**Failure Text**
* *SMB: Failed company size check. Company size: {{company.num employees}}*
* *SMB: Account has {{lead.Account Open Opportunities Count}} open opp(s){{my.linebreak}}{{lead.Misc - Ops Field: Text Area 01}}*
* *SMB: user is not located in US{{my.linebreak}}{{lead.Misc - Ops Field: Text Area 01}}*
* *This person attempted to purchase an SMB license on seekout.com, but failed the following check(s):{{my.linebreak}}{{lead.Misc - Ops Field: String 03}}{{my.linebreak}}{{lead.Misc - Ops Field: Text Area 01}}*
### 401 - Sync to SFDC
With all the other business handled, now the program syncs the record to a particular SFDC campaign. Prior to doing that, however, we stamp 2 additional fields: `Latest Hand Raised Date` and `Acquisition Program`
![Pasted image 20240405153234.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405153234.png)
### 402 - Update SFDC Campaign Status
In the event that a form submitter becomes a customer/licensed user, we use this trigger to update their SFDC campaign status. This is for the benefit of down-funnel reporting.
![Pasted image 20240402144210.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240402144210.png)
![Pasted image 20240402144226.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240402144226.png)
## 03 - Emails
### 300 - Accepted [OPER]
![Pasted image 20240402144404.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240402144404.png)

### 300 - Rejected [OPER]
![Pasted image 20240402144434.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240402144434.png)


## 04 - Internal Alerts
![Pasted image 20240405153344.png](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240405153344.png)