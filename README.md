# Daily-Planner
This is a very basic daily planner for the browser. It takes your input for each block of text and stores the information locally. Once when it crosses the hour marks it updated the blocks of time to show a past, current and future events for the day.

This small project was incredibly satisfying and really showcases how great jQuery is for dynamic elements in the DOM.

Changelog:

1. Created an `index.html` with a skeletal structure with the sole purpose of giving me an idea of how I wanted my HTML structured. it really helped the formatting that I performed later for the javascript "populate" function.
2. Started by selecting references in my javascript to individual IDs in the HTML.
3. Used `moment.js` to incorporate real time values into the javascript so that the time shows when you load into the page.
4. Created values for a starting point and an endpoint for how many timeblocks we want in the page. in this case it goes from 9 am to 5 pm. However, if we wanted to we could reformat this code to have user inputs selecting when the first timblock's time begins and where it ends (i.e. 8 am to 7 pm).
5. Commented out my skeleton HTML code and wrote a for loop that will iterate one by one creating every row with the given formatting. In this case it runs from 9 to 17 (time values in 24-hr format).
6. Once the populated elements looked appropriate and I was happy with it I deleted the commented HTML. Then I went back to the for loop and started adding conditional logic to modify the colors of the textareas being used.
7. Created an event listener using jQuery to delegate from my starting section down to my final section in case of a click event happening on a button to run a function.
8. Once the button is Identified I gave it a data-type to save as a key in local storage. After that I gave the value of what was stored to be the value of the previous sibling (in this case the value of the text area right before each button.)

I was satisfied with the functionality of this website and it really worked better than expected. 