import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";

export async function onCityClick(event) {
  const target = event.target;
  if (target.tagName != "P") return;

  const weather = await getWeatherByCity(target.innerText);
  await showCityWeather(weather);
}
