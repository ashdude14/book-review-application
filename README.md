# Book Review Application


In this final project, we built a server-side online book review application and integrated it with a secure REST API server which will use authentication at the session level using JWT. We will then tested application using Promises callbacks or Async-Await functions and Postman API.
## Directory or Structure 

router directory having the below 3 files:

1. booksdb.js - This contains the the preloaded book information for this application.
2. general.js - This contains the skeletal implementations for the routes which a general user can access.
3. auth_users.js - This contains the skeletal implementations for the routes which an authorized user can access.
index.js 
     
 Main entry point of this project.

Objectives:

 1. Created APIs and perform CRUD operations on an Express server using Session & JWT authentication.
 2. Worked with Async/Await or Promises with Axios in Node.js.
 3. Created REST API endpoints and test them using Postman.



## Step Required
Part A: npm install the necessary packages and Postman Login

Installed all the packages required in our local environment for the server to run.
Used our Google mail credentials to register or log in with Postman and test the API endpoints.

Part B: Implementing Authentication for using the Book Review application

 We created access restrictions to some endpoints using JWT and session level authentication.

Part C: Access the book review application as general purpose user and register user

 General user can access all the books available in the shop and get all books based on ISBN,Author,Title,Review.
 Once a user register with the app, they are able to add or modify and delete book reviews.

Part D: Use Async/Await or Promises with Axios in Node.js for each of the four CRUD Operations.

Using the async,callback function, retrieve all books. Using Promises, search for the book by ISBN and then search by author or title.
Now test the API endpoints using Postman.
## Instruction to run this project
  ```
    npm run dev
  ```