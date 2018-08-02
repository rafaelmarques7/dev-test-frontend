# A Front-End app for Bike Lovers

## Table of contents  
 - [The task](#the-task) - specifies what this project goal is
    - [Details](#details) - details about the task
    - [User story](#user-story) - the desired user features
    - [Assumptions](#task-assumptions)
    - [Assessment Criteria](#assessment-criteria)
 - [Development](#development)   
    - [Assumptions](#assumptions)
    - [Boilerplate](#boilerplate)
    - [Frameworks](#frameworks)
    - [Libraries](#other-libraries)
    - [Solution](#solution)
    - [Folder Structure](#folder-structure)
 - [Implementation Details](#implementation-details)
    - [Application State](#application-state)
    - [State management](#state-management)
    - [Accessing State](#accessing-state)
    - [Store settings](#store-settings)
    - [API communication](#api-communication)
    - [Containers](#containers)
    - [Components](#components)
    - [tests](#tests)
    - [Development environment](#development-environment)
    - [Hosting](#hosting)
    
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

### Task-Assumptions:
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

### Screenshots
These are two screenshots representing the UI for a large and small decide.

![UI_large](https://github.com/rafaelmarques7/dev-test-frontend/blob/master/src/media/UI.png)
![UI_small](https://github.com/rafaelmarques7/dev-test-frontend/blob/master/src/media/UI_small.png)

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
 
### Solution
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
    │   ├── App.js
    │   ├── BikeCard.js    
    │   ├── BikesList.js
    │   ├── FilterBikes.js
    │   └── GridWrapper.js  
    ├── containers
    │   └── BikesContainer.js     
    ├── manager
    │   ├── specs
    │   ├── actions.js    
    │   ├── selectors.js
    └───├── reducers.js 
```


## Implementation Details

### Application State

The state of  the application is given by a JavaScript object, which has the structure presented below. It contains 4 attributes:
1) bikes - object containing an array of information relative to the bikes;
2) loading - bool to inform if a request is pending or not;
3) error - object (including null) informing in an error occured;
4) filter - string used to filter the content;
```json
state = {
  // place holder for the bikes data
  bikes: {
    items: []
  },
  // used to inform if the request is pending
  loading: false,
  // used to inform if there are errors 
  error: null,
  // used to decide which bikes to show
  filter: "all",   
};
```

### State management
The state of the application is managed by redux, using three type of functions:
1) reducers - the only way to alter the state is using a reducer;
2) actions - reducers functions are called using an action;
3) selectors - these functions do not alter they state, instead, they are used to access it;

The state of the application can change only in a limited number of ways, given that there are only 4 reducer functions.
The rootReducer is presented below:

```javascript
export function rootReducer(state=initialState, action) {
  switch(action.type){
    case FETCH_BIKES_BEGIN:
      return setBikesBegin(state);
    case FETCH_BIKES_SUCCESS:
      return setBikesSuccess(state, action);
    case FETCH_BIKES_FAILURE:
      return setBikesFailure(state, action);
    case SET_BIKES_FILTER:
      return setBikesFilter(state, action);
    default:  
      return state;
  }
}
``` 

### Accessing state
The state of the application is accessed only by a single component - the *BikesContainer*. This component 
has access to the state, and to the actions, passing these as props to the children component, particularly, 
to *BikesList* and *FilterBikes*.
The state is accessed (mostly) using selectors. This is particularly useful for accessing only a subset of the state.
For example, when a user sets a filter, to constrain the displayed bikes, we want to retrieve only a subset of the 
bikes list. To do this, the getFilteredBikes() function was implemented. See code below.

```javascript
/**
 * Returns an array of the items which match the filter;
 * if the filter is set to "all" return the entire bikes array;
 * otherwise filter by the selected category;
 */
export const getFilteredBikes = (state, category) => {
  if (category === "all") {
    return state.bikes.items;
  }
  var filtered_bikes = [];
  state.bikes.items.forEach((bike) => {
    bike.class.forEach(cat => {
      if (cat === category && filtered_bikes.indexOf(bike) === -1) {
        filtered_bikes.push(bike)
      }
    })
  });
  return filtered_bikes;
}
```


### Store settings

The redux store is set up in a traditional way. However, it contains some extra's, particularly it 
utilizes two middleware's - logger and thunk - and a persistent storage implementation. Below is the most relevant parts 
of the code:

```javascript
// configStore.js
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



### API communication
In order to obtain the necessary bikes data, the bikes API has to be called. This is done using asynchronous actions.
***This action is called once***, at the componentDidMount() method of the BikesContainer. 
It dispatches fetchBikesBegin, to inform the user (via state update and subsequent rendering) that an action was dispatched
and the data is being loaded. After this, either fetchBikesSuccess or fetchBikesFailure is invoked. In any case,
the loading is reset, and the data/error is merged to the state. Below is the code for the async action.

```javascript
/**
 * Async action to load the Bikes data from the API
 * Dispatches 2 of 3 actions:
 *    - fetchBikesBegin   - always - informs user loading has begun 
 *    - fetchBikesSuccess - merge state with received data
 *    - fetchBikesFailure - informs the user if something went wrong
 */
export function fetchBikes() {
  return dispatch => {
    dispatch(fetchBikesBegin());
    return fetch(bikesUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBikesSuccess(json))
        return json;
      })
      .catch(error => dispatch(fetchBikesFailure(error)));
  };
}
```



### Containers and Components
Ideally, and if possible, React component should be pure, in the sense that they always render the same content 
for a given input (props). Pure components do not have direct access to the application state, but they usually require 
some state information to render the content. Thus, Containers are necessary, in order to access 
the state of the application, mapping it to props, calling the desired children components and passing them the necessary props.
#### Containers
A Container is a React Component which has access to the state of the application, via functions such as *mapStateToProps*.
If applicable, it also creates dispatching actions, which are mapped to props, using *mapDispatchToProps*.

In this project, there is a single container, called BikesContainer, which has access to the state and actions.
Below is the main code of this container. 
There are some things worth nothing:
1) This containers invokes two children components: FilterBikes, and BikesList;
2) this container has access to the state, using mapStateToProps, and stores the relevant information as props, 
which will be passed to the children;
3) this container maps some actions to props;
4) this containers dispatches an (async) action upon mounting. Since this container is only mounted once, 
this action, which refers to an API call to the bikes repository, will also be called only once;

```javascript 
class BikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBikes();
  }
  
  render() {
    return(
      <div>
        <FilterBikes {...this.props} />
        <BikesList {...this.props} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  categories: getAllCategories(state),
  filter: getCurrentFilter(state),
  products: getFilteredBikes(state, getCurrentFilter(state)),
  loading: state.loading,
  error: state.error,
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBikes, 
    setBikesFilter   
  }, dispatch);
};

```

### Components
There are a total of 5 presentational components for this application:
1) App.js - the main component, called by src/index.js - mounts the react components to a specific HTML node;
2) BikeCard.js - a presentational component for rendering the bikes information and images;
3) BikesList.js - a component to render multiple BikeCards;
4) FilterBikes.js - a dropDownMenu to display the available categories, which may be used to set a filter;
5) GridWrapper.js - a wrapper to create a responsive layout.

### Tests
It is imperative to have tests for the developed code. Between the many usefulness this brings,
it allows to easily verify if a new code change broke the application, or if everything is fine.
This application has only unit-test, which cover all actions, reducers and selectors. It also 
has unit-tests for each component, although these are mostly shallow tests. In any case, they assure that the component 
renders without crashing.
Currently, the ***tests which are missing*** refer to:
1) the asynchronous actions - however, given that every action that may be invoked is testing and passing, this should not 
be a problem;
2) the container - however, given that the selectors and actions are tested, this should not be a problem;

To run the 
Current test coverage:
![test coverage](https://github.com/rafaelmarques7/dev-test-frontend/blob/master/src/media/test_coverage.png)


### Development environment
This app can run on your local machine, by running the following command:

```sh
npm run start
```

### Hosting
A [demo](https://infinite-spire-53819.herokuapp.com/) of the application is currently available at
the following link: https://infinite-spire-53819.herokuapp.com/ 
The host if this application is the cloud PaaS [Heroku](https://www.heroku.com/).









