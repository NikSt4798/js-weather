export async function getWeatherByCity(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  const response = await fetch(url);
  const json = await response.json();

  return json;
}
