import { expect } from 'chai'

import { exist } from '../wordsearch'

/* eslint-env mocha */
describe('Wordsearch', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]

  it('must return a boolean', () => {
    expect(exist()).to.be.a('boolean')
  })

  it('should not err with empty board and not find a word', () => (
    expect(exist([[]], 'A')).to.be.false
  ))

  it('should not err with empty board', () => (
    expect(exist([[]], '')).to.be.true
  ))

  it('should find word \'ABCCED\'', () => {
    const got = exist(board, 'ABCCED')
    return expect(got).to.be.true
  })

  it('should find word \'SEE\'', () => {
    const got = exist(board, 'SEE')
    return expect(got).to.be.true
  })

  it('should not find a word that does not exist', () => {
    const got = exist(board, 'ABCB')
    return expect(got).to.be.false
  })
})
