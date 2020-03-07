

// weather api

var originalApi = "https://api.openweathermap.org/data/2.5/weather?q=Pennsylvania&units=imperial&appid=f4cc075ea301646a421c78dc383a795a";

var apiProvider = "openweathermap.org";
var city = "philadelphia";
var units = "imperial";
var appid = "f4cc075ea301646a421c78dc383a795a"

// http://api." + apiProvider +"/data/2.5/weather?q=" + city + "&units=" + units + "&APPID=" + appid

$.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=19446&units=imperial&appid=f4cc075ea301646a421c78dc383a795a", 
function(data){
    console.log(data);

    var location = data.name;
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temp = data.main.temp + "F";
    var feelsLike = "Feels Like: " + data.main.feels_like;

    var lon = "Longitude: " + data.coord.lon;
    var lat = "Latitudde: " + data.coord.lat;

    $('.location').append(location);
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $(".temp").append(temp);
    $('.feelsLike').append(feelsLike);

    $(".lon").append(lon);
    $(".lat").append(lat);
})



// currency api

$.getJSON("http://data.fixer.io/api/latest?access_key=c136a6fbf1861caf57879b4cddaed923",
function(currencyData){
    console.log(currencyData);

    var euroToUsd = 1/currencyData.rates.USD
    var rate = "One USD = " + parseFloat(euroToUsd).toFixed(2) + " EURO";
    $('.rate').append(rate);
})