const expect = require('chai').expect

const isToeplitzMatrix = require('../toeplitz').isToeplitzMatrix

/* eslint-env mocha */
describe('Toeplitz Matrix', () => {
  it('should return true when inspecting a toep matrix', () => {
    const toeplitz = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2]
    ]
    return expect(isToeplitzMatrix(toeplitz)).to.be.true
  })

  it('should return false when matrix is not toep', () => {
    const noToeplitz = [
      [1, 2],
      [2, 2]
    ]
    return expect(isToeplitzMatrix(noToeplitz)).to.be.false
  })
})
