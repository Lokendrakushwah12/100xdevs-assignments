/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // uppercase
  str1=str1.toLowerCase()
  str2=str2.toLowerCase()
  
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  if(str1 == str2 || (str1=="" && str2=="") ) return true
  if(str1.length!=str2.length) return false
  let str1Obj = {};
  let str2Obj = {};
  let result = true;
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Obj[str1Arr[i]]) {
      str1Obj[str1Arr[i]]++;
    } else {
      str1Obj[str1Arr[i]] = 1; 
    }
  }
  for (let i = 0; i < str2Arr.length; i++) {
    if (str2Obj[str2Arr[i]]) {
      str2Obj[str2Arr[i]]++;
    } else {
      str2Obj[str2Arr[i]] = 1;
    }
  }
  for (let key in str1Obj) { 
    if (str1Obj[key] !== str2Obj[key]) {
      result = false;
    }
  }
  return result;
}

// console.log(isAnagram("Listen", "silent"));

module.exports = isAnagram;
