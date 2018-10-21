const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo-app:todo-app123@ds137643.mlab.com:37643/todo-app' || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose}