# PollingApi

# How to setup on Local Machine

- Clone the repository or download the code and extract.
- Open the project folder in your editor.
- Make sure that mongoDB is running on your system
- run  npm install  
- then run 'npm start' to run the server

##### For viewing all questions use
- http://localhost:8000/api/v1/questions

##### For viewing a questions using id
- http://localhost:8000/api/v1/questions/:id
- replace :id with a numerical value

##### For creating a questions use
- http://localhost:8000/api/v1/questions/create

##### For creating a option use
- http://localhost:8000/api/v1/questions/:id/options/create
-  replace :id with a numerical value of question's id

##### For deleting a questions use
- http://localhost:8000/api/v1/questions/:id/delete

##### For deleting a question's option use
- http://localhost:8000/api/v1/questions/:id/options/:optionid/delete

##### For voting a option use
- http://localhost:8000/api/v1/questions/:id/options/:optionid/add_vote
