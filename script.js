function getXHR(){
	var xhrobj;
	if (window.XMLHttpRequest){
		xhrobj = new XMLHttpRequest();
	} else {
		xhrobj = new ActiveXObject('Microsoft.XMLHTTP');
	}
	return xhrobj;
}

var APPID = "c9f2e1479f16b3de3f581fbd78940e33";

var send = document.getElementById('send');

var selectedcity = document.getElementById('selectedcity');
var cloudimg = document.getElementById('cloudimg');
var temp = document.getElementById('temp');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');
var windspeed = document.getElementById('windspeed');
var cloudsall = document.getElementById('cloudsall');

send.addEventListener('click', function () {
	var cityname = document.getElementById('cityname').value;
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=' + APPID;

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){

			var data = JSON.parse(xhr.responseText);

			selectedcity.innerHTML = data.name;
			cloudimg.setAttribute('src', 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
			temp.innerHTML = data.main.temp - 273.15;
			pressure.innerHTML = data.main.pressure;
			humidity.innerHTML = data.main.humidity;
			windspeed.innerHTML = data.wind.speed;
			cloudsall.innerHTML = data.clouds.all;
		}
	}
	xhr.open('GET', url, true);
	xhr.send();
});
