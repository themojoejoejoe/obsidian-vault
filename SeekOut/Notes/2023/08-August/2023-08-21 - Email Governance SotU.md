
---
date: 2023-08-21
tags: note
summary: Overview of current governance measures across email channel & tools
---
---

## Overview
The purpose of this document is to outline current email channel governance policies, identify gaps, and align go-forward strategies across sales, marketing, and customer success.

## Current Situation
SeekOut currently sends emails from four systems: 1/ SendGrid, 2/ Marketo, 3/ Outreach, 4/ ChurnZero.

SendGrid is used by the product/engineering org to send transactional notifications to current customers. Use cases for SendGrid include changes to billing information, product alerts, and license activation for new users.

Marketo and Outreach are used by the Marketing and Sales orgs, respectively, to send emails to both prospects and customers. These emails include multi-step nurtures, product announcements, newsletters, and other outbound commercial messages as necessary. Marketo emails can be HTML or text-based (dynamic by recipient), however Outreach emails are primarily text-based.

ChurnZero was recently adopted by the Customer Success organization as a means of facilitating 1:1 email communication between Customer Success Managers (CSMs) and their customers. This enables CSMs to better assist customers with onboarding and other aspects of managing their SeekOut account. These emails are text-based and typically transactional - meaning an unsubscribe option is not required *unless* the email includes an unsolicited marketing message (e.g. "*Stop by Booth 100 at HR Tech to learn more about...*").

Sales, Marketing, and CS have aligned that 1:many messages are sent via Marketo while messages sent through Outreach and ChurnZero are intended to be 1:1 communications. Otherwise, these platforms are managed by each team independently and they are not able to "see" emails sent from other platforms.

## Current Governance Policies
Email governance capabilities vary by platform, however these platforms and their differences are immaterial to the recipient; they only know they're receiving email(s) from SeekOut. Given a few recent perceptions that SeekOut sends "too much" email, it is critical that we adopt consistent governance policies, performance benchmarks and guardrails, and privacy considerations that are shared between these platforms. The following sections outline current governance settings within each platform.

### Marketo-specific Governance Policies 
1. ***Communication Preferences*** – Through the [Preference Center](https://www.seekout.com/communication-preferences) page, data subjects can opt in or out of specific types of email communications from SeekOut, unsubscribe completely, or simply update their profile. Every email sent from Marketo is designated as ***one*** of these communication types so that anyone who has indicated they do not wish to receive that type of email communication is automatically excluded from that send. These preferences are synced to the lead and contact objects in SFDC.
	1. Unsubscribes are synced to the *Email Opt-Out* field in SFDC.
2. ***Communication Limits*** - Marketo can only send an individual a maximum of 2 emails per week, spaced apart by at least 3 days. These settings can be overridden if needed, and do not apply to transactional email messages (i.e. billing updates, registration confirmations, etc.).
3. ***Standard Block List*** - As our database grows, we have created a blocklist mechanism that automatically excludes records who have existed in our database for more than 1 year but have no measurable engagement in the past six months. This ensures we only target the engaged cohort of our database, which improves email performance metrics and helps us more easily identify and delete inactive records. We *can* bypass this blocklist, however in past tests were not effective (inactive cohort remains inactive).
4. ***Dual-Custody Review*** – Regardless of who builds an outbound campaign, we require an additional person not involved in the campaign's construction to conduct technical and qualitative review. This reduces the risk of human error, establishes a consistent quality bar for outbound email marketing, and helps edify campaign owners with best practice knowledge and guidance.



### Outreach-specific Governance Policies




### ChurnZero




1. How do our emails perform relative to industry benchmarks?
	1. Open Rate: 22.0%
	2. Click Rate: 2.0%
	3. Unsubscribe Rate: 0.20% or less
2. Are there any performance guardrails for deactivating underperforming campaigns?