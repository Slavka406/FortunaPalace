let isStarted = false;

let score = 0;
var initialArrayLength = 20;

const createScoreBox = () => {
	const scoreBox = document.createElement("div");
	scoreBox.setAttribute("id", "scoreBox");
	document.body.appendChild(scoreBox);
	document.getElementById("scoreBox").innerHTML = `Score: ${score}`;
	document.getElementById("scoreBox").style.position = 'absolute';
	document.getElementById("scoreBox").style.right = '10px';
	document.getElementById("scoreBox").style.top = '10px';
	document.getElementById("scoreBox").style.backgroundColor = 'black';
	document.getElementById("scoreBox").style.color = 'white';
	document.getElementById("scoreBox").style.padding = '10px';
	document.getElementById("scoreBox").style.borderRadius = '10px';
	document.getElementById("scoreBox").style.zIndex = initialArrayLength+1;
}

createScoreBox()



// Create an array of 1000 null values to store the magic buttons
const magicButtons = new Array(initialArrayLength).fill(null);


// Calculate the available width and height of the window
const windowWidth = window.innerWidth - 640;
const windowHeight = window.innerHeight - 120;

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
		document.getElementById("scoreBox").innerHTML = `Score: ${score}`;

		if (magicButtons?.length === score) {
			document.body.innerHTML = '<div style="display:flex;width:100%;height:100%;flex:1;align-items:center;justify-content:center"><div style="text-align:center"><h1>You Win!</h1><p>Refresh the page to play again.</p></div></div>';
		
			createScoreBox()
			console.log("You Win!");
		}

		move();
	});
	newButton.innerHTML = "Please find the real magic button!";

	// Set the position and initial random position of the new button
	newButton.style.position = 'absolute';
	newButton.style.left = randomLeft+'px';
	newButton.style.top = randomTop+'px';

	// Append the new button to the body of the document
	document.body.appendChild(newButton);
};

// Function to start the game
const startGame = () => {
	document.getElementById('magicButton').innerHTML = "Please find the real magic button!";
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
		document.body.innerHTML = '<div style="display:flex;width:100%;height:100%;flex:1;align-items:center;justify-content:center"><div style="text-align:center"><h1>Game Over!</h1><p>Refresh the page to play again.</p></div></div>';
		createScoreBox()
		
	}
};
