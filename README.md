# Account Dashboard developed with React

## Initial Task

### Create a React project 

### Run a GET on [here](https://run.mocky.io/v3/d07e361a-8f4b-4fdc-a8fe-bce479a0cbfd) to retrieve а list of teams

### Use HTML5 and Sass and make the app responsive

### Implement a search functionality with the requirements below

## Requirements

The input will search through a list of football teams. Each team object contains the
following fields:

- Retrieve а list of teams
- Implement a search functionality with the requirements below
  - The input will search through a list of football teams. 
  - Each team object contains the following fields:
    * *id* - a unique ID
    * *name* - the team’s name
    * *stadium* - the team’s stadium
    * *leagues* - a list of leagues in which the team participates
    * *is_following* - a flag indicating whether the team is being followed
  
The user should be able to search by name, stadium, and leagues.

On typing in the input field, a list with matching search results should appear.

The user should be able to navigate through the results with a keyboard. The search result in
focus and on hover should be highlighted. Only one item can be highlighted in cases both
mouse and keyboard are used. (The keyboard will take precedence if the mouse is not
moving. The mouse should take precedence if keyboard navigation is not being used.) For
example, the Gmail search has similar behavior.

If there are no matching results a message should appear.

When the user clicks the follow/unfollow button add/remove the team to the “My teams”
section and save the changes to the Redux store.

In case you have any questions, don’t hesitate to contact us.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
