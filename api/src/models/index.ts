import {Todos, TodosSchema } from './todos.model'

// @ts-ignore
export default function setupModels(sequelize) {
    Todos.init(TodosSchema, Todos.config(sequelize))
}