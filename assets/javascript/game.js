$(document).ready(function() {

//GLOBAL VARIABLES
//====================================================================
	
	var numberList = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

	var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	var points= 0;
	var winCounter = 0;
	var lossCounter = 0;


	var randNum = numberList[Math.floor(Math.random() * numberList.length)];
		$(".randNum").html(randNum);
		console.log(randNum);

	var randCrystal1 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal1);

	var randCrystal2 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal2);

	var randCrystal3 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal3);

	var randCrystal4 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal4);


function startGame() {
	randNum = numberList[Math.floor(Math.random() * numberList.length)];
		$(".randNum").html(randNum);
		console.log(randNum);

	randCrystal1 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal1);

	randCrystal2 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal2);

	randCrystal3 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal3);

	randCrystal4 = crystalValue[Math.floor(Math.random() * crystalValue.length)];
		console.log(randCrystal4);


	points = 0;

}

	function roundComplete() {
		console.log("points ", points.toString());
		console.log("randNumb ", randNum.toString());
		console.log((points.toString() === randNum.toString()))
		

		if (points === randNum) {
			winCounter++;
			alert("You win!");
			$(".wins").html("Wins: " + winCounter);

			points = 0;

			$(".points").html(points);

			startGame();

		}



		else if (points > randNum) {
			lossCounter++;
			alert("Sorry, try again!");
			$(".losses").html("Losses: " + lossCounter);

			points = 0;

			$(".points").html(points);

			startGame();

		}
	}



//MAIN PROCESS
//================================================================

	startGame();


	$(".randCrystal1").on("click", function(){
		points += randCrystal1;
		console.log("test onclick: ", points);
		$(".points").html(points);
		console.log(points);
		roundComplete();
	});


	$(".randCrystal2").on("click", function(){
		points += randCrystal2;
		$(".points").html(points);
		console.log(points);		
		roundComplete();
	});


	$(".randCrystal3").on("click", function(){
		points += randCrystal3;
		$(".points").html(points);
		console.log(points);		
		roundComplete();
	});


	$(".randCrystal4").on("click", function(){
		points += randCrystal4;
		$(".points").html(points);
		console.log("sfdgs " + points);		
		roundComplete();
	});
	


});



		


