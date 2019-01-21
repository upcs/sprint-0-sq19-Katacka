let addButton = document.getElementById("addNums");
addButton.addEventListener('click', () => {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	document.getElementById("sum").innerHTML = add(num1, num2);
});
