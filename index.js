const request = require('request');
const argv = require('yargs').argv;

let apiKey = '23d9f407cf991cc5499949e5d1e7f7cf';
let city = argv.c || 'towson';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body){
	if(err){
		console.log('error:', error);
	}
	else{
		let weather = JSON.parse(body);
		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});
