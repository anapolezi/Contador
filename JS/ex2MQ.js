
//***fora****
let num = 0;
console.log(num);
let contador = document.getElementById("number");
console.log(num);
//***fora****

function mais(){
	num++;
	console.log(num);
	contador.innerHTML = num;
}

function menos(){
	num--;
	console.log(num);
	contador.innerHTML = num;
}
