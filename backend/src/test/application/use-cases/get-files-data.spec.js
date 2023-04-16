/* eslint-disable */
const fs = require('fs');

const GetFilesDataUseCase = require('../../../application/use-cases/get-files-data')
const ExternalApiRepository = require('../../../infra/repositories/external-api-repository')
const { expect } = require('chai')



describe('Test use case', () => {

  it('empty list of files returns empty array', async () => {
    const vendorApiMock = {
      get: async () => ({ data: { files: [] } }),
    }
    const repo = new ExternalApiRepository(vendorApiMock)
    const useCase = new GetFilesDataUseCase(repo)

    const response = await useCase.execute()

    expect(response).to.eql([])
  })

  it('should handle errors and render properly valid lines', async () => {
    let callNumber = -1;
    const vendorApiMock = {
      get: async () => {
        callNumber += 1;
        if (callNumber === 0) {
          return { data: { files: ['file1.csv', 'file2.csv', 'file3.csv'] } };
        }
        return { data: fs.readFileSync(`${__dirname}/fixtures/file${callNumber}.csv`, 'utf-8') };
      },
    }

    const repo = new ExternalApiRepository(vendorApiMock)
    const useCase = new GetFilesDataUseCase(repo)

    const response = await useCase.execute();

    expect(response.find(f => f.file === 'file1.csv').lines).to.eql([]);
    
    expect(response.find(f => f.file === 'file2.csv').lines.length).to.eql(1);
    
    expect(response.find(f => f.file === 'file3.csv').lines.length).to.eql(11);
  })
})
