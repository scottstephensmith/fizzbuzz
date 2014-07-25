$( document ).ready(function() {
var userNumber = prompt("Please enter a number:");

var input = function(userNumber) {
	for (number = 1; number < +userNumber; number ++){
		if (+number == NaN){
			alert("Please enter a real number!");
			userNumber();
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
});
