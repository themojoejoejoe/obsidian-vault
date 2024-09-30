---
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - note
---
---
<% tp.file.cursor(0) %>

<% await tp.file.move("/SeekOut/Notes/" + tp.date.now("YYYY") + "/" + tp.date.now("MM-MMMM") + "/" + tp.date.now("YYYY-MM-DD") + " - " + tp.file.title) %>