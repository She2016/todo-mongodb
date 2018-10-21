const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URI || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose}