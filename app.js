$( document ).ready(function() {


var userNumber = prompt("Please enter a number:");
	while (isNaN(userNumber) === true) {
		console.log("invalid number entered");
		userNumber = prompt("Try again with a real number this time:");
	}
	console.log("number inputed by user was: " + userNumber);
	

/*var valdiate = function(userNumber){
	if (userNumber == NaN) {
		alert("Please enter a positive integer!");
	}
	else {
		parseInt(userNumber);
		userNumber = realNumber;
	}
}

 var realNumber = parseInt(userNumber); */

var calcIt = function(number) {
	for (number = 1; number <= (userNumber); number ++){
		if ((number % 3 == 0) && (number % 5 == 0)) {
			console.log("fizzbuz");
			$("body").append('fizzbuzz<br>');
		}
		else if ( number%3 == 0){
			console.log("fizz");
			$("body").append('fizz<br>');
		}
		else if (number%5 == 0){
			console.log("buzz");
			$("body").append('buzz<br>');
		}
		else {
			console.log(number);
			$("body").append(number + "<br>");
		}
}
}
calcIt(userNumber);
});
