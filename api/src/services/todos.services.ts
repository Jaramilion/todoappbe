const {models} = require('../libs/sequelize')

interface TodoType {
    id: number;
    task: string;
    done: boolean
}
class TodosService {

    constructor() { }

    async getAll() {
         // @ts-ignore
        const response = await models.Todos.findAll();
        return response
    }

    async findOne(id:number) {
         // @ts-ignore
        const response = await models.Todos.findByPk(id)
        return response
    }

    async create(data:TodoType) {
         // @ts-ignore
        const response = await models.Todos.create({
            task: data.task,
            done: false
        });
        return response
    }

    async update(id:number, data:TodoType) {
        const model = await this.findOne(id)
        const response = await model.update({...model, done: data.done})
        return response
    }

    async delete(id:number) {
        const record = await this.findOne(id)
        await record.destroy()
        return { deleted: true }
    }
}

export default TodosService