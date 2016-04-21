function booWho(bool){
	var x = true; 
	var y = false; 
	if(bool === x || bool === y){
		return true; 
	}else{
		return false; 
	}
	return bool; 
}

// function call 
booWho(null); 
