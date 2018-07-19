/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

module.exports.exist = function (board, word) {
  let doesExist = false
  if (word == '') return true

  return doesExist
};

/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

*/