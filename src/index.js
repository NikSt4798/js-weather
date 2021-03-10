import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";
import { getLocalWeather } from "./getLocalWeather";
import { createHistory } from "./createHistory";
import { onCityClick } from "./onCityClick";

(async function () {
  createHistory();

  const historyDiv = document.querySelector(".history");

  historyDiv.addEventListener("click", onCityClick);

  const localWeather = await getLocalWeather();

  await showCityWeather(localWeather);

  const cityButton = document.querySelector("#submit");

  cityButton.addEventListener("click", async () => {
    const cityInput = document.querySelector(".city");
    if (cityInput.value == "") return;
    const weather = await getWeatherByCity(cityInput.value);
    await showCityWeather(weather);
    cityInput.value = "";
  });
})();
