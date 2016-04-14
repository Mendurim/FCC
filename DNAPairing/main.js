function pairElement(str){
    // the object containing pairing keys and values
    var pairing = {
    	"A":"T", 
    	"T": "A", 
    	"C":"G",
    	"G":"C"
    }, 
    pairedArray = []; 
    //split the pairedArray and map it by using the object pairing
    pairedArray = str.split("").map(function(key){
    	var newArr = []; 
    	newArr.push(key, pairing[key]); 
    	return newArr; 
    }); 
	return pairedArray; 
}