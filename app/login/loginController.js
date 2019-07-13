const loginModel = require('./loginSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAll = () => {
  return loginModel.find((error, login) => {
    return login
  })
}

const getById = (id) => {
  return loginModel.findById(id)
}

const add = async (usuario) => {
  const novoUsuario = await loginModel.findOne(
    { email: usuario.email }
  )

  if (novoUsuario) {
    throw new Error('Email já cadastrado')
  }

  const salt = bcrypt.genSaltSync(10)
  const senhaCriptografada = bcrypt.hashSync(usuario.senha, salt)
  usuario.senha = senhaCriptografada

  const novoUser = new loginModel(usuario)
  return novoUser.save()
}

const login = async (dadosDoLogin) => {
  const usuarioEncontrado = await loginModel.findOne(
    { email: dadosDoLogin.email }
  )

  if (usuarioEncontrado) {
    const senhaCorreta = bcrypt.compareSync(
      dadosDoLogin.senha, usuarioEncontrado.senha
    )

    if (senhaCorreta) {
      const token = jwt.sign(
        {
          email: usuarioEncontrado.email,
          id: usuarioEncontrado._id
        },
        process.env.PRIVATE_KEY,
        { expiresIn: 60 }
      )
      return { auth: true, token };
    } else {
      throw new Error('Senha incorreta, digite uma senha válida!')
    }
  } else {
    throw new Error('O e-mail não está cadastrado...')
  }
}

const remove = (id) => {
  return loginModel.findByIdAndDelete(id)
}

// update = nunca mexer no ID

const update = (id, login) => {
  return loginModel.findByIdAndUpdate(
    id,
    { $set: login },
    { new: true }, // RETORNAR O LOGIN JA ATUALIZADO NO CALLBACK
  )

}

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  login
}