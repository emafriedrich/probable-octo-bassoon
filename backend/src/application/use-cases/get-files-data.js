const { isHexa } = require('../../shared/utils')

class GetFilesDataUseCase {
  constructor (filesRepository) {
    this.filesRepository = filesRepository
  }

  #isValidData (data) {
    const validAmountOfData = 4
    const validLength = data.length === validAmountOfData

    const secondIsNumber = !!+data[2]

    const thirdIsHexa = isHexa(data[3])

    return validLength && secondIsNumber && thirdIsHexa
  }

  #formatLines (file) {
    const lines = []
    for (const line of file) {
      const data = line.split(',')
      if (this.#isValidData(data)) {
        lines.push({
          text: data[1],
          number: +data[2],
          hexa: data[3]
        })
      }
    }
    return lines
  }

  async execute (fileParam) {
    const files = []

    if (fileParam) {
      const file = await this.filesRepository.getFile(fileParam)

      files.push({
        file: fileParam,
        lines: this.#formatLines(file)
      })
    } else {
      const { files: filesFromRepo } = await this.filesRepository.getFiles()

      for (const fileFromRepo of filesFromRepo) {
        const file = await this.filesRepository.getFile(fileFromRepo)

        files.push({
          file: fileFromRepo,
          lines: this.#formatLines(file)
        })
      }
    }

    return files
  }
}

module.exports = GetFilesDataUseCase
