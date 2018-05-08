/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class WetherApi {
    static loadWeather(city, country) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let info = JSON.parse(xhttp.responseText);
                document.getElementById("temp").innerHTML = info.main.temp;
                document.getElementById("humidity").innerHTML = info.main.humidity;
                document.getElementById("pressure").innerHTML = info.main.pressure;
            }
        };
        xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=209a1816d8e3783a3c3b5e8ec118424f", true);
        xhttp.send();
    }
}

function getWeather() {
    let city = document.getElementById("city").value + "";
    let country = document.getElementById("country").value + "";
    if (country != null && city != null) {
        WetherApi.loadWeather(city, country);
    }
}