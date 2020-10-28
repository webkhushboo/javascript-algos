// Naive solution
function isAnagrams(str1, str2){
	if(str1.length != str2.length) {
		return false;
	}
	 
	if(str1.split('').sort().join() !== str1.split('').sort().join()) {
		return false;
	}
	
	return true;
	
}

// Optimized solution
function isAnagram(str1, str2){
	if(str1.length != str2.length) {
		return false;
	}
	
	var map = {};
	for(var i =0;i<str1.length; str1++){
		map[i] = (map[i] || 0) + 1  
	}
	
	for(var i=0; i< str2.length; i++ ) {
	  if(map.hasOwnProperty(str2[i])){
		  map[i]--;
	  }	
      else {
		  return false;
	  }	  
	} 
	
	return  true;
}