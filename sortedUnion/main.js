function uniteUnique(arr1, arr2, arr3){

// flatening
	var arrNew = arr1.concat(arr2, arr3); 
	
	return arrNew.reduce(function(i){
	return (arr1.indexOf(i)===-1 || arr2.indexOf(i)===-1); 
	}); 
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
