const cadastroModel = require('./cadastroSchema') 

const getAll = () => {
  return cadastroModel.find((error, contato) =>{
    return cadastro
  })
}

const getById = (id) => {
  return cadastroModel.findById(id) 
}

const add = (cadastro) => {
  // condição (if) para que o post dê erro (400) em algum campo específico
  // EX: if nome === ester (400)
  const novoCadastro = new cadastroModel(cadastro)
    return novoCadastro.save()
  }

const remove = (id) => {
  return cadastroModel.findByIdAndDelete(id)
}
  

// update = nunca mexer no ID

const update = (id, cadastro) => {
  return cadastroModel.findByIdAndUpdate(
    id,
    { $set: cadastro },
    { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
    // function (error, comida) { // é o nosso callback
    //   return comida
    // }
  )

}

// const comidaAtualizada = {
//   ...comidaCadastrada, 
//   // spread atualizado do ES6
//   ...comida
// }

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}