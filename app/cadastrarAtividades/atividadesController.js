const atividadesModel = require('./atividadesSchema')

const getAll = () => {
    return atividadesModel.find((error, contato) => {
        return atividade
    })
}

const getById = (id) => {
    return atividadesModel.findById(id)
}

const add = (atividade) => {
    // condição (if) para que o post dê erro (400) em algum campo específico
    // EX: if nome === ester (400)
    const novaAtividade = new atividadesModel(atividade)
    return novaAtividade.save()
}

const remove = (id) => {
    return atividadesModel.findByIdAndDelete(id)
}

const update = (id, cadastro) => {
    return atividadesModel.findByIdAndUpdate(
        id,
        { $set: atividade },
        { new: true },
    )

}


module.exports = {
    getAll,
    getById,
    add,
    remove,
    update
}