const TarefasModel = require('./../models/tarefa');

// crio a classe do meu servico para poder acessar o seus metodos.
class tarefasService {
  
  findAll = async () => await TarefasModel.find();

  // busca tarefa por id
  findById = async (id) => {
    return await TarefasModel.findById(id)
  };

  // cria um objeto e salva no banco de dados.
  create = async (tarefa) => {
    return await TarefasModel.create(tarefa)  
  }

  // recebe um id e um objeto para ser atualizado no banco.
  edit = async (id, tarefa) => {
    return await TarefasModel.updateOne({ _id: id}, tarefa)
  }

  // recebe um id e exclui a tarefa do banco de acordo com esse id.
  delete = async (id) => {
    return await TarefasModel.deleteOne({ _id: id})
  }

}

module.exports = tarefasService;