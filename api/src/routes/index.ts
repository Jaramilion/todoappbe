import express from 'express'
import todosRouter from './todos.router';

// @ts-ignore
function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/todos', todosRouter)
}

export default routerApi