# Getting Started with Create React App

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
# NewsMonkey - React News App

NewsMonkey is a React-based web application that provides the latest news articles from around the world. Users can view top headlines across various categories such as Business, Health, Technology, Science, Entertainment, and more. The app integrates the [NewsAPI](https://newsapi.org/) to fetch live news data.

## Features
- **Top Headlines**: Get the latest headlines from various categories.
- **Infinite Scrolling**: Seamless experience as more articles load automatically as you scroll.
- **Category Filter**: View news articles by categories like Business, Health, Entertainment, Science, etc.
- **Responsive Design**: The app works seamlessly on both mobile and desktop devices.
- **Progressive Loading**: Shows loading progress as articles are fetched from the API.
- **API Key Management**: Fetch news articles securely by storing the API key in an environment variable.

## Demo
You can see a live demo of the application here: [Demo Link](https://your-deployment-link.com)

## Technologies Used
- **React.js**: A JavaScript library for building the user interface.
- **NewsAPI**: A service that provides access to a wide range of news articles from multiple sources.
- **React Router**: For handling page routing and navigation between news categories.
- **react-infinite-scroll-component**: For infinite scrolling functionality to load articles dynamically.
- **react-top-loading-bar**: A library to show a loading bar while fetching data from the API.

## Installation and Setup

### Prerequisites
Make sure you have the following tools installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

### Clone the Repository
Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/news-app.git
