# Kata Kickstarts - Vue (September 12, 2023)
​
This is a small Vue project scaled-down from the capstone starter code. The back-end has been removed so we can focus on the front-end. 

This document walks you through how to set up and run the project, as well as providing a handful of katas to work on in the code.
​
## Project setup
​
(1) The first thing you'll need to do is to download any dependencies by running this command:
​
```
npm install
```

(2) Start your Vue application with the following command:
​
```
npm run serve
```

(3) Click on the localhost link that appears to open the application in a browser.

## Icebreakers

### Kata #1: Data-bind the homepage header

The h1 in Home.vue is currently static HTML.

- Create a data property called header to hold its text value.
- Then, use one-way binding to populate the h1 with the data property's value.

Reminder: One-way data-binding means that changes to the data in the script are reflected in the HTML when rendered.

### Kata #2: Data-bind the homepage name field

The input in Home.vue is currently static HTML.

- Use two-way data binding to setup a data property named user for the text value of the input.
- Then, add that data property to the p element so that you can see the value dynamically change.

Reminder: Two-way data-binding means that changes to the data in the script are reflects in the HTML and vice versa when rendered.

### Kata #3: Create a list item for each element in the hobbies array

The hobbies array is a data property holding several elements. We need to display them on the homepage.

- In the #hobbies ul, generate an li for each element and display its value.		


## Breakout rooms

### Kata #4: Link the navbar items to views

Our homepage currently has nav items that aren't linked to anything.

- In router/index.js, setup routes for the homepage and "About Us" page
- Then, in App.vue, replace the <spans> in the nav with routed links.

### Kata #5: Build and import a component

On the "About Us" page, there is a static header for and list of contact information.

- Build a separate component for this HTML in ContactInfo.vue.
- Then, import it back into AboutUs.vue.

### Kata #6: Centralize data in the Vuex datastore

Our "words to live by" are sage and may be needed in other places in the app outside of the homepage.

- Remove the static HTML for this timeless phrase and place it in a centralized variable in the Vuex datastore.
- Then, pull that Vuex variable into the homepage.
​
## Challenge

### Kata #7: Consume an external API

Sadly, there's an empty space for a "Dad Joke of the Day" on our homepage! We need to use axios to call the icanhazdadjoke API to get one.

Open services/DadJokeService.js and view the comments.
- Then, import axios and create an instance of it to use in your requests.
- Next, write the request methods to hit the endpoint.
- Finally, to get just the joke from the API response, create a config that only accepts plain text.

Go back to Home.vue.
- Add the created() lifecycle hook to the script. Inside it, setup a call to the axios method we just wrote, setting the value of randomDadJoke to the response data.
- Use data-binding to insert the randomDadJoke value into the em element next to "Dad Joke of the Day."

## Bonus 

### Kata #8: Call the API with a button

It's nice to get a hilarious joke once per visit, but wouldn't it be nicer to be able to generate as many as you want?

- Refactor the Home.vue script to use a method to generate a random dad joke.
- Add a button to the template that is setup with an event listener that reacts by changing the text next to "Dad Joke of the Day."