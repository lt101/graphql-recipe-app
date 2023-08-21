# GraphQL Recipe App

## About
This simple recipe manager app showcases the interaction between a custom-built GraphQL API and a React client using Apollo GraphQL. Users can views all available recipes, search for drinks and create new recipes.

## How to use
### Server
The server is an Apollo server. To run it, execute ```npm start``` at the root of the application. It will be available on http://localhost:4000/.

### Client
The client is a React client. To run it, execute ```npm start``` in the client folder. It will be available on http://localhost:3000/.
The list of recipes is fetched when the main page is rendered. Users can create new recipes by filling out the form at the top of the page, or search for a drink at the bottom of the page.

## Developer notes
The purpose of this mini-project is to highlight the use of GraphQL. The client is very minimal and only contains the necessary components to interact with the Apollo server.
The app has no persistance, and uses fake data in JSON format in the FakeData.js instead of a true database.
The GraphQL schema allows the client to **query** and **mutate** (create, update, and delete) recipes. Type definitions and resolvers can be found in the schema folder.
