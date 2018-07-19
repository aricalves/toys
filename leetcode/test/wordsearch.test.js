const { expect } = require("chai")
const _ = require("../wordsearch")

describe("Wordsearch", () => {
  
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]

  it('must return a boolean', () => {
    expect(_.exist()).to.be.a('boolean')
  })

  it('should not err with empty board and not find a word', () => {
    expect(_.exist([[]], 'A')).to.be.false
  })

  it('should not err with empty board', () => {
    expect(_.exist([[]], '')).to.be.true
  })

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