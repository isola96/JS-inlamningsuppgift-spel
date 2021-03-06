const students = [
	{
		name: "Adi Dzocaj",
		image: "images/adi-dzocaj.jpg",
	},
	{
		name: "Alexander Bergquist",
		image: "images/alexander-bergquist.jpg",
	},
	{
		name: "Alexander Kocman",
		image: "images/alexander-kocman.jpg",
	},
	{
		name: "Benjamin Benson",
		image: "images/benjamin-benson.jpg",
	},
	{
		name: "Benjamin Tsubarah",
		image: "images/benjamin-tsubarah.jpg",
	},
	{
		name : "Calle Nilsson",
		image: "images/calle-nilsson.jpg",
	},
	{
		name: "Chikage Takahashi Molander",
		image: "images/chikage-takahashi-molander.jpg",
	},
	{
		name: "Daniel Be",
		image: "images/daniel-be.jpg",
	},
	{
		name: "Daniel Carlsson",
		image: "images/daniel-carlsson.jpg",
	},
	{
		name: "Elin Ahlgren",
		image: "images/elin-ahlgren.jpg",
	},
	{
		name: "Emma Käck",
		image: "images/emma-kack.jpg",
	},
	{
		name: "Eric Ståhl",
		image: "images/eric-stahl.jpg",
	},
	{
		name: "Frans Gustavson Påsse",
		image: "images/frans-gustavson-passe.jpg",
	},
	{
		name: "Glafira Veretennikova",
		image: "images/glafira-veretennikova.jpg",
	},
	{
		name: "Gustaf Grönlund",
		image: "images/gustaf-gronlund.jpg",
	},
	{
		name: "Hanna Håkanson",
		image: "images/hanna-hakanson.jpg",
	},
	{
		name: "Heidi Sjöberg",
		image: "images/heidi-sjoberg.jpg",
	},
	{
		name: "Hugo Carzborn",
		image: "images/hugo-carzborn.jpg",
	},
	{
		name: "Jesper Kling",
		image: "images/jesper-kling.jpg",
	},
	{
		name: "Johan Ranestam",
		image: "images/johan-ranestam.jpg",
	},
	{
		name: "Johanna Bäckström",
		image: "images/johanna-backstrom.jpg",
	},
	{
		name: "Johanna Jönsson",
		image: "images/johanna-jonsson.jpg",
	},
	{
		name: "Jona Torsson",
		image: "images/jona-torsson.jpg",
	},
	{
		name: "Josefine Ahlstedt",
		image: "images/josefine-ahlstedt.jpg",
	},
	{
		name: "Julia Jespersdotter Högman",
		image: "images/julia-jespersdotter-hogman.jpg",
	},
	{
		name: "Julia Nemell",
		image: "images/julia-nemell.jpg",
	},
	{
		name: "Linus Lindberg",
		image: "images/linus-lindberg.jpg",
	},
	{
		name: "Malin Olsson",
		image: "images/malin-olsson.jpg",
	},
	{
		name: "Maria Haara-Lundhammar",
		image: "images/maria-haara-lundhammar.jpg",
	},
	{
		name: "Maria Lövgren",
		image: "images/maria-lovgren.jpg",
	},
	{
		name: "Nikola Dimitrijoski",
		image: "images/nikola-dimitrijoski.jpg",
	},
	{
		name: "Paulina Kiendys",
		image: "images/paulina-kiendys.jpg",
	},
	{
		name: "Raymond Lam",
		image: "images/raymond-lam.jpg",
	},
	{
		name: "Robin Karlsson",
		image: "images/robin-karlsson.jpg",
	},
	{
		name: "Sara Almqvist",
		image: "images/sara-almqvist.jpg",
	},
	{
		name: "Tim Nilsson",
		image: "images/tim-nilsson.jpg",
	},
	{
		name: "Tirapat Sukjit",
		image: "images/tirapat-sukjit.jpg",
	},
	{
		name: "Tobias Silfverberg",
		image: "images/tobias-silfverberg.jpg",
	},
	{
		name: "Wiktoria Dobrzewinska",
		image: "images/wiktoria-dobrzewinska.jpg",
	},
];
// kopia av orginal-array
let studentsCopy = [...students]; // inte deklarerat variabel

// mina variables
const showImageEl = document.querySelector('#img-classmates');
const button1 = document.querySelector('#first-choice');
const button2 = document.querySelector('#second-choice');
const button3 = document.querySelector('#third-choice');
const button4 = document.querySelector('#fourth-choice');
const myButtons = document.querySelector('#my-buttons');

let correctStudent;
let rightAnswer = 0;
let wrongAnswer = 0;
let amountOfGuesses = 0;
const arrayOfRightAnswer = [];
const arrayOfWrongAnswers = [];

// random
let random = (array) => {
	for (let i = array.length -1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

// ny fråga/bild
const newQuestion = () => {
	showImageEl.setAttribute('src', studentsCopy[0].image);
	let answersEl = [studentsCopy[0], studentsCopy[1], studentsCopy[2], studentsCopy[3]];

	correctStudent = studentsCopy[0];
	random(answersEl);

	button1.setAttribute('data-user', answersEl[0].name);
	button2.setAttribute('data-user', answersEl[1].name);
	button3.setAttribute('data-user', answersEl[2].name);
	button4.setAttribute('data-user', answersEl[3].name);

	button1.innerHTML = answersEl[0].name;
	button2.innerHTML = answersEl[1].name;	
	button3.innerHTML = answersEl[2].name;
	button4.innerHTML = answersEl[3].name;

	studentsCopy.shift(); // tar bort det rätta svaret
};

// kallar på funktionerna
random(studentsCopy);
newQuestion();

// click-event
myButtons.addEventListener('click', (e) => {
	amountOfGuesses++;

	if (e.target.dataset.user === correctStudent.name) { // ändrar till namnen istället 
		rightAnswer++;
		arrayOfRightAnswer.push(correctStudent.name); // ändrar till namnen istället 
	} else {
		wrongAnswer++;
		arrayOfWrongAnswers.push(correctStudent.name); // ändrar till namnen istället 
	}
	
	if (amountOfGuesses === 10) {
		alert('You made ' + amountOfGuesses + ' guesses and got ' + rightAnswer + ' correct ' + ' and you got ' + wrongAnswer + ' wrong. ' + ' Press the button to try again');
		rightAnswer = 0;
		wrongAnswer = 0;
		amountOfGuesses = 0;
		arrayOfRightAnswer.length = 0; // rensar array med rätt svar
		arrayOfWrongAnswers.length = 0; // rensar array med fel svar
		studentsCopy = [...students]; // gör så att den är full igen med alla namnen
	};

	random(studentsCopy);
	newQuestion();
});

