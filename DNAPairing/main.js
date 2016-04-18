
function pairElement(str){
    
    // the object containing pairing keys and value; 
    
    var pairing = {"A":"T", "T": "A", "C":"G","G":"C"}, pairedArray = []; 
    //split the pairedArray and map it by using the object pairing
    
    
    pairedArray = str.split("").map(function(key){
    	
        var newArray = []; 
    	
        newArray.push(key, pairing[key]); 
    	
        return newArray; 
    }); 
	return pairedArray; 
}