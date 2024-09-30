## Marketo + Bizible + Tableau implementation at SeekOut
* **Situation:** When I started at SeekOut there was no previous marketing operations function. We were using HubSpot primarily as an Email Service Provider and also for forms & landing pages. Our implementation was feature-limited and I knew we needed to either dramatically upgrade our level of services *or* identify a better alternative Marketing Automation Platform.
* **Task:** The first thing I needed to do was define requirements for what capabilities we needed from a MAP, as well as other capabilities like attribution and data visualization were needed by the business in the near term. Once I had those requirements, I needed to implement all of the above as quickly as possible so that we as a business could gain learnings and iterate accordingly.
* **Actions:** I developed a habit for drafting comprehensive narratives from my time at AWS, and I found this to be a constructive way to both capture comprehensive requirements as well as align with other stakeholders and leaders for feedback and ideas. This included data management, such as lifecycle and lead scoring programs, repeatable program templates to make marketing execution more scalable, and channel & campaign-level attribution capabilities.
* **Results:** Ultimately I recommended Marketo as the best MAP due to it's workflow management, as well as campaign operations capabilities, Bizible/Marketo Measure for attribution, and Tableau for data visualization. Drawing from my agency experience implementing over a dozen Marketo instances, I used all of that requirements documentation to help me write comprehensive workback schedules and advocate for resources; essentially I was able to say "I can do it this fast as a single FTE, this fast with an agency team with this level of spend, and *this* fast with a higher spend." 
	* As a result of all of that, I was successful in securing the medium-sized incremental investment in agency support (~$100K), had Marketo stood up and ready to use within ~3 months from receiving access and Bizible a few weeks after that.

## Campaign Efficiency Improvement
* **Situation:** SeekOut's original definition of a Marketing Qualified Lead was limited to inbound demo requests, and they had been funding a paid media strategy that was essentially blind. We spent money because we knew paid ads results in an increase in inbound demo request volume, but at the time SeekOut lacked the tooling and expertise to be able to distinguish which demo requests originated from paid search plays and which were organic.
* **Task:** I needed to help the business quantify these as well as recommend optimizations to our paid search strategy.
* **Actions:** After implementing Bizible, I was able to clearly demonstrate and track with near-real-time accuracy how many MQLs came not just from specific channels, but also specific campaigns. Further, I was able to see which of these converted to pipeline, and ultimately, revenue. This helped me establish a baseline of what our current level of paid search spend was resulting in, and became the grounds for further experimentation. Given that our paid strategy was essentially blind, I recommended an approach where we cut spending by nearly 60% for ~2 quarters (specifically by defunding underperforming campaigns) to test the hypothesis that we could minimally improve our Return On Ad Spend to be 1:1 - meaning for every dollar we spend in paid search advertising, we can expect to get at least $1 back in revenue.
* **Results:** We slashed our spend, saving literally hundreds of thousands of dollars, and over the course of this experiment eventually did reach our goal. 
![[Pasted image 20240214201346.png]]
![[Pasted image 20240214202233.png]]
## ABM Implementation
- **Situation:** SeekOut had not intent platform of record and wanted to both add intelligence to sales outbound processes and develop account based marketing plays.
* **Task:** Define clear ABM platform requirements and recommend the ideal solution for SeekOut 
* **Actions:** 
	* Worked with marketing stakeholders to understand their planned strategies. 
		* Learned they wanted to use ABM as a means of database growth for records at accounts showing some level of purchasing intent.
		* Gained an understanding of what sort of keywords would signal purchasing intent. I.e. if someone was consuming content containing phrases like "internal talent management solutions" a certain number of times within a relatively short period, that was a strong signal that they may fit our ICP for a new solution we recently brought to market.
	* Drafted a requirements narrative and reviewed it with sales, marketing, and finance stakeholders for alignment.
	* Implemented 6Sense and integrated with SFDC, Marketo, & LinkedIn
	* Created an iframe dashboard in SFDC for all sales people to identify what their target accounts were doing as well as surface potential opportunities for intelligent prospecting. Enabled sellers to see accounts along an "awarness, consideration, decision" framework
	* Created orchestrations to grow our database with relevant titles from ICP accounts showing intent.
* **Results:** Grew our mailable database by nearly 20% in the first 90 days and increased Lead-to-SQL CVR from 26.7% to 64.1% in the first 90 days (average of 49.4%).
![[Pasted image 20240228185500.png|500]]

## Scoring Optimization
- **Situation:**
    - SeekOut had no lead scoring model, resulting in arbitrary MQL targets. The initial setup led to a high volume of MQLs but a very low MQL-to-SQL conversion rate of 1.4%, eroding the trust between marketing and the SDR team.
- **Task:**
    - Overhaul the lead scoring model to improve the quality of MQLs sent to SDRs, thereby increasing the MQL-to-SQL conversion rate and rebuilding trust with the sales team.
- **Action:**
    - Partnered with marketing stakeholders to redefine what constituted an MQL, adjusting point values for behaviors and demographic tiers.
    - Implemented a modular lead scoring system that allowed for easy adjustments.
    - Collaborated with sales, marketing, and RevOps to ensure the new model met all teams' needs and expectations.
    - Launched a small-scale test to validate the new model before full implementation.
- **Result:**
    - Increased the MQL-to-SQL conversion rate from 1.4% to 12.8% within a year.
    - Reduced the average time from MQL to SQL by 13.8 days, speeding up the sales process.
    - Restored and enhanced trust with the SDR team, leading to their eagerness to partner on new marketing experiments and strategies.
    - Grew our mailable database by nearly 20% in the first 90 days and increased Lead-to-SQL CVR from 26.7% to 64.1% in the first 90 days (average of 49.4%).
- **Lessons Learned:**
    - Trust is earned through consistent, results-oriented actions.
    - Aligning sales and marketing through data-driven strategies and clear communication significantly improves team dynamics and business outcomes.
## Self Service Licensing
1. **Situation:** "At SeekOut, we identified SMBs as a significant yet under-optimized revenue source due to high churn rates and labor-intensive onboarding processes."
2. **Task:** "My task was to devise a strategy that could automate the sales and onboarding process for SMBs, thereby reducing churn and labor costs while unlocking a new revenue stream."
3. **Action:** "To validate this idea, I spearheaded a cross-functional collaboration involving finance, marketing, engineering, and product teams. We launched a pilot by sending a secure link to a microsite for self-service purchasing to a pre-approved list of SMB prospects. This initiative required convincing leadership of its potential and meticulously planning the execution to ensure a secure and scalable solution." 
4. **Result:** "The initial response was highly positive, with 3 new deals won from a small, largely unengaged audience of 290 prospects. This success has led us to work on integrating this self-service option into our website, aiming to tap into a market potential estimated at over a billion dollars."
5. **Learning:** "This experience reinforced the importance of agility and innovation in product offerings and the value of cross-functional teamwork in executing new strategies. It highlighted the potential for technology to streamline operations and open up new markets, lessons I'm eager to bring to my next role."