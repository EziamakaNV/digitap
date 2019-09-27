## Summary

While making use of the Stanbic Mobile App - #Appyness, I noticed that it was quite cumbersome to submit a query or a complaint about any of my recent transactions. I implemented a solution as a proof of concept which I feel would enhance user experience for Stanbic’s customers and support Stanbic with quickly identifying queried transactions. 
The prototype I implemented can be accessed at the URL below:
https://eziamakanv.github.io/digitap/

## The Problem

When a user wants to submit a query or complaint about a particular transaction, he or she would have to first of navigate to the side-bar menu, then select a “submit complaint” request. What happens next is that the user has to then describe the issue which they want to convey about the transaction. This I see as highly inefficient due to the fact that some users might not be able to convey their message properly. It’s also possible for them do describe another transaction altogether. This written description will then have to be deciphered by the Stanbic operatives and they themselves will have to manually track down the transaction.

## The Solution

In the Stanbic Mobile App, when navigating to “My recent transactions”, users should be able to click on a button which will provide the function of submitting a query request for that particular transaction. The user would not need to enter any descriptive comments. The query button alone will send a query request to the bank with all the details of the transaction. The bank officials can then check whether or not the transaction has any issues and then notify the user accordingly. This improves user experience for the customer and also efficient transaction query collection for the bank officials

## The Prototype
The prototype which was implemented is a Front-End Application built with “React.Js”. It simulates a very minimal dashboard for making transfers, viewing transaction and complaints history. To go through the entire flow requires four (3) steps:
1.	Click on the “Transfer Funds” card, enter an account number and amount and then click the Transfer Button
2.	Click on the “View Transactions” card. The transfer made previously should be listed. Click on the “Query Transaction” button
3.	Click on the “View Complaints” Card and the query just made previously will be visible

The prototype can be accessed at the URL below:
https://eziamakanv.github.io/digitap/

## Technology Stack Used
- React
- Materialize CSS


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
