'use strict';


console.log( NaN && 2 && undefined );


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function whiteYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
	}

}
whiteYourGenres();

// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцениваете фильм?', ''),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = prompt('На сколько оцениваете фильм?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцениваете фильм?', '');

		if (a != null && b != null && a!= '' && b!= '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('err');
			i--;
		}
	}
}
// rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if ( personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else  {
		console.log('Err');
	}
}

// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);



// if (4 === 7) {
// 	console.log('Ok');
// } else {
// 	console.log('error');
// }

// const num = 60; 

// (num === 50) ? console.log('ok!') : console.log('err');

// switch (num) {
// case 49: 
// 	console.log('wrong');
// 	break;
// case 100: 
// 	console.log('wrong');
// 	break;
// case 50: 
// 	console.log('ok');
// 	break;
// default:
// 	console.log('is not definded');
// 	break;

// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('Все сыты!');
} else {
	console.log('Мы уходим!');
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


console.log( 5 === 5 && 3 > 1 );


if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!');
} else {
	console.log('NO');
}
console.log(3 && 2);



// while (num <= 55) {
// 	console.log(num);
// 	num++;
	
// }

// let num = 50;

// do {
// 	console.log(num);
// 	num++;
// }

// while (num < 55);

// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }

// *
// **
// ***
// ****
// *****
// ******

let resultStar = '';
const lengthStar = 7;

for (let i = 1; i < lengthStar; i++) {

	for (let j = 0; j < i; j++) {
		resultStar += '*';
	}
	resultStar += '\n';

}
console.log(resultStar);


first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) break first;
			console.log(`Third level: ${k}`);
		}
	}
}


const arrayOfNumbers = [];

// Пишем решение вот тут
    
for (let i = 5; i < 11; i++) {
	arrayOfNumbers[i - 5] = i;
}  
    
// Не трогаем
console.log(arrayOfNumbers[0]); 


var i = 1;

while (i < 6) {
	if (i == 3) {
		break;
	}
	i++;
}

console.log(i + 2);

i = 0;
while (i < 5) {
	i++;
	if (i === 3) {
		continue;
	}
	console.log(i);
}

const lines = 10;
let results = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		results += ' ';
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		results += '*';
	}
	results += '\n';
}

console.log(results);







// function calc (a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 7));


function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
	console.log('Hello');
};

logger();

const usdCurr = 28;
const discount = 0.9;


function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

const strng = 'test';
const arr = [1, 2, 4];

console.log(arr.length);
console.log(strng.toLocaleUpperCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(0, -5));
console.log(logg.substring(0, 6));

const num = 12.5;
console.log(Math.round(num));

const test = '12.6px';
console.log(parseInt(test));
console.log(parseFloat(test));