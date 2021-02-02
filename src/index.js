// my key : 458b6f24d9bec1db57c2f337dc35dbcc

(async function () {
  const localWeather = await getLocalWeather();

  await showCityWeather(localWeather);

  const cityButton = document.querySelector("#submit");
  // console.log(cityButton);

  cityButton.addEventListener("click", async () => {
    const cityInput = document.querySelector(".city");
    const weather = await getWeatherByCity(cityInput.value);
    await showCityWeather(weather);
  });
})();

export async function showCityWeather(cityWeather) {
  const weatherDiv = document.querySelector(".weather");

  weatherDiv.innerHTML = "";
  const cityName = document.createElement("p");
  cityName.innerText = `Showing weather for ${cityWeather.name}`;

  // console.log(cityName);
  weatherDiv.appendChild(cityName);

  const weather = document.createElement("p");
  weather.innerText = `Current weather is ${cityWeather.main.temp} degrees of Celcium`;
  // console.log(weather);
  weatherDiv.appendChild(weather);

  const img = document.createElement("img");
  const weatherCode = cityWeather.weather[0].icon;
  img.src = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  // console.log(img);
  weatherDiv.appendChild(img);

  const favicon = document.querySelector("#favicon");
  favicon.href = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;

  const mapDiv = document.querySelector(".map");
  mapDiv.innerHTML = "";

  const map = document.createElement("img");
  // map.src = `https://maps.googleapis.com/maps/api/staticmap?center=${cityWeather.coord.lon},${cityWeather.coord.lat}&size=400x400&key=AIzaSyAv6jVv90NOlVEolIKSNal9E0IKI9npdsU`;
  map.src = `https://static-maps.yandex.ru/1.x/?ll=${cityWeather.coord.lon},${cityWeather.coord.lat}&size=450,450&z=11&l=map`;
  // const response = await fetch(`http://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=400x50&key=AIzaSyCi3T9UCwlJuN0wTP4nKCspoG-oekc0vEg`);
  // console.log(map);
  mapDiv.appendChild(map);
}

export async function getWeatherByCity(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  let response = await fetch(url);
  let json = await response.json();

  // console.log(json);
  return json;
}

export async function getLocalWeather() {
  let url = "https://get.geojs.io/v1/ip/geo.json";
  let response = await fetch(url);
  let json = await response.json();
  // console.log(json);

  const lat = json.latitude;
  const lon = json.longitude;
  url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  response = await fetch(url);
  json = await response.json();

  // console.log(json);
  return json;
}
