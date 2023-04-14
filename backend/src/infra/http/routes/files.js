const GetFilesDataUseCase = require('../../../application/use-cases/get-files-data')
const ExternalApiRepository = require('../../repositories/external-api-repository')
const { vendorApi } = require('../vendor-api')

const { Router } = require('express')

const router = Router()

router.get('/files/data', async (req, res) => {
  const getFilesDataUseCase = new GetFilesDataUseCase(new ExternalApiRepository(vendorApi))
  const response = await getFilesDataUseCase.execute(req.query.file)

  res.send(response)
})

module.exports = router
