---
banner_x: 0.50116
date: <% tp.date.now("YYYY-MM-DD") %>
---

> [!tip] Inspo
><% tp.web.daily_quote() %>

>[!note] Daily Goals

<% tp.file.cursor(0) %>

> [!example] Today's Notes
```dataview
LIST
WHERE file.cday = this.file.day
```

> [!todo] Upcoming Tasks

```tasks
has due date
not done
group by due
group by tags
hide edit button
hide due date
```

> [!abstract] Quick Daily Notes




---

> [!example] Meetings
>  ```button
name New Meeting
type note(SeekOut/Meetings/<% tp.date.now("h  A") %> , split) template
action Meeting
templater true ```

```dataview  
TABLE summary, attendees, date FROM "SeekOut/Meetings"  
WHERE file.frontmatter.date = this.file.frontmatter.date  
```

> [!Note]  Notes
> ```button
name New Note
type note(SeekOut/Notes/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") + ' - ' + '\<\% tp.date.now("X") \%\>' %>, split) template
action Note
templater true
```dataview
TABLE summary FROM "SeekOut/Notes"  
WHERE file.frontmatter.date = this.file.frontmatter.date  
```

​