# Bayer Tech Challenge - Backend
This project was done following the code challenge on the root of this repository.
It's main purpose is to create an endpoint which one can search farmers by document number or name.

On this README you will find information about the backend (express.js), some feedbacks, and how to run it. The frontend readme will be in it's folder.


## How to run it
- To run the backend application just run the command:
```
npm start
```
The application will start on http://localhost:3000

The required endpoint was implemented:
GET http://localhost:3000/api/farmers  - <b>queryParams:</b> search (string)
-- It will return a list of farmers.

If a number is passed as the parameter, it will search by document number.

If a non-numeric string is passed, it will search by name.

If the search param is empty, it will return all farmers.

If the parameter isn't passed, it will throw error 500.


## Database
The database used was SQLITE due to being easier to setup, not needing setup any servers or instances on the cloud. If one wants to use Postgress, it is as simple as changing the sequelize parameters on src/config/dbConfig.js and installing the sequeleize postgres depedency.

A separate database is created for unit tests, checking the enviroment it is running on (the tests start by setting the NODE_ENV to 'test').

### Seed

I have already left some farmers registered, just follow : http://localhost:3000/api/farmers&search=  to see all the farmers created.


## Tests
Tests were done using MOCHA and CHAI. You can run it by: 
``` 
npm test
```
Note: It uses a separate database for tests. Be careful if you are running the tests outside the command line, it could run it on the 'default' database.

## More Information

An extra endpoint was added just to make it easier to create farmers.

POST http://localhost:3000/api/farmers 
The body should contain a farmer object, with its address and document.
{name: 'example', address: {address: 'aaa', street: 'bb', country: 'cc', state: 'dd'}, document: {documentNumber: '11111', documentType: 'F'}}.

Since this endpoint wasn't required, I didn't do any validations on it.
