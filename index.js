const request = require('request');
const argv = require('yargs').argv
let apiKey = 'my_api_key';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, resp, body) {
  if (err) {
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    console.log(weather);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
