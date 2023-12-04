import {Model, DataTypes, Sequelize} from 'sequelize'

const TODOS_TABLE = 'todos'

export class Todos extends Model {
    static config(sequelize: Sequelize){
        return{
            sequelize,
            tableName: TODOS_TABLE,
            modelName: 'Todos',
        }
    }
}
export const TodosSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    task: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'task'
    },
    done: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'done'
    }        
}
