export function createIndex() {
  console.log("Creating index");

  const favicon = document.createElement("link");
  favicon.id = "favicon";
  document.head.appendChild(favicon);

  const title = document.createElement("title");
  title.innerText = "Weather";
  document.head.appendChild(title);

  const city = document.createElement("input");
  city.type = "text";
  city.className = "city";
  document.body.appendChild(city);

  const submit = document.createElement("button");
  submit.id = "submit";
  submit.innerText = "Submit";
  document.body.appendChild(submit);

  const weather = document.createElement("div");
  weather.className = "weather";
  document.body.appendChild(weather);

  const map = document.createElement("div");
  map.className = "map";
  document.body.appendChild(map);

  const history = document.createElement("div");
  history.className = "history";
  document.body.appendChild(history);
}
