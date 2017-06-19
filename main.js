function id(id) {
		return document.getElementById(id);
	}
	var currentSign;
	var globalValue = 0;
	var currentValue = 0;
	var globalVar = 0;
	function checkNumber() {
		if (globalValue == 0) {
			globalVar = 1;
			id('p-output').innerHTML = String(this.id);
			globalValue = Number(this.id);
		}
		else {
			console.log(globalValue)
			if (currentSign == undefined && globalVar == 0) {
				globalValue = 0;
				currentValue = 0;
				globalVar = 1;
				id('p-output').innerHTML = String(this.id);
				console.log(this,this.id)

			}
			else {
				if (currentSign == undefined && globalVar !=0 ) {
					id('p-output').innerHTML += String(this.id);
					globalValue += String(this.id);
				}
			
				else {
					if (currentValue == 0) {
					id('p-output').innerHTML = String(this.id);
					currentValue = Number(this.id);
					}
					else {
					id('p-output').innerHTML += String(this.id);
					currentValue += String(this.id);
					}
				}
			}
			
			
		}
	}

	function checkSign() {
		currentSign = String(this.id);
	}

	function equal() {
		
		switch(currentSign){
				case '+':
				console.log(typeof Number(globalValue))
				globalValue = Number(globalValue) + Number(currentValue);
				id('p-output').innerHTML = String(globalValue);
				break;

				case '-':
				globalValue = Number(globalValue) - Number(currentValue);
				id('p-output').innerHTML = String(globalValue);
				break;

				case '*':
				globalValue = Number(globalValue) * Number(currentValue);
				id('p-output').innerHTML = String(globalValue);
				break;

				case '/':
				globalValue = Number(globalValue) / Number(currentValue);
				id('p-output').innerHTML = String(globalValue);
				break;
			}
		currentValue = 0;
		currentSign = undefined;
		globalVar = 0;
	}

	function ce() {
		globalValue = 0;
		globalVar = 0;
		currentSign = undefined;
		currentValue = 0;
		id('p-output').innerHTML = String(globalValue);
	}

	var numbers = document.getElementsByClassName('btn-number');

	[].forEach.call(numbers,function(item){
		item.addEventListener('click',checkNumber)
	});

	var signs = document.getElementsByClassName('sign');

	[].forEach.call(signs,function(item){
		item.addEventListener('click',checkSign)
	});

	
	id('equal').addEventListener('click',equal);

	id('ce').addEventListener('click',ce)