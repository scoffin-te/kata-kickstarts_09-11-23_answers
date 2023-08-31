# Kata Kickstarts - Vue (September 11, 2023)
​
This is a small Vue project scaled-down from the capstone starter code. This document walks you through how to set up and run the project, as well as providing a handful of katas to work on in the code.
​
## Project setup
​
The first thing you'll need to do is to download any dependencies by running this command:
​
```
npm install
```

**.NET**
```
VUE_APP_REMOTE_API=https://localhost:44358
```

**Java**
```
VUE_APP_REMOTE_API=http://localhost:9000
```

Start your Vue application with the following command:
​
```
npm run serve
```

## Icebreakers

### Kata #1

The h1 in Home.vue is currently static HTML.

- Create a data property called header to hold its text value.
- Then, use one-way binding to populate the h1 with the data property's value.

Reminder: One-way data-binding means that changes to the data in the script are reflected in the HTML when rendered.

### Kata #2

The input in Home.vue is currently static HTML.

- Use two-way data binding to setup a data property named user for the text value of the input.
- Then, add that data property to the p element so that you can see the value dynamically change.

Reminder: Two-way data-binding means that changes to the data in the script are reflects in the HTML and vice versa when rendered.

### Kata #3

The hobbies array is a data property holding several elements. We need to display them on the homepage.

- In the #hobbies ul, generate an li for each element and display its value.		


## Breakout rooms

### Kata #4

Our homepage currently has anav items that aren't linked to anything.

- In router/index.js, setup routes for the homepage and "About us" page
- Then, in App.vue, setup a link to these routes in the nav.

### Kata #5

Our homepage currently has anav items that aren't linked to anything.

- In router/index.js, setup routes for the homepage and "About us" page.
- Then, in App.vue, setup a link to these routes in the nav.

### Kata #6

Our "words to live by" are sage and may be needed on other pages of the app.

- Remove the static HTML for this timeless phrase and place it in a centralized variable in the Vuex datastore.
- Then, pull that Vuex variable into the homepage.
​
## Challenge

### Kata #7 