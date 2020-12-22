// my key : 458b6f24d9bec1db57c2f337dc35dbcc

export async function getWeatherByCity(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  let response = await fetch(url);
  let json = await response.json();

  console.log(json);
  return json;
}

export async function getLocalWeather() {
  let url = "https://get.geojs.io/v1/ip/geo.json";
  let response = await fetch(url);
  let json = await response.json();
  console.log(json);

  const lat = json.latitude;
  const lon = json.longitude;
  url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  response = await fetch(url);
  json = await response.json();

  console.log(json);
  return json;
}

(async function () {
  // const userCity = await getUserCity();
  const currentCityWeather = await getLocalWeather();

  const div = document.querySelector(".weather");

  const cityName = document.createElement("p");
  cityName.innerText = currentCityWeather.name;

  console.log(cityName);
  div.appendChild(cityName);

  const weather = document.createElement("p");
  weather.innerText = currentCityWeather.main.temp;
  console.log(weather);
  div.appendChild(weather);

  const img = document.createElement("img");
  const weatherCode = currentCityWeather.weather[0].icon;
  img.src = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  console.log(img);
  div.appendChild(img);
})();
