const { expect } = require('chai')
const _ = require('../toeplitz')

describe('Toeplitz Matrix', () => {
  it('should do something', () => {
    const toepMat = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2]
    ]
    return expect(_.isToeplitzMatrix(toepMat)).to.be.true
  })

  it('should do something else', () => {
    const notToepMat = [
      [1, 2],
      [2, 2]
    ]
    return expect(_.isToeplitzMatrix(notToepMat)).to.be.false
  })
})
