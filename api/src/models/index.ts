import {Todos, TodosSchema } from './todos.model'
import {Sequelize} from 'sequelize'

// @ts-ignore
function setupModels(sequelize) {
    Todos.init(TodosSchema, Todos.config(sequelize))
}

module.exports = setupModels;