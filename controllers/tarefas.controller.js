const TarefasService = require('./../services/tarefas.service');
const tarefasService = new TarefasService;

class TarefasController {
  
  getTarefas = async (req, res) => {
    const tarefas = await tarefasService.findAll();
    res.send(tarefas);
  }

  getTarefaById = async (req, res) => {
   
    const tarefa = await tarefasService.findById(req.params.id);
    res.send(tarefa);
  }

 
  createTarefa = async (req, res) => {
   
    const tarefa = req.body;
    if(!req.body){
      return;
    }
    await tarefasService.create(tarefa)
    .then(() => {
      res.send({message: `Tarefa ${tarefa.titulo} Cadastrada com sucesso`})
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({error: `Erro no servidor: ${err}`})
    })
  }

  editTarefa = async (req, res) => {
    const idParam = req.params.id;
    const tarefaEdit = req.body;
    await tarefasService.edit(idParam, tarefaEdit)
    .then(() => {
      res.send({message: `tarefa Editada com sucesso`})
    })
    .catch( err => { 
      res.status(500).send({message: `Erro: ${err}`})
    })
  }

  deleteTarefa = async (req, res) => {
    const idParam = req.params.id;
    await tarefasService.delete(idParam)
    .then(() => {
      res.send({message: 'Excluido com sucesso'})
    })
    .catch(err => {
      res.status(500).send({error: `Error: ${err}`});
    })
  }
}

module.exports = TarefasController;