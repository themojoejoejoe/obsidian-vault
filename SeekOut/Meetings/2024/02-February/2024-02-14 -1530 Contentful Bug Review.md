
---
date: 2024-02-14
tags: meeting
summary: 
attendees: Adam Britto
---

> [!note] Agenda + Notes
> 

* **Pages not publishing in contentful**
	* Need to trigger deployments directly to Main
	* Builds were "totally fucked" - Repo was in a weird state, adam fixed it (likely caused by Sam)
* **Help Center Links aren't Updating on Category Page**
	* Slugs on the pages weren't always correct
		* Adam corrected slugs and that broke everything under learn/support, which started returning 500s
		*
* **Help Center Throwing 500 error**
	*  Adam thinks what happened was when he published that page, it triggered a build to generate a subset of pages, but because there was a circular reference (2 pages linking to each other). When he removed the link to applicant review (the reference) it fixed the issue.
				* Adam thinks it's a contentful issue, not anything anyone did. "Might just be an unfortunate circumstance of tech stack"
				* Adam offered to point out a few things for full time dev to fix
* **Blog redirecting to the homepage**
	* PR fixed the issue related to 1st point (pages not publishing)

Builds are back to full functionality in both responsibilities 

> [!todo] Action Items

