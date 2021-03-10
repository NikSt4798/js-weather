import { addCityToHistory } from "./addCityToHistory";

export function createHistory() {
  let history = localStorage.getItem("history");
  if (history) {
    const array = JSON.parse(history);
    array.forEach((element) => {
      addCityToHistory(element);
    });
  } else {
    history = [];
    localStorage.setItem("history", JSON.stringify(history));
  }
}
