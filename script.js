function firstChar(text) {
  // your code here
	//let ans=' '
	for(let a of text){
		if(a!==' ') return a
	}
	return ' '
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
