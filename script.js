'use strict';






const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '').trim();

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if ( personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else  {
			console.log('Err');
		}
	},
	whiteYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');

			if(genres === '' || genres == null) {
				console.log('Вы ввели некорректные данные или не ввели вообще');
			}
			personalMovieDB.genres[i-1]  = genres;
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;

		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	}
};






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

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим!');
// }

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// console.log( 5 === 5 && 3 > 1 );


// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// } else {
// 	console.log('NO');
// }
// console.log(3 && 2);



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

// let resultStar = '';
// const lengthStar = 7;

// for (let i = 1; i < lengthStar; i++) {

// 	for (let j = 0; j < i; j++) {
// 		resultStar += '*';
// 	}
// 	resultStar += '\n';

// }
// console.log(resultStar);


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) break first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }


// const arrayOfNumbers = [];

// Пишем решение вот тут
    
// for (let i = 5; i < 11; i++) {
// 	arrayOfNumbers[i - 5] = i;
 
    
// Не трогаем
// console.log(arrayOfNumbers[0]); 


// var i = 1;

// while (i < 6) {
// 	if (i == 3) {
// 		break;
// 	}
// 	i++;
// }

// console.log(i + 2);

// i = 0;
// while (i < 5) {
// 	i++;
// 	if (i === 3) {
// 		continue;
// 	}
// 	console.log(i);
// }

// const lines = 10;
// let results = '';

// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		results += ' ';
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		results += '*';
// 	}
// 	results += '\n';
// }

// console.log(results);







// function calc (a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 7));


// function ret() {
// 	let num = 50;
// 	return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
// 	console.log('Hello');
// };

// logger();

// const usdCurr = 28;
// const discount = 0.9;


// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// const strng = 'test';
// const arr = [1, 2, 4];

// console.log(arr.length);
// console.log(strng.toLocaleUpperCase());

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';

// console.log(logg.slice(0, -5));
// console.log(logg.substring(0, 6));

// const num = 12.5;
// console.log(Math.round(num));

// const test = '12.6px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function fib(num) {
    
// 	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
// 		return '';
// 	}

// 	let result = '';
// 	let first = 0;
// 	let second = 1;

// 	for (let i = 0; i < num; i++) {
// 		if (i + 1 === num) {
// 			result += `${first}`;
        
// 		} else {
// 			result += `${first} `;
// 		}

// 		let third = first + second;
// 		first = second;
// 		second = third;
// 	}

// 	return console.log(result);
// }

// fib(9);

// function first() {
// 	setTimeout(function () {
// 		console.log(1);
// 	}, 500);
// }

// first();

// function learnJS (lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// function done () {
// 	console.log('Я прошел этот урок');
// }

// learnJS('Java Script', done);

// Обьекты

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	}
// };

// console.log(Object.keys(options).length);
// console.log(options.name);
// delete options.name;
// console.log(options);


// let counter = 0;
// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
	
// }
// console.log(counter);


// const arriv = [1, 2, 3, 4, 8];

// arriv.forEach(function(item, i, arriv) {
// 	console.log(`${i}: ${item} внутри массива ${arriv}`);
// });

// arriv.pop();
// arriv.push(10);
// console.log(arriv);

// for (let i = 0; i < arriv.length; i++) {
// 	console.log(arriv[i]);
// }
// for (let value of arriv) {
// 	console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join(';'));

// const arr = [2, 444, 15, 35, 88];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }


// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 4,
// 	c: {
// 		x: 6,
// 		y: 3
// 	}
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[2] = 'kslkdngsldkgsl';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log (a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];
// log (...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// console.log(newArray);

// const q = {
// 	one: 1,
// 	two: 2,
// 	three: {
// 		four: 4
// 	}
// };

// const newObj = {...q};
// console.log(newObj);



// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
// 	let str = '';
// 	arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

// 	arr.forEach(function(curr) {
// 		if (curr !== missingCurr) {
// 			str += `${curr}\n`;
// 		}
// 	});

// Или
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === missingCurr) {
//         continue;
//     }
//     str += `${arr[i]}\n`;
// }

// 	return str;
// }



// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));



// let i = 2;

// while (i <= 16) {
// 	if (i % 2 === 0) {
// 		i++;
// 		continue;
		
// 	}
// 	else {
// 		console.log(i);
// 		i++;
// 	}
	
// }



// let newArr = [3, 'jfndjfg', 7, 8];
// let result = [];

// for (let i = 1; i <= newArr.length; i++) {
//  result[i - 1] = newArr[newArr.length - i]
// }

// console.log(result);