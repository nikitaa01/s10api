module.exports.getById = async ({ model, _id }) => {
    return await model.findById(_id)
}