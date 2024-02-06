# React Sorting App using Web Worker

This project aims to enhance the performance of a web application by efficiently handling the sorting of data  either in ascending or descending order. The data is fetched from FakerJS, a library for generating fake data. The application allows users to retrieve a large dataset of comments and sort them either in ascending or descending order based on the number of comments using web workers or without them. Web workers are utilized to offload the sorting process from the main thread, thereby preventing UI from freezing and ensuring a smooth user experience.

## Web Workers
They are simply JavaScript modules that can be run in the background of a web page. JavaScript is a single threaded responsible for executing all of the code one line at a time. While a web worker is a separate Javascript thread that allows the main thread to continue executing without blocking. This enables the creation of responsive, smooth, and interactive websites.

## Types of Web Workers
They are of two types:

## service workers
They can manage static assets and cache them for offline use.

## background scripts
They can perform long-running tasks such as data processing, calculations, or network requests.

## Web Workers Importance
They are useful when you have computationally expensive work that just can't be run on the main thread without causing long tasks that make the page unresponsive. Such tasks can certainly affect your website's Interaction to Next Paint (INP), so it can be helpful to know when you have work that can be done entirely off of the main thread. By doing this you can create more room for other tasks on the main thread so that UI can improve.

## Web Workers Limitations
Web workers are not a one-size-fits-all solution for web development problems. Before using them, you should be aware of their limitations and drawbacks. For example, web workers cannot access the DOM, the window object, or any other browser-specific APIs. This means they cannot manipulate the web page, use cookies, localStorage, or sessionStorage, or access the location, history, or navigator objects. They are only able to use a subset of JavaScript features and some web APIs, such as XMLHttpRequest, Fetch, WebSocket, and IndexedDB. Additionally, web workers have a high overhead of creation and communication, as creating a web worker involves loading a separate JavaScript file and communicating with a web worker involves serializing and deserializing data. Furthermore, web workers have limited compatibility and support, as they are a relatively new feature of HTML5 and not all browsers support them or implement them consistently. You may need to use polyfills, fallbacks, or feature detection to ensure your web application works across different browsers and devices, and you may need to test and debug your web workers carefully.


### Challenges Faced
Implementing web workers in ReactJS, I faced manhy challenges. One significant challenge was coordinating data communication between the main thread and the web worker. Since web workers run in a separate thread, they have limited access to the DOM and cannot directly manipulate the React state. Therefore, establishing an efficient messaging system to transfer data between the main thread and the web worker while maintaining application state integrity was crucial. Additionally, Integrating web workers seamlessly into React components required careful consideration of component lifecycle events to manage worker instantiation, termination, and message handling appropriately.

### How to run project :

*Clone Project Repository*

Clone the project repository from GITHUB to your local system.

*Start a Local Server*

In root folder, open cmd and type # npm start.

#### Live app link:
[Data Sorting Application](https://sortingapplication.netlify.app/)
