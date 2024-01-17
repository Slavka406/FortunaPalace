let isStarted = false;
document.getElementById('magicButton').style.display = 'none';

let score = 0;
let balance = localStorage.getItem("balance") || 100;

console.log({balance}, localStorage.getItem("balance"))
document.getElementById("balance").innerHTML = balance;
let initialArrayLength = 5;

var magicButtons = []

console.log({initialArrayLength})

let mode = "Beginner";
var modes = {
	"Beginner": 5,
	"Intermediate": 10,
	"Advanced": 20,
	"Expert": 50,
	"Insane": 100,
}

const setMode = (mode) => {
	initialArrayLength = modes[mode];
	document.getElementById("mode").innerHTML = mode;

	console.log({mode, qwe: modes[mode], initialArrayLength})

}

const onBeginner = () => {
	mode = "Beginner";
	setMode(mode);
}
const onIntermediate = () => {
	mode = "Intermediate";
	setMode(mode);
}
const onAdvanced = () => {
	mode = "Advanced";
	setMode(mode);
}
const onExpert = () => {
	mode = "Expert";
	setMode(mode);
}
const onInsane = () => {
	mode = "Insane";
	setMode(mode);
}

const handleOptions = () => {
	const menu = document.getElementById("menu");
	menu.style.transition = "transform 0.5s ease-out";
	menu.style.transform = "translateY(200vh)";

	const options = document.getElementById("options");
	options.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
	options.style.transform = "translateY(-200vh)";
	options.style.display = "block";
	options.style.position = "absolute";
	options.style.transform = "translate(0, -200vh)";

	setTimeout(() => {
		options.style.transform = "translate(0, 0)";
	}, 10);
}

const handleBack = () => {
	const menu = document.getElementById("menu");
	menu.style.transition = "transform 0.5s ease-out";
	menu.style.transform = "translateY(0)";

	const options = document.getElementById("options");
	options.style.transition = "transform 0.5s ease-out";
	options.style.transform = "translateY(-200vh)";
}

// const createScoreBox = () => {
// 	const scoreBox = document.createElement("div");
// 	scoreBox.setAttribute("id", "scoreBox");
// 	document.body.appendChild(scoreBox);
// 	document.getElementById("scoreBox").innerHTML = `Score: ${score}`;
// 	document.getElementById("scoreBox").style.position = 'absolute';
// 	document.getElementById("scoreBox").style.right = '10px';
// 	document.getElementById("scoreBox").style.top = '10px';
// 	document.getElementById("scoreBox").style.backgroundColor = 'black';
// 	document.getElementById("scoreBox").style.color = 'white';
// 	document.getElementById("scoreBox").style.padding = '10px';
// 	document.getElementById("scoreBox").style.borderRadius = '10px';
// 	document.getElementById("scoreBox").style.zIndex = initialArrayLength+1;
// }

// createScoreBox()






// Calculate the available width and height of the window
const windowWidth = window.innerWidth - 200;
const windowHeight = window.innerHeight - 100;

// Function to move the magic buttons to random positions
const move = () => {
	// Move each magic button to a random position within the window
	magicButtons.forEach((item, id) => {
		const randomTop = Math.floor(Math.random() * windowHeight);
		const randomLeft = Math.floor(Math.random() * windowWidth);
		const randomzIndex = Math.floor(Math.random() * magicButtons.length-1);
		
		document.getElementById(id).style.left = randomLeft+'px';
		document.getElementById(id).style.top = randomTop+'px';
		document.getElementById(id).style.zIndex = randomzIndex+1;
	});

		const randomTop = Math.floor(Math.random() * windowHeight);
		const randomLeft = Math.floor(Math.random() * windowWidth);
		const randomzIndex = Math.floor(Math.random() * magicButtons.length);

		document.getElementById('magicButton').style.position = 'absolute';
		document.getElementById('magicButton').style.left = randomLeft+'px';
		document.getElementById('magicButton').style.top = randomTop+'px';
		document.getElementById('magicButton').style.zIndex = randomzIndex;

		// document.getElementById('magicButton').style.backgroundImage = 'linear-gradient(to right, green, red)';
};

// Function to create a new magic button
const createButton = (id) => {
	const newButton = document.createElement("div");
	const randomTop = Math.floor(Math.random() * windowHeight);
	const randomLeft = Math.floor(Math.random() * windowWidth);

	// Add the "btn" class and set the id and onclick attribute of the new button
	newButton.classList.add("btn");
	newButton.setAttribute("id", id);
	newButton.addEventListener("click", () => {
		score++;

		document.getElementById(id).style.display = 'none';
		// document.getElementById("scoreBox").innerHTML = `Score: ${score}`;

		if (magicButtons?.length === score) {
			document.body.innerHTML = '<div style="display:flex;width:100%;height:100%;flex:1;align-items:center;justify-content:center"><div style="text-align:center"><h1>You Win!</h1><p style="color: #8f7528" onClick="refreshPage()">Play again.</p></div></div>';
			
			localStorage.setItem("balance", +balance + 10);
			// createScoreBox()
			console.log("You Win!");
		}

		move();
	});
	newButton.innerHTML = "Press Me!";

	// Set the position and initial random position of the new button
	newButton.style.position = 'absolute';
	newButton.style.left = randomLeft+'px';
	newButton.style.top = randomTop+'px';

	// Append the new button to the body of the document
	const gameSpace = document.getElementById("gameSpace");
	gameSpace.appendChild(newButton);
};

// Function to start the game
const startGame = () => {
	document.getElementById('magicButton').style.display = 'block';
	document.getElementById('magicButton').style.textAlign = 'center';
	document.getElementById('magicButton').style.display = 'flex';
	document.getElementById('magicButton').style.justifyContent = 'center';
	document.getElementById('magicButton').style.alignItems = 'center';
	document.getElementById('magicButton').innerHTML = "Press Me!";

	setTimeout(() => {
		document.getElementById('magicButton').style.backgroundImage = 'linear-gradient(to right, green, red)';
	}, 500);

	setTimeout(() => {
		document.getElementById('magicButton').style.backgroundImage = 'linear-gradient(to right,#729ae4,#7852ff,#7852ff,#729ae4)';
	}, 1000);

	if (isStarted === false) {
		// Create a magic button for each item in the magicButtons array
		magicButtons.forEach((item, index) => createButton(index));

		// Move the magic buttons to random positions
		move();

		isStarted = true;
	} else {
		// Clear the document's innerHTML
		document.body.innerHTML = '<div style="display:flex;width:100%;height:100%;flex:1;align-items:center;justify-content:center"><div style="text-align:center"><h1>Game Over!</h1><p style="color: #8f7528" onClick="refreshPage()">Play again.</p></div></div>';
		// createScoreBox()
		localStorage.setItem("balance", +balance - 10);
		
	}
};


const handleStart = () => {
	if (balance < 10) {
		alert("You don't have enough balance to play the game. Please add balance to your account.")
		return;
	}
	magicButtons = new Array(initialArrayLength).fill(null);

	const menu = document.getElementById("menu");
	menu.style.transition = "transform 0.5s ease-out";
	menu.style.transform = "translateY(200%)";

	startGame()
}

const refreshPage = () => {
	window.location.reload();
}
