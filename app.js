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

studentsCopy = [...students];
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

let random = (a) => {
	for (let i = a.length -1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
};

random(studentsCopy);
// get a new student image
const newQuestion = () => {
	showImageEl.setAttribute('src', studentsCopy[0].image);
	const answersEl = [studentsCopy[0], students[1], students[2], students[3]];

	// console.log(answersEl);

	correctStudent = studentsCopy[0];
	random(answersEl);
	console.log(correctStudent);
	
	button1.setAttribute('data-user', answersEl[0].name);
	button2.setAttribute('data-user', answersEl[1].name);
	button3.setAttribute('data-user', answersEl[2].name);
	button4.setAttribute('data-user', answersEl[3].name);

	button1.innerHTML = answersEl[0].name;
	button2.innerHTML = answersEl[1].name;
	button3.innerHTML = answersEl[2].name;
	button4.innerHTML = answersEl[3].name;

	studentsCopy.shift();
};
newQuestion();

myButtons.addEventListener('click', (e) => {
	amountOfGuesses++;
	// console.log(e);
	// console.log(e.target.dataset.user);
	if (e.target.dataset.user === studentsCopy[0].name) {
		rightAnswer++;
		arrayOfRightAnswer.push(studentsCopy[0].name);
	} else {
		wrongAnswer++;
		arrayOfWrongAnswers.push(e.target.dataset.user);
	}

	random(students);
	newQuestion();

	if (studentsCopy.length === 0) {
		alert('You made ' + amountOfGuesses + ' guesses and got ' + rightAnswer + ' correct and got ' + wrongAnswer + ' wrong');
		rightAnswer = 0;
		wrongAnswer = 0;
		amountOfGuesses = 0;
	};
});
console.log(amountOfGuesses);
console.log(arrayOfWrongAnswers);
console.log(arrayOfRightAnswer);
