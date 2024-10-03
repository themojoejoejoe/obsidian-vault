`Lead Source`, or `Person Source` in Marketo, refers to the channel that brought a record into the database. `Lead Source Detail` is a more granular look into the specific subchannel or "platform" a record interacted with to enter the database.

How you set up this program will depend on Channel and Subchannel definitions you track at your company and requires some alignment conversations with stakeholders in Marketing, Sales, Finance, and potentially other internal teams. The reason this cross-pollination is important is to avoid future disagreement or misalignment in what channels and subchannels are tracked. This is *incredibly* important for other capabilities that may come later, such as Attribution, and ensures the entire organization is operating with the same definitions and understanding.

>[!warning] New Field Creation Required
>The approach outlined here requires several fields you may not have in your database: `Lead Source Category`, `utm_medium`, `utm_source` (highly recommend you create fields for all the utm parameters and use hidden fields on your forms to capture), `Lead Source (Most Recent)` and `Lead Source Detail (Most Recent)`. Lead Source Category can be used as a coarse way to categorize channels as Outbound, Inbound, Referral, or Legacy (read: this is so old we have no idea but don't want a blank field to create confusion) 

# LS & LSD Management (The Build)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%2520image%252020240222105506.png%257C400)
## A - Initial Processing Requested
This trigger is called from the [[Prospect - Customer Lifecycle Model]] program whenever a new record is created. The only requirement to flow through this trigger is that `Person Source` is currently empty.

The Flow then executes the `100 - Source Assignment: Router` campaign

> [!tip] Why call this via a Request Campaign?
> Great question. The short answer is to prevent race conditions across various triggers. The slightly longer answer is by calling certain triggers at specific times, Marketo is able to ensure data is stamped in the correct order to prevent other issues for common practices. If you don't do this, it *could* become possible for a record not to qualify for a certain trigger because all the filter criteria is not set at the time the triggered action is detected.
> 
> In this framework, when a lead is created they are first sent to a data management campaign to normalize data in certain fields (i.e. State/Country values), then demographic scoring, then lead source stamping. Creating consistency in your flows can help speed up troubleshooting later.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222105659.png)![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222110641.png)
## 1. Manage Source Fields
The channels and subchannels you track may be different than the below, but the common thread here is that the primary executable campaign `100 - Source Assignment: Router` sends records to the appropriate flow based on the UTM parameters present as they enter the database.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%2520image%252020240222110927.png%257C400)

### 100 - Source Assignment: Router
Executable campaigns are cool because there's no Smart List to setup *and* they complete executing before a record moves on to the next flow step. There are some limitations to be aware of, but more information can be found [here](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/flow-actions/execute-campaign.html?lang=en).

The Flow then works off a series of Smart Lists. For the sake of brevity, this guide won't document *every single smart list* and paired executable campaign (indeed, this flow has 17 choices and not all can fit into a single screenshot!), but will share an example below.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222112047.png)

>[!note] Default Choice is to Send an Internal Alert
>This default choice ensures that if a lead enters the database without any information that can help sort them into any of the above lead source campaigns, Marketo admins can receive an email alert to review and take any necessary actions to fix the current error and prevent them from happening again in the future.

### Example Executable Campaign
Lead Source is determined based on the `utm_medium` parameter value present on lead creation in Marketo. 

Each of the above folders contains a smart list like this to define who qualifies for which choice step in the router above.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222112417.png)

The executable itself then looks like this:

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222112523.png)

The clever thing about this approach is that no additional triggers are needed to set the `Lead Source Detail` value. Instead, whatever value is present in the `utm_source` field is stamped to `Lead Source Detail`. In this Organic Social example, values could be LinkedIn, Twitter, or Facebook.

>[!question] Why add to list?
>Because UTM parameters are overwritten on every new form submission or list import *and* Marketo has data retention limits for filters like *Data value was changed*, this creates a record in Marketo that will never expire. You probably will never need to reference these, but they can be a lifesaver if there's ever a need to troubleshoot or you eventually migrate from Marketo to another MAP.


### Non-Standard Exceptions
Humans can forget to add URL parameters or use a non-standard value, so you *may* want to detect certain indicators to classify records into a "non-UTM" lead source. The following items describe a few such scenarios.

#### Non-Standard UTMs
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222114230.png)
The flow here simply adds these records to a non-standard list and can *then* call the `199 - Source: ERROR` campaign to issue an alert

>[!note] "na" is the default value for hiddent UTM fields on Marketo forms in this example

#### Organic (non-UTM)
This is a smart one to add for traffic originating from organic search.

The Smart List relies on *either* of the following fields and corresponding values:
* `Original Referrer`
	* bing.com
	* ask.com
	* search.yahoo.com
	* google.
	* search.aol.com
	* wow.com
	* webcrawler.com
	* dogpile.com
	* duckduckgo.com
* `Original Search Engine`
	* Google
	* bing.com
	* Yahoo
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222114458.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222114926.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222114946.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222114959.png)


#### Social (non-UTM)
This one uses original referrer as well and expands into less frequently used social platforms by marketing, like Reddit or Slideshare. Otherwise it acts as a safety net in the event a marketer forgets to use a UTM parameter on a link *or* an external party links to our site without knowing the standard parameters (the latter happens far more often than the former)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115056.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115125.png)
#### Direct (non-UTM)
Obviously use your own domain(s) here :) 
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115639.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115713.png)
#### Web Referral (non-UTM)
This one can cover things like referrals from other internal tools, such as a chatbot (Intercom below), Web Service API, or other original source info (Zoom/ZoomInfo)

*Advanced Filter Logic: 1 or (2 and 3) or (4 and 5)*
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115735.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115901.png)

#### Sales Generated (non-UTM)
It's a fairly ubiquitous truth that sales people can create chaos in systems. This lead source helps track people created manually by sales and credit them back to the channel you use to track sales prospecting (in this case, *literally* salesprospecting). There's a standard version of this that relies on the `utm_medium` value, but it functions like the other standard channel executable campaigns.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222115946.png)

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222120005.png)

### 199 - Source: ERROR

This campaign simply fires an alert indicating a lead source error with a link to the record.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222124950.png)

## 2. Reports
These contain basic smart lists and reports to monitor basic issues and people performance reports related to Lead Source fields.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%2520image%252020240222125148.png%257C300)
## 3. Last Touch Management
There are 2 smart campaigns in this folder: one to stamp the initial values Lead Source values to the Most Recent fields, and another to manage ongoing updates. If you're using something like Bizible to track touchpoints uniquely and map the UTM parameter values to the relevant touchpoint fields, *the below is completely unnecessary*. 

### 01 - LS/LSD to Most Recent
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222125345.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222125358.png)
### 02 - Ongoing Updates
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222125435.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/%252Fthemojoejoejoe%252Fobsidian-vault%252Fmain%252Fz.Images%252FPasted%252520image%25252020240222125501.png)
