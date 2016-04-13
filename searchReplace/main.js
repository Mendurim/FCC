function myReplace(str, before, after) {
  
  var position = str.indexOf(before);
  
  if (str[position] === str[position].toUpperCase()) {
  
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

