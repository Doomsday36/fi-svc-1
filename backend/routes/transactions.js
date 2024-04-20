const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { getInsights } = require('../controllers/dashboard');


const router = require('express').Router();


router.post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .get('/get-insights', getInsights)



module.exports = router