## Scripts

In the project directory, you can run:

### `npm i`

### `npm start` in backend and frontend folders.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Page reloads when modifications are made.

### Endpoints

POST /add-expense: This endpoint is used to add a new expense. The details of the expense should be sent in the request body.

GET /get-expenses: This endpoint is used to retrieve all expenses. It doesn't require any parameters.

DELETE /delete-expense/:id: This endpoint is used to delete an expense. The id of the expense to be deleted should be provided as a path parameter.

GET /get-insights: This endpoint is used to get insights about the expenses. It doesn't require any parameters.