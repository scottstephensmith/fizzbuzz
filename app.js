$( document ).ready(function() {

for (number = 1; number < 101; number ++){
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

});