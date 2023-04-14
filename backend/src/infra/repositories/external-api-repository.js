class ExternalApiRepository {
  constructor (http) {
    this.http = http
  }

  async getFiles () {
    const res = await this.http.get('http://echo-serv.tbxnet.com/v1/secret/files')
    return res.data
  }

  async getFile (filename) {
    try {
      const res = await this.http.get(`http://echo-serv.tbxnet.com/v1/secret/file/${filename}`)

      return res.data.split('\n')
    } catch {
      // some files throw errors when downloaded
      return []
    }
  }
}

module.exports = ExternalApiRepository
