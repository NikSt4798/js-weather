const API_KEY = "458b6f24d9bec1db57c2f337dc35dbcc";

export async function getLocalWeather() {
  let json = getJsonFromUrl("https://get.geojs.io/v1/ip/geo.json");

  const lat = json.latitude;
  const lon = json.longitude;

  return await getJsonFromUrl(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
}

export async function getJsonFromUrl(url) {
  const response = await fetch(url);
  return await response.json();
}
