## Behavioral Scoring
Behavioral scores are typically managed via program-level tokens. This enables scoring changes to be done quickly and across a number of various types of behavior without having to navigate through multiple smart campaigns - update the score here, and it's updated everywhere that scoring token is used.

>[!tip] Marketo Measure (pka Bizible) Customers Take Note!
>While you can score things like email clicks and webpage visits, Bizible cannot see these as "meaningful engagement." In order to meet that bar for a given touchpoint, online channels require form submissions and offline channels (i.e. events & webinars) require membership in a given SFDC campaign.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240221143144.png)

### Person Rating Matrix

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229171319.png)
### Scoring Campaigns
The various scoring triggers are organized into a series of folders that clarify the originating channel or source of the behavioral score change. There's no set right or wrong way to do this.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240221143313.png%7C300)

#### Contact Us/Hand Raise

These are triggers for behaviors that you consider to be the highest value. In many cases, you can consider this folder like "auto-MQL" scenarios.

Your triggers may look different as not every business has the same set of requirements when it comes to high value behavioral thresholds, but the tokens that control these scores *generally* give enough points for anyone with a decent demographic score to MQL. You'll also notice in the [lifecycle](obsidian://open?vault=Mesa&file=MOPs%2FProspect%20-%20Customer%20Lifecycle%20Model) that the points don't necessarily matter because there are triggers for the MQL stage that will force anyone to MQL *regardless* of their demographic profile.

For the sake of brevity, this guide won't cover *every* trigger, but the below can help give you a sense of how they are generally structured.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240229151828.png%7C400)
>[!question] Why "contains" on a fills out form trigger?
>In this particular instance, Admin Ops occurred in an access-controlled partition. This is an expensive feature, but it is a great way to prevent other users from changing things they aren't authorized to change. For example, you *probably* don't want a marketer with an MQL goal to change how your scoring programs work ;)
##### Fills out Contact Us Form
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229152029.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229152047.png)

##### Fills out Demo Request Form
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229152141.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229152428.png)
##### Fills Out LinkedIn Lead Gen Form
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229152533.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229152547.png)

##### Fills Out Form (Other)
This form catches any other form fill type to give it a nominal number of points. In this use case, the `not contains` list was:

- contact
- hand-raise
- content
- event
- webinar
- unsubscribe
- subscription
- preference
- Demo Request
- ROI

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229153538.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229154042.png)


#### Content

These are split between 1P content downloads and content syndication. The reason is so you can potentially differentiate how you score these based on data. In this case, they reference the same scoring token because we noticed similar impact to MQL to SQL conversion rates. Which makes sense, given that most content downloads are educational TOFU... *content.*

##### Content Consumption: Standard
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229163406.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229163421.png)

##### Content Syndication
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229163448.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229163506.png)

#### Email

Whether you use an attribution platform like Bizible or not, I don't recommend scoring on Email clicks. The reason why is *generally* clicking an email does not qualify as a buying signal.

If you *absolutely* want to score based off email clicks, I'd recommend including a parameter that helps you classify the type of click it is. These could be things like (but not limited to):

* Hard Sell CTAs
* Request Demo CTAs
* Request Contact CTAs
* 


#### Events & Webinars
I like to break events out into 3 classifications to enable unique scoring possibilities. That said, the set up of each trigger is unique to a specific program type in Marketo, and Tradeshows and webinars have extra scoring grades. I like to call these "super attended." 

>[!tip] Super... Attended?
>This is just a memorable term I like to use for statuses beyond "attended." This approach enables an additional possibility to score event-type-specific stasuses uniquely. In the case of webinars, this would be attending the on-demand version. In the case of live events (i.e. hosted/field events) and tradeshows, this could be something like attending a session or being marked "hot" (aka: influenced) by the booth staff, attending a sponsored/hosted session, or simply visiting the booth. Tradeshows approach each of these statuses in an additive way, meaning if you first mark someone as visited booth, then attended session, *then* influenced, they'd get points added for each association. Webinars typically only score the attended OR the attended on-demand status, but you still might want to do both to reflect scoring for a hyper-engaged attendee.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/Pasted%20image%2020240229170046.png%7C400)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229170922.png)
![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229170937.png)

#### Lifecycle
This is simply an executed campaign from the lifecycle program that resets behavioral score to 0 when a record is recycled (i.e. an MQL that is dispositioned and sent back to marketing for further nurturing).

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229171038.png)

#### Web
Web engagement can be a tricky one I also don't generally recommend. The reason why is:

1. This only works for cookied records (people that have clicked a marketo email or filled out a marketo form)
2. It stacks with other "non-meaningful" touchpoints from an attribution perspective and can create gaps in attribution reporting.

#### Scoring Exclusion
>[!tip] There may be people you don't want to score. So don't.
>Use cases vary from business to business, but common exclusions include students, competitors, disqualified people/accounts, internal users, or certain job 
>roles not relevant to your ICP or buying committees (i.e. Analysts, Sales, Marketing, etc.). 

There are many ways to configure this list, so don't consider the below a model, but rather *inspiration:*

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229164130.png)
#### Decay
You may want to reduce a person's score if time goes by without any additional behavioral interactions. One important consideration to make, however, is you want to make sure you avoid scenarios where a reduction in score could still cause someone to MQL (i.e. if the score change and the subsequent person rating change still fall within the MQL definition). This is why it's critical to reset score when records are recycled.

![Image Description](https://raw.githubusercontent.com/themojoejoejoe/obsidian-vault/main/z.Images/https%3A%2F%2Fraw.githubusercontent.com%2Fthemojoejoejoe%2Fobsidian-vault%2Fmain%2Fz.Images%2FPasted%2520image%252020240229165314.png)

### Calculate Behavior Rating

## Demographic Scoring

## Person Rating
