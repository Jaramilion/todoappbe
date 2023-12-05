import express from 'express'
import {get, create, _delete, update} from '../controllers/todos.controller'

const todosRouter =  express.Router();

todosRouter
    .get('/', get)
    .post('/add', create)
    .put('/update/:id', update)
    .delete('/delete/:id', _delete)

export default todosRouter
