# Jamming
Jamming is a Web App that allows a user to create a playlist on Spotify using a simple interface powered by [React.js](https://react.dev/). I created this app for the [Codecademy](https://codecademy.com) project by the same name in the [Full-Stack Engineering Career Path](https://www.codecademy.com/career-journey/full-stack-engineer).

This app taught me how to use 0Auth to authenticate a user, interact with a token-based API using HTTP requests, and create an aesthetically pleasing [React.js](https://react.dev/) application that does a real world task!

## Try it out!
Click to try out my [completed Jamming App](https://ekhess.github.io/Jamming/) for yourself!

## Features
Features of this app include:
- One-click user authentication
- POST and GET requests to the [Spotify API](https://developer.spotify.com/documentation/web-api)
- A simple dashboard to search for your favourite artist, build a playlist, and save it to a user's Spotify account
- App welcomes user by their Spotify username
- Search results form a scrollable stack of top tracks by the search-for artist
- Each track is rendered in a separate box containing useful information about it (Album cover, song title, artist name(s), album name)
- Users can create a custom title for their playlist
- Added tracks are contained in a scrollable playlist section
- Saves the created playlist (with the assigned title) to the user's profile in one click

## Technology
Technologies used to complete this project:
- Visual Studio Code
- Remote repository on GitHub
- Git version control
- HTML5, CSS3 and JavaScript ES6
- React.js
- App built using 
```javascript 
npx create-react-app
```

## Useful Resources
If you'd like to try your hand at building a similar application from scratch, I found [Napolean Bazan's Solution on GitHub](https://github.com/napetico/jamming-app/tree/main) extremely helpful, especially for interacting with the [Spotify API](https://developer.spotify.com/documentation/web-api). Many of the techniques used to satisfy this project's goals weren't explicitely covered, so I learned much of what I needed to know (returning promises, error handling, user authentication) from his example, with a healthy dose of look-ups in the [MDN Documentation](https://developer.mozilla.org/en-US/).


