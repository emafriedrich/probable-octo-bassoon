/* eslint-disable */
const { expect } = require('chai')

const { isHexa } = require('../../shared/utils')

describe('utils functions', () => {
  it('should resolvs if string is an hexadecimal', () => {
    expect(isHexa('223433abc')).to.be.true
    expect(isHexa('51af5427de5727756888cbbb881b7a4d')).to.be.true
    expect(isHexa('zasnvdf3434')).to.be.false
  })
})
