import TodosService from "../services/todos.services";


const service = new TodosService()
// @ts-ignore
const create = async(req, res) => {
    try{
        const response = await service.create(req.body);
        res.json({success: true, data: response})
    }catch(error){
        // @ts-ignore
        res.status(500).send({success: false, message: error.message})
    }
}
// @ts-ignore
const get = async(req, res) => {
    try{
        const response = await service.getAll();
        res.json(response)
    }catch(error){
        // @ts-ignore
        res.status(500).send({success: false, message: error.message})
    }
}
// @ts-ignore
const update = async(req, res) => {
    try{
        const {id} = req.params
        const body = req.body;
        const response = await service.update(id, body);
        res.json(response)
    }catch(error){
        // @ts-ignore
        res.status(500).send({success: false, message: error.message})
    }
}
// @ts-ignore
const _delete = async(req, res) => {
    try{
        const {id} = req.params
   
        const response = await service.delete(id);
        res.json(response)
    }catch(error){
        // @ts-ignore
        res.status(500).send({success: false, message: error.message})
    }
}

export {create, get, update, _delete}