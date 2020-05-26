---
layout: post
title: "React.js: do something after user finishes typing"
---
Say we have a  <b>`<textarea>` </b>  as user input and we want to do something after the user stopps typing.
First, why would we want to do this? <br/>
Imagine a scenario where this input area is a where you write to a file. We want to be able to append to files when
the user make changes to the input box. However, it's not in our interest to append to file every time the file changes.
This is because if the user types fast enough, which means the user can somehow "outpaste" the file's refreshing rate,
so when we try to update textarea's value in order to sync,
there may be many unwanted effect such as laggy, moving the cursor all the way to the end... <br/>
Alternatively, let's say we only want to save to file once a while when the user stops typing.
We save automatically every once in a while. Therefore, we have a smooth input area and a convenient auto save.
Everyone is happy.
<code>console.log('sdfsdf)</code>