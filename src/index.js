import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";
import { getLocalWeather } from "./getLocalWeather";
import { createIndex } from "./createIndex";

(async function () {
  createIndex();

  const localWeather = await getLocalWeather();

  await showCityWeather(localWeather);

  const cityButton = document.querySelector("#submit");

  cityButton.addEventListener("click", async () => {
    const cityInput = document.querySelector(".city");
    const weather = await getWeatherByCity(cityInput.value);
    await showCityWeather(weather);
  });
})();
