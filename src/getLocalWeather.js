export async function getLocalWeather() {
  let url = "https://get.geojs.io/v1/ip/geo.json";
  let response = await fetch(url);
  let json = await response.json();

  const lat = json.latitude;
  const lon = json.longitude;
  url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  response = await fetch(url);
  json = await response.json();

  return json;
}
