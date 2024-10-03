## 01 - Suspend Hard Bounces
This trigger catches any hard bounce (permanent delivery failures) on their first offense and marks them with a Marketing Suspended Reason of `Blocked from marketing emails due to permanent delivery failure (hard bounce) on {{system.datetime}}`

**Smart List:**
![[Pasted image 20240220133247.png]]
**Flow:**
![[Pasted image 20240220133309.png]]
## 02 - Suspend Soft Bounces (1st Offense)
This Trigger detects a soft bounce and places them in a holding bucket and suspends them temporarily (reason: `Temporarily blocked from marketing emails due to soft bounce`). It also does this for Outreach soft bounces.

**Smart List:**
![[Pasted image 20240220133429.png]]
**Flow:**
![[Pasted image 20240220133508.png]]
## 03 - Suspend Soft Bounces (2nd Offense)
This Trigger detects additional soft-bounces that *also* had a previous soft bounce. This establishes a pattern of deliverability issues and then marks a record as suspended with the following reason: `Permanently blocked from marketing emails due to repeated soft bounces`
**Smart List:**
![[Pasted image 20240220133656.png]]
**Flow:**
![[Pasted image 20240220133724.png]]