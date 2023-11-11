"use strict";

//**This should accept two strings: word and letters. It
//should return true if the word can be built with the letters;
//otherwise, it should return false.
//('abc', 'dcba') --> true since can build "abc" with letters "abcd"; */

function canConstructWord(word, letters) {
  let wordFrequency = {};
  let lettersFrequency = {};

  for (let char of word){
    if (wordFrequency[char]) {
      wordFrequency[char] += 1;
    } else {
      wordFrequency[char] = 1;
    }
  }
  for (let letter of letters) {
    if (lettersFrequency[letter]){
      lettersFrequency[letter] += 1;
    } else {
      lettersFrequency[letter] = 1;
    }
  }

  for (let key in wordFrequency) {

    //Do the keys exist in both Freq Objs
    if (!(key in lettersFrequency)){
      return false;
    }

    //Do the values of word FC keys at least match values of letter FC
    if (!(wordFrequency[key] <= lettersFrequency[key])){
      return false;
    }
  }

  return true;
}
