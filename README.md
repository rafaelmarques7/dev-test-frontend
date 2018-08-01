# Bikes Front-End application

Here's a front end development assessment that we'd like for you to complete in approximately one week.  

## The task
We estimate that this task will take about **6 hours** of contiguous development.  Feel free to develop in a non-contiguous manner.  
If you start to go way over time then just submit what you have and create a list in your project's **README.md** of anything else that would have liked to add/do given the time.

### Details
To complete this task, you must:
- read the user story below and create a single webpage application to fulfil the requirements of the story
- fork this github repository for the task where you will **continuously** commit your code
- create a **index.html** file to contain your project's main code
- create a project **README.md** where you'll put your project description, notes, assumptions etc...
- design the front end as you see fit
- when finished send over the GitHub repo and any other links

#### The User story
As a user,
Assuming I have access to a modern web browser (chrome) with an internet connection and I am visiting the page
- A) I would like to see a list/grid of bikes (taken from the bike data URL below)
- B) I would like to see a the name, an image, a description and the class for each bike
- C) I would like to be able to sort the bikes into a custom order based on class
- D) I would like my custom order to be saved and not change when I refresh the page

A JSON object with all the relevant bike data is available at, feel free to call that URL directly from your page or host it on your server if you're using one: [https://jujhar.com/bikes.json](https://jujhar.com/bikes.json)

### Assumptions:
- Your project must work in the latest version of Google Chrome, you can ignore all other browsers
- Please list any other assumptions you may have made
- Feel free to use/not use any JS libraries/frameworks
- Feel free to use/not use any HTML/CSS frameworks
- If you have the time then host the page on a server/service of your choice and put the link in your **README.md**

### Assessment Criteria
Your application will be assessed on the following criteria (in order of importance):

- Approach
- Code organisation, commenting and use of GitHub
- Maintainability
- Choice of frameworks
- UX
- Flair
- *bonus points* if you can host the page and it's dependencies on your own server

We're trying to see your thought processes with this task. What's more important to us is how you approach the task, rather than the actual final output itself.

Looking forward to seeing your project :-)

# Development
Hereafter the development of the project will be described in some detail.

### Assumptions
 1) This project may be initialised with a boilerplate configuration, such as [create-react-app](https://github.com/facebook/create-react-app);   
 2) This project may utilise external libraries, such as Google's [material-ui](https://material-ui.com/);
 3) This project does not necessarily require a landing page;
 4) Although not specifically mentioned, the User Interface should be somewhat responsive;
 
### Boilerplate
This project was initialised using [create-react-app](https://github.com/facebook/create-react-app) (see commands below).
This boilerplate application also comes with useful scripts for testing and deploying, and other configurations as code linting. 
```sh
npx create-react-app my-app
cd my-app
npm start
```

### Frameworks
 This project utilises two frameworks:
 1) [React](https://github.com/facebook/react) - a JavaScript library to render User Interfaces;
 2) [Redux](https://github.com/reduxjs/redux) - a JavaScript library to manage the state of an application;

### Other libraries
 This project also utilises other libraries for different ends:
 1) [react-redux](https://github.com/reduxjs/react-redux) - a library to bind react and redux - necessary to make React
 have access to the Redux store;
 2) [redux-thunk](https://github.com/reduxjs/redux-thunk) - a middleware for redux - necessary to create asynchronous actions
 which are used for communicating with the API;
 3) [jest](https://github.com/facebook/jest) - a library for testing JavaScript - enables the creation of tests for 
 the javascript functions and react components;
 4) [enzyme](https://github.com/airbnb/enzyme) - a JavaScript testing utility for React - allows react components to be tested
 in a *shallow* way, that is, without rendering its children components;
 5) [redux-persist](https://github.com/rt2zz/redux-persist) - a library to create persistent stores - useful to maintain 
 the state of the application;
 
### Solving the user story
The development of this project will try to answer directly to each request of the user story:
- A) Use [material-ui grid system](https://material-ui.com/demos/grid-list/) to create a responsive
 UI, with a grid display for large devices, and a list for smaller ones;
- B) Given the type of information the user requests, it would be interesting to do an "Instagram type" component. 
To do this, we will use [material-ui's card component](https://material-ui.com/demos/cards/), to setup the necessary information
in a clean, organized and beautiful way;
- C) Use Redux actions to set a filter, and selectors to access only the requested bike classes;
- D) Create a persistent redux store which saves the state of the application for further usage. This is implemented using 
[redux-persist](https://github.com/rt2zz/redux-persist). Given that React renders according to the state, for the same state we obtain the same page content. Thus,
by having a way to save the state of the application, this problem is solved;


### Folder Structure

```
├── README.md
├── node_modules
├── package.json
├── public
├── src
    │   ├── index.js
    │   ├── media
    │   ├── syles   
    ├── components
    │   ├── specs
    │   ├── BikeCard.js    
    │   ├── BikesList.js
    │   ├── FilterBikes.js
    │   └── GridWrapper.js  
    ├── containers
    │   ├── App.js
    │   └── BikesContainer.js     
    ├── manager
    │   ├── specs
    │   ├── actions.js    
    │   ├── selectors.js
    └───├── reducers.js 
```


## Implementation Details

### Setting the store

The redux store is set up in a traditional way. However, it contains some extra's, particularly it 
utilizes two middleware's - logger and thunk - and a persistent storage implementation. Below is the most relevant parts 
of the code:

```javascript
function configureStore(){
  const store = createStore(
    persistedReducer, 
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  const persistor = persistStore(store)
  return { store, persistor };
}
```












