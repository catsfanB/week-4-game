// Javascript and JQuery for the Star Wars RPG 

// Character objects declared here
quiGon = {
	Name 		: "Qui Gon Jin",
	Order 		: "Jedi",
	Health 		: 150,
	Attack 		: 0,
	Counter 	: 20,
	Image 		: "assets/images/QuiGon.jpg",
	Audio 		: "assets/audio/saber_1.wav",
	Eliminated 	: false
	};
	
kenobi = {
	Name 		: "Obi Wan Kenobi",
	Health 		: 125,
	Attack 		: 0,
	Counter 	: 25,
	Image 		: "assets/images/obiWan.jpg",
	Audio 		: "assets/audio/saber_9.wav",
	Eliminated 	: false
	};
	
yoda = {
	Name 		: "Yoda",
	Health 		: 100,
	Attack 		: 0,
	Counter 	: 50,
	Image 		: "assets/images/yoda.jpg",
	Audio 		: "assets/audio/saber_3.wav",
	Eliminated 	: false
	};
	
luke = {
	Name 		: "Luke Skywalker",
	Health 		: 180,
	Attack 		: 0,
	Counter 	: 40,
	Image 		: "assets/images/lukeSkywalker.jpg",
	Audio 		: "assets/audio/saber_4.wav",
	Eliminated 	: false
	};
	
maul = {
	Name 		: "Darth Maul",
	Health 		: 150,
	Attack 		: 25,
	Counter 	: 0,
	Image 		: "assets/images/darthMaul.jpg",
	Audio 		: "assets/audio/saber_5.wav",
	Eliminated 	: false
	};
	
dooku = {
	Name 		: "Count Dooku",
	Health 		: 90,
	Attack 		: 35,
	Counter 	: 0,
	Image 		: "assets/images/countDooku.jpg",
	Audio 		: "assets/audio/saber_11.wav",
	Eliminated 	: false
	};
	
vader = {
	Name 		: "Darth Vader",
	Health 		: 120,
	Attack 		: 45,
	Counter 	: 0,
	Image 		: "assets/images/darthVader.jpg",
	Audio 		: "assets/audio/saber_11.wav",
	Eliminated 	: false
	};
	
sidious = {
	Name 		: "Darth Sidious",
	Health 		: 100,
	Attack 		: 200,
	Counter 	: 0,
	Image 		: "assets/images/darthSidious.jpg",
	Audio 		: "assets/audio/saber_10.wav",
	Eliminated 	: false
};

// Default value for the VS character

nobody = {
	Name 		: "",
	Order 		: "",
	Health 		: 0,
	Attack 		: 0,
	Counter 	: 0,
	Image 		: "assets/images/silhouette.png",
	Audio 		: "",
	Eliminated 	: false
};

// "Order" arrays are delacred here:
var jedis = [quiGon, kenobi, yoda, luke];

var siths = [maul, dooku, vader, sidious];

// Display character object array defined here
charArray = ["char-1", "char-2", "char-3", "char-4"];

var selector = [];

// Declare the variables for the array position of the active characters fighting

var jediVsChar;

var sithVsChar;

// Variable for managing the Roll History display
var rollHistory = $(".roll-history")

// Variable to track the number of rolls
var rollNumber = 0;

// Variables for performing various checks are here
// Variable for first Jedi Set check
var checkJediSet = false;
var vaderLight = false;

// Variables for incremental strength gained on each roll
var strengthIncrementSith = 5;
var strengthIncrementJedi = 10;

// Element references
var rollBtn = $(".roll-btn");
var finishBtn = $(".finish-btn");


// ***HERE IS THE MAIN FUNCTIONALITY RUNNING SEQUENCE***

// Hide the final screen
$("#overlay_final").hide();

// Initiate the game by removing the overlay on click of the "continue" button
$(".messageBtn").on("click", function() {
	$("#overlay_instructions").hide("slow");
	rollBtn.hide();
	finishBtn.hide();
});

// Set the display values and images for all of the Jedis
for (var j=0; j < jedis.length; j++) {
	newSetJedi(jedis[j], charArray[j]);
}

// Set the display values and images for all of the Siths
for (var k=0; k < siths.length; k++) {
	newSetSith(siths[k], charArray[k]);
}

// User selects a Jedi which results in auto-selection of Sith competitor
jediSelect();


// ROLL LOGIC IS HERE
// On click of the roll button, execute one round of fighting
rollBtn.on("click", function() {
	// Hide the roll button
	rollBtn.hide();

	// Increment the number of rolls
	rollNumber++;

	// Sith Attacks - call function on a delay
	setTimeout(sithAttack, 500);

	// Jedi Counter-Attacks if possible
	setTimeout(jediActions, 3000);

	// After Counter-Attack, determine if Sith continues or is replaced
	setTimeout(sithEliminated, 4000);
	
});


// ***THIS IS THE END OF THE MAIN FUNCTIONALITY RUNNING SEQUENCE***


// ***ALL FUNCTIONS ARE HERE***

// Function jediSelect enables the user to select a Jedi and set him ready to fight.
function jediSelect() {

	// Inform the user to select a Jedi Character
	var rollHistoryOld = rollHistory.html();
	var rollHistoryNew = rollHistoryOld + "NOTE: select a jedi to take on the sith<br>";
	rollHistory.html(rollHistoryNew);

	// Scroll to bottom of the Roll History
	var textArea = $(".roll-history");
	textArea.scrollTop( textArea[0].scrollHeight - textArea.height() );

	// On hover of Jedi characters, change the boarder to Green

	if (!jedis[0].Eliminated) {
		$(".jedi.char-row.char-1").on({
			mouseenter: function() {
				$(".jedi.char-row.char-1").css("border-color", "green");
			},
			mouseleave: function() {
				$(".jedi.char-row.char-1").css("border-color", "grey");
			}
		});
	}

	if (!jedis[1].Eliminated) {
		$(".jedi.char-row.char-2").on({
			mouseenter: function() {
				$(".jedi.char-row.char-2").css("border-color", "green");
			},
			mouseleave: function() {
				$(".jedi.char-row.char-2").css("border-color", "grey");
			}
		});
	}

	if (!jedis[2].Eliminated) {
		$(".jedi.char-row.char-3").on({
			mouseenter: function() {
				$(".jedi.char-row.char-3").css("border-color", "green");
			},
			mouseleave: function() {
				$(".jedi.char-row.char-3").css("border-color", "grey");
			}
		});
	}

	if (!jedis[3].Eliminated) {
		$(".jedi.char-row.char-4").on({
			mouseenter: function() {
				$(".jedi.char-row.char-4").css("border-color", "green");
			},
			mouseleave: function() {
				$(".jedi.char-row.char-4").css("border-color", "grey");
			}
		});
	}

	// On click of a Jedi character, set the "jedi vs-char" to this character

	// Jedi character 1 on-click actions here
	if (!jedis[0].Eliminated) {
		$(".jedi.char-row.char-1").on("click",
			function() {
				// remove all hover events
				$(".char-row").off("mouseleave");
				$(".char-row").off("mouseenter");

				// set the border of the character to green
				$(".jedi.char-row.char-1").css("border-color", "green");

				// set Jedi VS Character to Jedi 1
				newSetJedi(quiGon, "vs-char");

				// remove all click events
				$(".char-row").off("click");

				// Sith attacker is automatically generated but on a 1 second delay
				if (!checkJediSet) { 
					setTimeout(sithSelect, 1000);
				}

				checkJediSet = true;

				// Set the character in the array that is fighting
				jediVsChar = 0;

				// Show Roll Button
				rollBtn.show();

				return;
			});
	}

		// Jedi character 2 on-click actions here
	if (!jedis[1].Eliminated) {
		$(".jedi.char-row.char-2").on("click",
			function() {
				// remove all hover events
				$(".char-row").off("mouseleave");
				$(".char-row").off("mouseenter");

				// set the border of the character to green
				$(".jedi.char-row.char-2").css("border-color", "green");

				// set Jedi VS Character to Jedi 1
				newSetJedi(kenobi, "vs-char");

				// remove all click events
				$(".char-row").off("click");

				// Sith attacker is automatically generated but on a 1 second delay
				if (!checkJediSet) { 
					setTimeout(sithSelect, 1000);
				}

				checkJediSet = true;

				// Set the character in the array that is fighting
				jediVsChar = 1;

				// Show Roll Button
				rollBtn.show();

				return;
			});
	}

		// Jedi character 3 on-click actions here
	if (!jedis[2].Eliminated) {
		$(".jedi.char-row.char-3").on("click",
			function() {
				// remove all hover events
				$(".char-row").off("mouseleave");
				$(".char-row").off("mouseenter");

				// set the border of the character to green
				$(".jedi.char-row.char-3").css("border-color", "green");

				// set Jedi VS Character to Jedi 1
				newSetJedi(yoda, "vs-char");

				// remove all click events
				$(".char-row").off("click");

				// Sith attacker is automatically generated but on a 1 second delay
				if (!checkJediSet) { 
					setTimeout(sithSelect, 1000);
				}

				checkJediSet = true;

				// Set the character in the array that is fighting
				jediVsChar = 2;

				// Show Roll Button
				rollBtn.show();

				return;
			});
	}

		// Jedi character 4 on-click actions here
	if (!jedis[3].Eliminated) {
		$(".jedi.char-row.char-4").on("click",
			function() {
				// remove all hover events
				$(".char-row").off("mouseleave");
				$(".char-row").off("mouseenter");

				// set the border of the character to green
				$(".jedi.char-row.char-4").css("border-color", "green");

				// set Jedi VS Character to Jedi 1
				newSetJedi(luke, "vs-char");

				// remove all click events
				$(".char-row").off("click");

				// Sith attacker is automatically generated but on a 1 second delay
				if (!checkJediSet) { 
					setTimeout(sithSelect, 1000);
				}

				checkJediSet = true;

				// Set the character in the array that is fighting
				jediVsChar = 3;

				// Show Roll Button
				rollBtn.show();

				return;
			});
	}
}

// Function sithSelect is the computer automatically selecting the correct Sith to put into the VS area
function sithSelect() {
	var numSithEliminated = 0;
	for (var l = 0; l < siths.length; l++) {

		// select a Sith combatant in order from top to bottom to fight the selected Jedi, if they are not already eliminated
		if (siths[l].Eliminated === false) {
			
			// Load the selected Sith character object into the Sith VS display location
			newSetSith(siths[l], "vs-char");

			// Set the character in the array that is fighting
			sithVsChar = l;

			// play a lightsaber start-up sound effect
			audio1 = new Audio("assets/audio/saber_engage.wav");
			audio1.play();

			// exit the loop once a Sith has been set
			return;
		}
		else {
			//increment the number of sith eliminated
			numSithEliminated++;
		}
	}
	if (numSithEliminated == 4) {
		// Winner Winner, Chicken Dinner
		console.log("you win");
		youWin();
	}
}

// Function newSetJedi loads the specified Jedi character object into the specified Jedi display location
function newSetJedi(jediName, jediLocation) {

	$(".summary-info.jedi."+jediLocation+".name").text("NAME: " + jediName.Name);

	$(".summary-info.jedi."+jediLocation+".health").text("HEALTH: " + jediName.Health);

	$(".summary-info.jedi."+jediLocation+".attack").text("ATTACK: " + jediName.Attack);

	$(".summary-info.jedi."+jediLocation+".counter").text("COUNTER: " + jediName.Counter);

	$(".jedi."+jediLocation+".char-image").attr("src", jediName.Image);
}

// Function newSetSith loads the specified Sith character object into the specified Sith display location
function newSetSith(sithName, sithLocation) {

	$(".summary-info.sith."+sithLocation+".name").text("NAME: " + sithName.Name);

	$(".summary-info.sith."+sithLocation+".health").text("HEALTH: " + sithName.Health);

	$(".summary-info.sith."+sithLocation+".attack").text("ATTACK: " + sithName.Attack);

	$(".summary-info.sith."+sithLocation+".counter").text("COUNTER: " + sithName.Counter);

	$(".sith."+sithLocation+".char-image").attr("src", sithName.Image);
}

// sithAttack function here for all calculations and actions related to the sith attack
function sithAttack() {
	// Play the Sith's combat audio file
	combatAudio = new Audio(siths[sithVsChar].Audio);
	combatAudio.play();

	// Reduce jedi health by sith attack.  If below 0, set to 0.
	jedis[jediVsChar].Health -= siths[sithVsChar].Attack;

	if (jedis[jediVsChar].Health < 0) {
		jedis[jediVsChar].Health = 0;
	}

	// Update the Roll History section with the outcome of the roll
	var rollHistoryOld = rollHistory.html();
	var rollHistoryNew = rollHistoryOld +
		"--------------------------------<br>" +
		"Roll Number: " + rollNumber + " attack" +
		"<br>--------------------------------<br>" +
		siths[sithVsChar].Name + " attacks " + jedis[jediVsChar].Name + " for " + siths[sithVsChar].Attack + " points<br>" +
		jedis[jediVsChar].Name + " health has reduced to " + jedis[jediVsChar].Health + "<br>";

	rollHistory.html(rollHistoryNew);

	// Increase sith attack by incremental strength gained
	siths[sithVsChar].Attack += strengthIncrementSith;

	// Update roll history with the new attack value
	var rollHistoryOld = rollHistory.html();
	var rollHistoryNew = rollHistoryOld +		
		siths[sithVsChar].Name + " has grown stronger with the force.  His attack strength has increased to " + siths[sithVsChar].Attack +"<br>";

	rollHistory.html(rollHistoryNew);

	// Scroll to bottom of the Roll History
	var textArea = $(".roll-history");
	textArea.scrollTop( textArea[0].scrollHeight - textArea.height() );

	// Reset display of jedi and sith for the new atrribute values
	newSetJedi(jedis[jediVsChar], charArray[jediVsChar]);
	newSetJedi(jedis[jediVsChar], "vs-char");

	newSetSith(siths[sithVsChar], charArray[sithVsChar]);
	newSetSith(siths[sithVsChar], "vs-char");
}


// Function to determine which Jedi action to take after the Sith Attack
function jediActions() {
	if (jedis[jediVsChar].Health > 0) {
		jediCounter();
	}
	else {
		jediEliminated();
	}
}

// Jedi counter-attack function here for all calculations and actions related to the Jedi counter-attack
function jediCounter() {
	// Play the Jedi's combat audio file
	combatAudio = new Audio(jedis[jediVsChar].Audio);
	combatAudio.play();

	// Reduce Sith health by the Jedi counter
	siths[sithVsChar].Health -= jedis[jediVsChar].Counter;

	if (siths[sithVsChar].Health < 0) {
		siths[sithVsChar].Health = 0;
	}

	// Update the Roll History section with the outcome of the roll
	var rollHistoryOld = rollHistory.html();
	var rollHistoryNew = rollHistoryOld +
		"--------------------------------<br>" +
		"Roll Number: " + rollNumber + " counter-attack" +
		"<br>--------------------------------<br>" +
		jedis[jediVsChar].Name + " attacks " + siths[sithVsChar].Name + " for " + jedis[jediVsChar].Attack + " points<br>" +
		siths[sithVsChar].Name + " health has reduced to " + siths[sithVsChar].Health + "<br>";

	rollHistory.html(rollHistoryNew);

	// Increase jedi attack by incremental strength gained
	jedis[jediVsChar].Counter += strengthIncrementJedi;

	// Update roll history with the new attack value
	var rollHistoryOld = rollHistory.html();
	var rollHistoryNew = rollHistoryOld +		
		jedis[jediVsChar].Name + " has grown stronger with the force.  His counter strength has increased to " + jedis[jediVsChar].Counter +"<br>";

	rollHistory.html(rollHistoryNew);

	// Scroll to bottom of the Roll History
	var textArea = $(".roll-history");
	textArea.scrollTop( textArea[0].scrollHeight - textArea.height() );

	// Reset display of jedi and sith for the new attribute values
	newSetJedi(jedis[jediVsChar], charArray[jediVsChar]);
	newSetJedi(jedis[jediVsChar], "vs-char");

	newSetSith(siths[sithVsChar], charArray[sithVsChar]);
	newSetSith(siths[sithVsChar], "vs-char");

	// Reveal the Roll button in prep for next round
	setTimeout(function() {
		rollBtn.show();
	},1500);


}

// Function to address the actions required when a Jedi has been eliminated
function jediEliminated() {

	// Play audio associated with a Jedi defeat
	defeatAudio = new Audio("assets/audio/WilhelmScream.mp3");
	defeatAudio.play();

	defeatAudio2 = new Audio("assets/audio/wipthemout.mp3");
	setTimeout(function() {
		defeatAudio2.play();
	}, 1500);

	// Set Eliminated to true
	jedis[jediVsChar].Eliminated = true;

	// Set border of jedi's display element to RED
	$(".row.jedi.char-row."+charArray[jediVsChar]+"").css("border-color", "red");

	// Update the Roll History to note the Jedi's defeat
	var rollHistoryOld = rollHistory.html();
	var rollHistoryNew = rollHistoryOld +
		"--------------------------------<br>" +
		jedis[jediVsChar].Name + " has been eliminated!" +
		"<br>--------------------------------<br>";

	rollHistory.html(rollHistoryNew);

	// Scroll to bottom of the Roll History
	var textArea = $(".roll-history");
	textArea.scrollTop( textArea[0].scrollHeight - textArea.height() );

	// Set the VS display for the jedi back to default (unselected)
	newSetJedi(nobody, "vs-char");

	// Run the checkVaderLight function
	checkVaderLight();

	// Check to determine if this is was last Jedi remaining
	checkLastJedi();

	// Start the process to set a new Jedi
	jediSelect();

}

// Function to determine if Vader's light should be set to True (i.e. Sidious defeats Luke)
function checkVaderLight() {
	if (jediVsChar == 3 && sithVsChar == 3) {
		vaderLight = true;
	}
}

// Function to determine if this is the last Jedi remaining and the loss conditions or Vader final battle
function checkLastJedi() {
	var jedisEliminated = 0;
	for (var m = 0; m < jedis.length; m++) {
		if (jedis[m].Eliminated) {
			jedisEliminated++;
		}
	}

	if (jedisEliminated == 4 && vaderLight) {
		vader.Health = 500;
		vader.Counter = 1000;
		setTimeout(function() {
			newSetJedi(vader, "vs-char");
			finishBtn.show();
			finishBtn.on("click", function () {
				youWin();
			});
		},8000);
	}

	else if (jedisEliminated == 4) {
		youLose();
	}
}

// Function to check if the Sith combatant has been eliminated during the round and associated actions
function sithEliminated() {
	if (siths[sithVsChar].Health == 0) {

		// Play audio associated with a Jedi defeat
		setTimeout(function() {
			defeatAudio = new Audio("assets/audio/WilhelmScream.mp3");
			defeatAudio.play();

			defeatAudio2 = new Audio("assets/audio/yodalaughing.wav");
			setTimeout(function() {
				defeatAudio2.play();
			}, 1500);
		}, 700);	


		// Set Elininated to True
		siths[sithVsChar].Eliminated = true;

		// Set display border to RED
		$(".row.sith.char-row."+charArray[sithVsChar]+"").css("border-color", "red");

		// Update the Roll History to note the Sith's defeat
		var rollHistoryOld = rollHistory.html();
		var rollHistoryNew = rollHistoryOld +
			"--------------------------------<br>" +
			siths[sithVsChar].Name + " has been eliminated!" +
			"<br>--------------------------------<br>";

		rollHistory.html(rollHistoryNew);

		// Scroll to bottom of the Roll History
		var textArea = $(".roll-history");
		textArea.scrollTop( textArea[0].scrollHeight - textArea.height() );

		// Select the next Sith for battle
		setTimeout(sithSelect, 4000);

	}	
}



// Function for creation of the You Win page
function youWin() {
	$("#overlay_final").show("slow");

	$("#winner").html(
		"<h1>You Win!</h1>" +
		"<h4>Click the video to see the exciting conclusion...</h4>"
	);

	setTimeout(function() {
		$("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/JlGwngHcKFk?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	}, 2000);

}

// Function for creating of the You Lose page
function youLose() {
	$("#overlay_final").show("slow");

	$("#loser").html(
		"<h1>You Lose!</h1>" +
		"<h4>Next time, don't underestimate the power of the dark side!.</h4>"
	);

	setTimeout(function() {
		$("#video").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/PFkAAvDkj9k?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>');
	}, 2000);
}