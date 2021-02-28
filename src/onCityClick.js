import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";

export async function onCityClick() {
  const weather = await getWeatherByCity(this.innerText);
  await showCityWeather(weather);
}
