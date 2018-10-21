const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

var id = '5bcba3c95c01ed11b082acdb'

Todo.find({
  _id = id
})