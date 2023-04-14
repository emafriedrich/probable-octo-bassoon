const express = require('express')
const cors = require('cors')

const router = require('./infra/http/routes/files')

const startServer = () => {
  const app = express()

  app.use(express.json())
  app.use(cors())

  app.use(router)

  const port = 25000

  app.listen(port, () => console.log(`Server listing on port ${port}`))
}

startServer()
