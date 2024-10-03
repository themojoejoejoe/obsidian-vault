## Basic Overview
Basic is not necessarily bad. The model in this guide leverages a slighly modified version of the classic Sirius Decisions waterfall model, as depicted below. Combined with a platform like Bizible, this model can help you track prospects and customers separately, and *boomerang* customers back to previous stages to enable attribution of expansion opportunities.

> [!question] What's a boomerang?
> This refers to a practice of automatically reverting a record to a previous stage. For example, in a customer lifecycle model, after an opportunity is closed you may want to revert customers back to a lifecycle status of `Customer`. When you do multi-touch attribution later, you can group similar prospect and customer stages (i.e. MQL vs CQL) into a single classification of "Marketing Qualified Lead," which can be in turn used in a default or custom attribution model (depending on the stage). This guide will also include more information about how to configure Bizible appropriately.

>[!warning] Renewals not included
> In the instance this model was deployed in, Renewal opportunities were generated automatically immediately upon an opportunity being marked `Closed Won`. To simplify attribution processes (because U-, W-, and Last Touch models would all inherently be somewhat corrupted), MOPs and RevOps teams aligned on excluding renewal opportunities from lifecycle reporting and instead focused on expansion/upsell opportunities. Your mileage may vary greatly depending on how your business classifies different opportunity types. 

To understand this model fully, including how records move from stage to stage, please review the individual stage definitions following this image:

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216123122.png)


### Prospect Lifecycle Stage Definitions & Transition Rules
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216123158.png)
﻿﻿
#### Golden Path:

This refers to stages with positive outcomes, culminating with a closed won opportunity. Think of this as the path where everything goes SeekOut's way. It is comprised of the following stages:

1. **Prospects** – This is the default starting point for new records with no measurable history of engagement.
2. **Engaged** – Records transition to this stage in 3 scenarios: 1/ when they begin accruing a behavioral score, 2/ when an MQL is rejected by sales, or 3/ when an opportunity is closed and not won. In the latter two scenarios, the record's behavioral score is also reset.
3. **MQL** – Records enter this stage when their cumulative lead score reaches or surpasses our scoring threshold. At this point, leads are converted to contacts and alerts are sent to the appropriate sales team member.
4. **TAL** – In the event that an SDR attempts contact but is unable to set a meeting, they will update a record’s Lead/Contact Status to “Actively Working.” This provides a mechanism for SDRs to ensure they comply with the new MQL follow-up SLA, but simply haven’t been able to connect with the individual yet. After 2-3 unsuccessful attempts, they will update the Lead/Contact Status to Remarket, which will then reset that person’s score and place them back in the “Engaged” stage.
5. **SAL** – This stage indicates that an SDR has established contact with an MQL or TAL _and_ has set a meeting. At this point an opportunity will be created with a stage of "discovery," and any record associated with that opportunity will automatically be added to this stage with a Lead/Contact Status of Active Opportunity.
6. **SQL** – Records are automatically triggered into this stage when the opportunity stage is updated to “Demo” (or any other downstream opportunity stage). It is possible for any record to bypass previous stages if an opportunity is opened with the appropriate stage.
7. **Closed Won** – Records are automatically triggered into this stage when the first opportunity they are associated with is updated with a won status. At this point, we consider them a Customer.

#### Detour Stages:

These stages refer to a derivation from the ideal golden path above.

1. **Disqualified** – Records can be disqualified on an automated basis in scenarios where we know a record is highly unlikely to purchase SeekOut products & services. Initially, these scenarios include (but are not limited to) competitors and students. If an SDR or AE has other reason to believe a record will never become a customer, they can also manually disposition records into this stage by updating the Lead/Contact Status to “Disqualified.”
2. **Remarket** – A new Lead/Contact Status picklist option and detour stage that indicates a person should continue receiving marketing messages, but was either rejected by the SDR or AE, or was otherwise associated with an opportunity that was lost.

1. Records that have been in the MQL stage for more than 30 days will be auto-remarketed.
2. Records that been in the TAL stage for more than 30 days with no sales activity logged/updated will be auto-remarketed

﻿

### Customer Lifecycle Stage Definitions & Transition Rules

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240216123400.png)

﻿﻿

#### Golden Path:

This refers to stages with positive outcomes, culminating with a closed won opportunity. Think of this as the path where everything goes SeekOut's way. It is comprised of the following stages:

1. **Customer** – This will be the stage assigned to any record whose account type is currently “Customer” so long as they are not a licensed user. Licensed User is a parallel status that helps separate leads at customer accounts from individuals using SeekOut products.
2. **Engaged Customer** – Similar to the Engaged status in the prospect model, this stage helps us isolate customers who are engaging with SeekOut marketing (not product usage). These would be records in our database whose account type is “Customer” and have performed some scored action (i.e. filling out a form).
3. **CQL** – “Customer Qualified Leads” are either records who have entered into a to-be-defined Renewal period, completed a handraise action (e.g. contact us form submissions), or otherwise performed enough scored actions that warrants sales and/or CS follow-up to determine if there is an expansion opportunity.
4. **CAW** – This is an intermediary field between CQL and C-SAL that equates to an “Actively Working” status. This is an important stage because it enables us to measure and enforce SLA compliance between teams/departments.
5. **C-SAL** – This stage is for records added to a Stage 1 expansion or renewal opportunity.
6. **C-SQL** – This stage is for records added to a Stage 2 expansion or renewal opportunity, and is the point in the deal cycle when the opportunity owner is required to quantify pipeline amount.
7. **C-CW** – This stage is for records associated with closed won renewal or expansion opportunities. Unlike the prospect model, after a record achieves this stage they will be “boomeranged” back to an Engaged/Active Customer or Licensed User status (whichever applies)

#### Detour Stages:

These stages refer to a derivation from the ideal golden path above.

1. **Licensed User** – This stage identifies customers who have access to SeekOut products as users. As these users qualify for later stages, they will eventually boomerang back to this stage. 
2. **Former Customer** – In the event of account churn, former customers will be assigned this stage. 
3. **Remarket** – If a customer opportunity is lost for any reason, they will be assigned to either the “Marketing Rejected Customer” or “Sales Rejected Customer” stages. In practice, these are similar to the MRL/SRL fields on the prospect lifecycle and help us quickly identify how far a record got in the deal process before the opportunity was closed.

# Marketo Build
The lifecycle model is managed by two default Marketo programs: one to establish initial processing flows, and another to manage ongoing updates.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Screenshot%202024-02-28%20at%2016.47.25.png%20%7C300)
## Initial Processing
This program contains a number of jobs that interact with other aspects not *directly* related to the lifecycle but integral nonetheless. These include things like executing:

1. Data normalization campaigns (i.e. country, state, job role, job level)
2. Demographic scoring
3. Lead source stamping
4. Privacy/Compliance management
5. Enrichment

> [!note] Modularly constructed for infinite configurability
> You may not have things like ZoomInfo (et al) to enrich records upon creation. You may add additional processes to this as you build out your Marketo instance or broader tech stack. The reason this is broken into such a modular structure is so you can "pick & pluck" the elements you need or add new ones unique to your use case. Don't think of this as comprehensive, but instead think of it as a good starting point.

Campaigns are classified in 3 ways:
1. Operational Processing (OP) - these are points of origin, or "controllers"
2. Staging Executables (STGD) - these run in order
3. Asynchronous updates (ASYNC) - these can run at any time

There are also a number of static lists this program refers to. These are useful for placing people in/out to inform choice steps, error handling, etc.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228170811.png%7C400)

### 00 - OP: Person is Created
This is abbreviated as OP because it is the starting campaign for *operational* processing upon a new record being created in Marketo. Doesn't matter where they came from, this will *always* be the first trigger a new record qualifies for... Provided you use the "person was created trigger" sparingly. 

> [!question] Why executables versus request campaigns?
> Executables are generally preferable to simple request campaigns because a record must *fully* complete the executable flow before advancing to the next flow step. This prevents race conditions between triggers and helps introduce basic order of operations into your instance that you can customize to your heart's content. There are some limitations to executables to be aware of, and request campaigns aren't necessarily inappropriate to use... but in general, where possible, executables are going to be a significant contributing factor to your instance's ability to scale along with your business.

The smart list is literally just the trigger. If you can't figure this part out, you might be too stupid to live. 

I believe in you.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228172357.png)

The flow simply adds members to a static list to confirm processing began (which is later referenced by other smart campaigns), then in turn requests the next campaign in the sequence.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228172452.png)

### 01 - STGD: Send to Enrichment
If you use a 3P service to enrich data, the best time to do it is upon initial entry to the database. *How* this campaign does that will depend on your particular service. For example, some services rely on calling a webhook. Due to API call limits, you may want to throttle what records you enrich based on some sort of internally defined criteria. That can be done from whatever campaign this calls

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228172859.png)

### 02 - STGD: Send to Data Management/Standardization
This trigger kicks off any data management/standardization campaigns you may have configured. I know, shocking stuff.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228173959.png)
The flow will ultimately depend on what sort of data management campaigns you have constructed in your instance, but this example is a fairly common one. This flow executes campaigns to:

1. normalize country values to 2-letter ISO standards
2. normalize state values to 2-letter ISO standards
3. Categorize Job Role based on Title
4. Categorize Job Level based on Title
5. Request demographic scoring to begin
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228181650.png)



### 03 - STGD: Send to Demographic Gating
This setup initiates [demographic scoring](obsidian://open?vault=Mesa&file=Personal%2FMOPs%2FScoring) and will add any members who do not complete demographic scoring withing the given wait period to static lists which can then be used to trigger alerts.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228182010.png)
### 10 - OP: Initiate Remaining Processing
This campaign requests all processes that either rely on data provided by the staged processes above or can run independently (thus the ASYNC prefix)

In this example, the primary trigger is when a record is added to the static list for demographic "gating" being completed. Members are added to this list from within the [demographic scoring](obsidian://open?vault=Mesa&file=Personal%2FMOPs%2FScoring) program.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240228182253.png)

### 11 - ASYNC: Send to Person Sourcing
The asynchronous jobs in this program are intended to run after all other critical steps are completed in the right order (they're asynchronous because the timing of these jobs won't affect other processing).

This first one ensures that a record is assigned the most appropriate Lead Source (aka: *Person Source* in Marketo) and Lead Source Detail (if present/known). This is simply a campaign that requests another program to run:

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240909074239.png)

### 12 - ASYNC: Send to Privacy/Compliance
This request campaign requests the program summarized in [Marketo Compliance Engine](https://publish.obsidian.md/moperator/MOPs/Marketo+Compliance+Engine)

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240909074259.png)

### 13 - ASYNC: Send to Lifecycle Processing
Now that all critical initial processing has been completed for a new record, the record is routed to the lifecycle program to determine which lifecycle stage they are in.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240909074448.png)


## Lifecycle Processing
This is what you came here to see :) 

This program is organized into a series of folders in numerical order of current lifecycle stages. In general, each folder is comprised of several assets:

1. Smart List to Define Stage Definitions
2. Smart Campaigns (triggered and executable) to stamp appropriate values

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240909074646.png)

>[!question] Why break out every step as a separate executable campaign?
>This approach makes the lifecycle model more modular, which has two primary benefits: 1/ it makes it easy to expand/build upon the model, and 2/ it makes it easy to understand the order of events at a high level, even for the less experienced Marketo user.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240909075721.png)

### 000 - Sort into Lifecycle Status
This is the first campaign requested to kick off the entire process and is comprised of a single flowstep with a choice dedicated to each lifecycle stage. As a result, the stages are ordered in reverse from "C-CW" (Customer Closed Won) through Prospect.

For sake of space, the screenshot only contains the choices above the fold, but you can see how they simply reference the definitions smart list associated with each stage and subsequently call that stage's "controller" - which is another request campaign.
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images//themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240909081554.png)

