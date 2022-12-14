const { getById } = require("../services/film.service")

module.exports.listOne = async ({ params }, res) => {
    try {
        const serviceResponse = await getById(params.id)
        serviceResponse
            ? res.send({ msg: serviceResponse })
            : res.status(404).send({ error: 'Not Found' })
    } catch (error) {
        console.log(`films.controller => listOne ${error}`)
        res.status(500).send({error: 'Server error'})
    }
}