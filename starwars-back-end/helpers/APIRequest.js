const axios = require('axios').default;

const GetAPIRequest = async (url) => {
    console.log("url", url)
    try {
        const response = await axios({
            url: url,
            method: "get",
        });
        return { data: response }

    } catch (error) {
        return { data: {} }
    }

}

module.exports = GetAPIRequest
