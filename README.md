# The Odin Project - Memory Card Game.
This project follows the specifications within the curriculum of The Odin Project
https://www.theodinproject.com/lessons/node-path-react-new-memory-card


ReactJs API Data Fetching
-------------------------

This React application, fetchs data from a third-party API.
The url view is: https://memory-game-manelly67.netlify.app

### CSS styles ###
Responsive design for screens of different sizes.<br>
The dark/light mode in the project is configured based on the browser's appearance.<br>

### Fetching data from an API ###
The useEffect hook was used to perform side effects in functional components when fetching data from the API.<br>
The project used the fetch() method with a try and catch syntax to handle any errors that may occur during the network request.

### Scalable Display with Array Storage ###
The cards for display were stored in an array, this allows for efficient storage and retrieval of data, making it simple to manage and scale the number of cards displayed. This scalability is further enhanced by the ability to dynamically expand arrays as needed.

### Game Score and Best Score ###
The useState hook is used for update the components view based on user interaction.<br>
- Each click calls the function to add points.
- Each click generates a new random distribution of all the cards.
- The best score is stored during the games played only in the session.


### Credits ###
- The third-party API url is https://pokeapi.co
- The app is deployed in Netlify