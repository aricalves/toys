const { expect } = require("chai")
const _ = require("../wordsearch")

describe("Wordsearch", () => {
  
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]

  it('should find word \'ABCCED\'', () => {
    const got = _.exist(board, 'ABCCED')
    expect(got).to.be.true
  })
  it('should find word \'SEE\'', () => {
    const got = _.exist(board, 'SEE')
    expect(got).to.be.true
  })
  it('should not find a word that does not exist', () => {
    const got = _.exist(board, 'ABCB')
    expect(got).to.be.false
  })

})