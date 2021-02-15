import { getWeatherByCity } from "./getWeatherByCity.js";
import { showCityWeather } from "./showCityWeather.js";

export function addCityToHistory(city) {
  const historyDiv = document.querySelector(".history");

  const paragraphs = historyDiv.querySelectorAll("p");

  const cityNames = Array.from(paragraphs).map(
    (paragraph) => paragraph.innerText
  );

  if (cityNames.includes(city)) return;

  const paragraph = document.createElement("p");
  paragraph.innerText = city;

  paragraph.addEventListener("click", onCityClick);

  historyDiv.insertBefore(paragraph, paragraphs[0]);

  if (paragraphs.length >= 10) {
    paragraphs[paragraphs.length - 1].remove();
  }
}

export async function onCityClick() {
  const weather = await getWeatherByCity(this.innerText);
  await showCityWeather(weather);
}
