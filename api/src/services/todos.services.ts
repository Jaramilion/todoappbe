import models from '../libs/sequelize';

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
        const response = await models.Todos.create(data);
        return response
    }

    async update(id:number, data:TodoType) {
        const model = await this.findOne(id)
        const response = await model.update(data)
        return response
    }

    async delete(id:number) {
        const record = await this.findOne(id)
        await record.destroy()
        return { deleted: true }
    }
}

export default TodosService