const axios = require('axios')

const api = axios.create({
  headers: {
    authorization: 'Bearer aSuperSecretKey'
  }
})

module.exports = {
  vendorApi: api
}
