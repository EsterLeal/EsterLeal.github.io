const contatoModel = require('./contatoSchema') 

const getAll = () => {
  return contatoModel.find((error, contato) =>{
    return contato
  })
}

const getById = (id) => {
  return contatoModel.findById(id) 
}

const add = (contato) => {
  // condição (if) para que o post dê erro (400) em algum campo específico
  // EX: if nome === ester (400)
  const novoContato = new contatoModel(contato)
    return novoContato.save()
  }

const remove = (id) => {
  return contatoModel.findByIdAndDelete(id)
}

// update = nunca mexer no ID

const update = (id, contato) => {
  return contatoModel.findByIdAndUpdate(
    id,
    { $set: contato },
    { new: true }, // RETORNAR O CONTATO JA ATUALIZADA NO CALLBACK
    // function (error, contato) { // é o nosso callback
    //   return contato
    // }
  )

}

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}