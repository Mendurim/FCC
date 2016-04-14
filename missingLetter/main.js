function fearNotLetter(str) {
    var alphabet = ("abcdefghijklmnopqrstuvwxyz");
    var first = alphabet.indexOf(str[0]);
    var strIndex = 0;
    var missing;

    for (var i = first ; i < str.length ; i++) {
        if (str[strIndex] === alphabet[i]) {
            strIndex++;
        } else {
            missing = alphabet[i];
        }
    }
    return missing;
}

//tests//
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("bcd"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("yz"));
