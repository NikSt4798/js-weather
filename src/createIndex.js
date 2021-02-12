export function createIndex() {
  const weather = document.createElement("div");
  weather.className = "weather";
  document.body.appendChild(weather);

  const map = document.createElement("div");
  map.className = "map";
  document.body.appendChild(map);

  const history = document.createElement("div");
  history.className = "history";
  document.body.appendChild(history);

  const favicon = document.createElement("link");
  favicon.id = "favicon";
  document.head.appendChild(favicon);
}
