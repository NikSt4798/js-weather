export async function getWeatherByCity(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  let response = await fetch(url);
  let json = await response.json();

  return json;
}
