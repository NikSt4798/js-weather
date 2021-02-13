import { getWeatherByCity } from "./getWeatherByCity.js";
import { showCityWeather } from "./showCityWeather.js";
import { getLocalWeather } from "./getLocalWeather.js";
import { createIndex } from "./createIndex.js";

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
