
# Overview
This is the prototype of my hi-fi mockup from assignment 3, where I created a productivity web app consisting of to-do list, calendar, and notes tools

## Design Choices
 Here are the sources I referenced/used:
- https://codepen.io/billyysea/pen/whjbK for the gradient background
- https://codepen.io/franklynroth/pen/ZYeaBd for the to-do list inspiration
- https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server for the download button
- https://codepen.io/Tongyu_Wang/pen/MRwqgN for the notes section
- https://codepen.io/afarrar/pen/JRaEjP for displaying the current time and date

 Here are the differences between my mockup and this prototype due to technical difficulties
- The background of other pages doesn't automatically change when the home page's background color changed- I have considered adding a variable to keep track of color. However, since I had multiple javascript files, I wasn't able to implement this concept. I have also considered merging all my javascript files, but since they used various different libraries, they didn't work when all merged into one file. To fixed this issue, I added a checkbox at the top-left corner of the To-do, Calendar, and Notes pages so users can still change the background colors. 
- The calendar is not interactive- I was unsure of how to write functions that automatically fill in the calendar's dates & displays today's date based on the current time. This would be my next step if I choose to continue working on this project in my own time. 
- Certain colors, font sizes, and button sizes may not appear to 100% match with the mockup, but I have been using the same type of fonts as my mockup and tried my best to replicate the spacing & colors of all pages. 


## Known Bugs
- To do's edit button sometimes does not work (sometimes nothing happens after I edit a task then press ENTER). I tried my best to fix it but I'm not sure why it's not working. 

