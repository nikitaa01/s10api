const { Types: MongoseTypes} = require("mongoose")
const { filmModel } = require("../models/db/film.model")
const { getById: repoGetById} = require('../databases/repository')

module.exports.getById = async (id) => {
    const _id = MongoseTypes.ObjectId(id)
    const repositoryResponse = await repoGetById({ model: filmModel, _id })
    return repositoryResponse
}