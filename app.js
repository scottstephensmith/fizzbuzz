$( document ).ready(function() {

var userNumber = prompt("Please enter a number:");
var realNumber = parseInt(userNumber);

var input = function(realNumber) {
	for (number = 1; number < realNumber; number ++){
		if (userNumber == NaN){
			console.log("not a valid number")
			alert("Please enter a real number!");
		}
		else if ((number % 3 == 0) && (number % 5 == 0)) {
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

input(realNumber);
});
