function uniteUnique(arr1, arr2, arr3){

 var args = Array.prototype.slice.call(arguments); 
 var mergedArray = [].concat.apply([], args); 
 var uniqueArray = mergedArray.filter(function(el,pos,arr){
 	return arr.indexOf(el)==pos; 
 });
 return uniqueArray; 
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
