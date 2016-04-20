function translatePigLatin(str) {
  var vowelCheck = /[aeiouy]/i; // regex vowel check
  
  if(vowelCheck.test(str[0])){
  
   return str + "ay"; 
  
  }else{
    var con = str.search(vowelCheck); 
    return str.slice(con) + str.slice(0, con) + "ay"; 
  }
}
translatePigLatin("consonant");

