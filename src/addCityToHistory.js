import { onCityClick } from "./onCityClick";

export function addCityToHistory(city) {
  const historyDiv = document.querySelector(".history");

  historyDiv.addEventListener("click", onCityClick);

  const paragraphs = historyDiv.querySelectorAll("p");

  const cityNames = Array.from(paragraphs).map(
    (paragraph) => paragraph.innerText
  );

  if (cityNames.includes(city)) return;

  const paragraph = document.createElement("p");
  paragraph.innerText = city;

  // paragraph.addEventListener("click", onCityClick);

  historyDiv.insertBefore(paragraph, paragraphs[0]);

  if (paragraphs.length >= 10) {
    paragraphs[paragraphs.length - 1].remove();
  }
}
