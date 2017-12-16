// Javascript and JQuery for the Star Wars RPG 

// Character objects declared here
quiGon = {
	Name 		: "Qui Gon Jin",
	Order 		: "Jedi",
	Health 		: 100,
	Attack 		: 0,
	Counter 	: 20,
	Image 		: "assets/images/QuiGon.jpg",
	Audio 		: "assets/audio/saber_1.wav",
	Eliminated 	: false
	};
	
kenobi = {
	Name 		: "Obi Wan Kenobi",
	Health 		: 50,
	Attack 		: 0,
	Counter 	: 25,
	Image 		: "assets/images/obiWan.jpg",
	Audio 		: "assets/audio/saber_2.wav",
	Eliminated 	: false
	};
	
yoda = {
	Name 		: "Yoda",
	Health 		: 80,
	Attack 		: 0,
	Counter 	: 50,
	Image 		: "assets/images/yoda.jpg",
	Audio 		: "assets/audio/saber_3.wav",
	Eliminated 	: false
	};
	
luke = {
	Name 		: "Luke Skywalker",
	Health 		: 150,
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
	Audio 		: "assets/audio/saber_6.wav",
	Eliminated 	: false
	};
	
vader = {
	Name 		: "Darth Vader",
	Health 		: 120,
	Attack 		: 45,
	Counter 	: 0,
	Image 		: "assets/images/darthVader.jpg",
	Audio 		: "assets/audio/saber_7.wav",
	Eliminated 	: false
	};
	
sidious = {
	Name 		: "Darth Sidious",
	Health 		: 100,
	Attack 		: 200,
	Counter 	: 0,
	Image 		: "assets/images/darthSidious.jpg",
	Audio 		: "assets/audio/saver_8.wav",
	Eliminated 	: false
};

// "Order" arrays are delacred here:
var jedis = [quiGon, kenobi, yoda, luke];

var siths = [maul, dooku, vader, sidious];


 // Declare objects for functions to change for each Jedi display element

var jedi_1 = {
	Name : function(name) {
		$(".summary-info.jedi.char-1.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.jedi.char-1.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.jedi.char-1.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.jedi.char-1.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".jedi.char-1.char-image").attr("src", image);
	},
};

var jedi_2 = {
	Name : function(name) {
		$(".summary-info.jedi.char-2.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.jedi.char-2.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.jedi.char-2.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.jedi.char-2.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".jedi.char-2.char-image").attr("src", image);
	},
};

var jedi_3 = {
	Name : function(name) {
		$(".summary-info.jedi.char-3.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.jedi.char-3.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.jedi.char-3.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.jedi.char-3.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".jedi.char-3.char-image").attr("src", image);
	},
};

var jedi_4 = {
	Name : function(name) {
		$(".summary-info.jedi.char-4.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.jedi.char-4.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.jedi.char-4.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.jedi.char-4.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".jedi.char-4.char-image").attr("src", image);
	},
};


// Declare objects for functions to change for each Jedi display element

var sith_1 = {
	Name : function(name) {
		$(".summary-info.sith.char-1.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.sith.char-1.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.sith.char-1.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.sith.char-1.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".sith.char-1.char-image").attr("src", image);
	},
};

var sith_2 = {
	Name : function(name) {
		$(".summary-info.sith.char-2.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.sith.char-2.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.sith.char-2.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.sith.char-2.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".sith.char-2.char-image").attr("src", image);
	},
};

var sith_3 = {
	Name : function(name) {
		$(".summary-info.sith.char-3.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.sith.char-3.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.sith.char-3.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.sith.char-3.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".sith.char-3.char-image").attr("src", image);
	},
};

var sith_4 = {
	Name : function(name) {
		$(".summary-info.sith.char-4.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.sith.char-4.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.sith.char-4.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.sith.char-4.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".sith.char-4.char-image").attr("src", image);
	},
};

// Declare an object for functions to change the jedi VS character

var jedi_vs = {
	Name : function(name) {
		$(".summary-info.jedi.vs-char.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.jedi.vs-char.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.jedi.vs-char.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.jedi.vs-char.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".jedi.vs-char-image").attr("src", image);
	},
};



// Declare an object for functions to change the sith VS character

var sith_vs = {
	Name : function(name) {
		$(".summary-info.sith.vs-char.name").text("NAME: " + name);
	},
	Health : function(health) {
		$(".summary-info.sith.vs-char.health").text("HEALTH: " + health);
	},
	Attack : function(attack) {
		$(".summary-info.sith.vs-char.attack").text("ATTACK: " + attack);
	},
	Counter : function(counter) {
		$(".summary-info.sith.vs-char.counter").text("COUNTER: " + counter);
	},
	Image : function(image) {
		$(".sith.vs-char-image").attr("src", image);
	},
};

// Delcare arrays for the character set objects

var jedi_display = [jedi_1, jedi_2, jedi_3, jedi_4];

var sith_display = [sith_1, sith_2, sith_3, sith_4];


// Declare the variables for the array position of the active characters fighting

var jediVsChar;

var sithVsChar;




// ***HERE IS THE MAIN FUNCTIONALITY RUNNING SEQUENCE***

// Initiate the game by removing the overlay on click of the "continue" button
$(".messageBtn").on("click", function() {
	$("#overlay").hide("slow");
});

// Set the display values and images for all of the Jedis
for (var j=0; j < jedis.length; j++) {
	setJedi(j,j);
}

// Set the display values and images for all of the Siths
for (var k=0; k < siths.length; k++) {
	setSith(k,k);
}

// User selects a Jedi
jediSelect();



// ***THIS IS THE END OF THE MAIN FUNCTIONALITY RUNNING SEQUENCE***


// ***ALL FUNCTIONS ARE HERE***

// Set the initial Jedi character values

function setJedi(num1, num2) {
	jedi_display[num1].Name(jedis[num2].Name);
	jedi_display[num1].Health(jedis[num2].Health);
	jedi_display[num1].Attack(jedis[num2].Attack);
	jedi_display[num1].Counter(jedis[num2].Counter);
	jedi_display[num1].Image(jedis[num2].Image);
}

// Set the initial Sith character values

function setSith(num1, num2) {
	sith_display[num1].Name(siths[num2].Name);
	sith_display[num1].Health(siths[num2].Health);
	sith_display[num1].Attack(siths[num2].Attack);
	sith_display[num1].Counter(siths[num2].Counter);
	sith_display[num1].Image(siths[num2].Image);
}


// Function jediSelect enables the user to select a Jedi and set him ready to fight.
function jediSelect() {

	// On hover of Jedi characters, change the boarder to Green

	$(".jedi.char-row.char-1").on({
		mouseenter: function() {
			$(".jedi.char-row.char-1").css("border-color", "green");
		},
		mouseleave: function() {
			$(".jedi.char-row.char-1").css("border-color", "grey");
		}
	});

	$(".jedi.char-row.char-2").on({
		mouseenter: function() {
			$(".jedi.char-row.char-2").css("border-color", "green");
		},
		mouseleave: function() {
			$(".jedi.char-row.char-2").css("border-color", "grey");
		}
	});

	$(".jedi.char-row.char-3").on({
		mouseenter: function() {
			$(".jedi.char-row.char-3").css("border-color", "green");
		},
		mouseleave: function() {
			$(".jedi.char-row.char-3").css("border-color", "grey");
		}
	});

	$(".jedi.char-row.char-4").on({
		mouseenter: function() {
			$(".jedi.char-row.char-4").css("border-color", "green");
		},
		mouseleave: function() {
			$(".jedi.char-row.char-4").css("border-color", "grey");
		}
	});

	// On click of a Jedi character, set the "jedi vs-char" to this character

	// Jedi character 1 on-click actions here
	$(".jedi.char-row.char-1").on("click",
		function() {
			// remove all hover events
			$(".char-row").off("mouseleave");
			$(".char-row").off("mouseenter");

			// set the border of the character to green
			$(".jedi.char-row.char-1").css("border-color", "green");

			// set Jedi VS Character to Jedi 1
			jediVsSet(0);

			// remove all click events
			$(".char-row").off("click");

			// Sith attacker is automatically generated but on a 1 second delay
			setTimeout(sithSelect, 1000);

			// Set the character in the array that is fighting
			jediVsChar = 0;


			return;
		});

	// Jedi character 2 on-click actions here
	$(".jedi.char-row.char-2").on("click",
		function() {
			// remove all hover events
			$(".char-row").off("mouseleave");
			$(".char-row").off("mouseenter");

			// set the border of the character to green
			$(".jedi.char-row.char-2").css("border-color", "green");

			// change the vs-img to the character image
			var charImageSrc = $(".jedi.char-2.char-image").attr("src");
			$(".jedi.vs-char-image").attr("src", charImageSrc);

			// set Jedi VS Character to Jedi 1
			jediVsSet(1);

			// remove all click events
			$(".char-row").off("click");

			// Sith attacker is automatically generated but on a 1 second delay
			setTimeout(sithSelect, 1000);

			// Set the character in the array that is fighting
			jediVsChar = 1;

			return;
		});

	// Jedi character 3 on-click actions here
	$(".jedi.char-row.char-3").on("click",
		function() {
			// remove all hover events
			$(".char-row").off("mouseleave");
			$(".char-row").off("mouseenter");

			// set the border of the character to green
			$(".jedi.char-row.char-3").css("border-color", "green");

			// change the vs-img to the character image
			var charImageSrc = $(".jedi.char-3.char-image").attr("src");
			$(".jedi.vs-char-image").attr("src", charImageSrc);

			// set Jedi VS Character to Jedi 1
			jediVsSet(2);

			// remove all click events
			$(".char-row").off("click");

			// Sith attacker is automatically generated but on a 1 second delay
			setTimeout(sithSelect, 1000);

			// Set the character in the array that is fighting
			jediVsChar = 2;

			return;
		});

	// Jedi character 4 on-click actions here
	$(".jedi.char-row.char-4").on("click",
		function() {
			// remove all hover events
			$(".char-row").off("mouseleave");
			$(".char-row").off("mouseenter");

			// set the border of the character to green
			$(".jedi.char-row.char-4").css("border-color", "green");

			// change the vs-img to the character image
			var charImageSrc = $(".jedi.char-4.char-image").attr("src");
			$(".jedi.vs-char-image").attr("src", charImageSrc);

			// set Jedi VS Character to Jedi 1
			jediVsSet(3);

			// remove all click events
			$(".char-row").off("click");

			// Sith attacker is automatically generated but on a 1 second delay
			setTimeout(sithSelect, 1000);

			// Set the character in the array that is fighting
			jediVsChar = 3;

			return;
		});
}

// Function sithSelect is the computer automatically selecting the correct Sith to put into the VS area
function sithSelect() {
	for (var l = 0; l < siths.length; l++) {
		if (siths[l].Eliminated === false) {
			sith_vs.Name(siths[l].Name);
			sith_vs.Health(siths[l].Health);
			sith_vs.Attack(siths[l].Attack);
			sith_vs.Counter(siths[l].Counter);
			sith_vs.Image(siths[l].Image);

			// Set the character in the array that is fighting
			sithVsChar = l;

			// play a lightsaber start-up sound effect
			audio1 = new Audio("assets/audio/saber_engage.wav");
			audio1.play();

			// exit the loop once a Sith has been set
			return;
		}
	}
}

// Function to set the Jedi VS character
function jediVsSet(num) {
	jedi_vs.Name(jedis[num].Name);
	jedi_vs.Health(jedis[num].Health);
	jedi_vs.Attack(jedis[num].Attack);
	jedi_vs.Counter(jedis[num].Counter);
	jedi_vs.Image(jedis[num].Image);
}