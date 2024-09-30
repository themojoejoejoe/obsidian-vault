---
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - meeting
---
> [!note] Agenda + Notes
> 

<% tp.file.cursor(0) %>

> [!todo] Action Items

<% await tp.file.move("/SeekOut/Meetings/" + tp.date.now("YYYY") + "/" + tp.date.now("MM-MMMM") + "/" + tp.date.now("YYYY-MM-DD") + " - " + tp.file.title) %>