
---
when: 2023-07-19
tags:
  - meeting
---

> [!example] Attendees
> Sam Shaddox, Legal Counsel, SeekOut

> [!note] Agenda
> - Understand how/why this list was sourced, and confirm if it's legal and ethical
> - Summary of story so far:
>     - Piper & Steph discussed on 7/11 how a list was generated in lunchroom in front of Ben, Trevor, & Laura E. Steph said Anoop knows how the list was sourced, and that it was Aravind pulling data from HireEZ's SSO servers for subsequent enrichment via ZoomInfo.
>     - Steph later explained that she should have said she *hypothesized* this is how Aravind did it and claims she didn't know for certain but would ask. She then encouraged me to connect with Sam to understand how what happened was actually legal, ethical, and a matter of standard business operating procedures
>     - Sapna had confirmed on 7/29 prior that there was something shady about this list and that Kristin's direction was not to share broadly how it was sourced(see screenshot below)
>     - [Original List provided](https://zipstorm-my.sharepoint.com/:x:/g/personal/laura_espin_seekout_com/EUOQo2hVhgJEml1Kqqls8GwB-0SD7Z5HXP8HakbE6e9HqA?e=Vo2p4Z) includes PII
>     - Inclusion of domains implies we matched those to logins, which is typically the first step of an SSO process where it'll check the domain to a lookup DB to see what protocol to use
>  

## Meeting Notes

* HireEZ & Intelo: if you enter an email, it gives a unique response if you have an account
	* Example: try 300 different emails based on who we think might be a customer
	* only uses publicly available information
	* Fairly common technique to test login credentials
	* Only work related emails - not much enforcement or emphasis on 
	* matched names and profiles from emails they got. They never included 
	* "if we are going to do this, we don't want this to be broadly known this is a technique we're using"

> [!todo] Action Items
> Sam to sync with Aravind about how we can use ZoomInfo to do this more above-board (i.e. ZoomInfo)

![[Questionable-List-Import.png]]![[Pasted image 20230719105620.png]]