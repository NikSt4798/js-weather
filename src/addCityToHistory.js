import { getWeatherByCity } from "./getWeatherByCity.js";
import { showCityWeather } from "./showCityWeather.js";

export function addCityToHistory(city) {
  const historyDiv = document.querySelector(".history");

  const paragraphs = historyDiv.querySelectorAll("p");

  let hasThisCity = false;

  paragraphs.forEach((element) => {
    if (element.innerText === city) {
      hasThisCity = true;
      return;
    }
  });

  if (hasThisCity) return;

  const p = document.createElement("p");
  p.innerText = city;

  p.addEventListener("click", async function () {
    const weather = await getWeatherByCity(this.innerText);
    await showCityWeather(weather);
  });

  historyDiv.insertBefore(p, paragraphs[0]);

  if (paragraphs.length >= 10) {
    paragraphs[paragraphs.length - 1].remove();
  }
}
