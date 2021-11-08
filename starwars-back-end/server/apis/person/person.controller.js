var httpStatus = require('http-status')
const GetAPIRequest = require('../../../helpers/APIRequest')
const APIResponse = require('../../../helpers/APIResponse')

const URL = "https://swapi.dev/api/"

const paths = {
    peoplePath: "people/"
}
class PersonController {


    async getPerson(req, res, next) {

        const id = req.params.id
        console.log("id", id)
        let response = await GetAPIRequest(URL + paths.peoplePath + id)
        console.log("response", response)

        return res.status(httpStatus.OK).json(new APIResponse(response?.data?.data, "Success", httpStatus.OK))
    }
}

module.exports = new PersonController();