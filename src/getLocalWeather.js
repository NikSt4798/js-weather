import { getJsonFromUrl } from "./getJsonFromUrl";

export async function getLocalWeather() {
  const json = await getJsonFromUrl("https://get.geojs.io/v1/ip/geo.json");

  const lat = json.latitude;
  const lon = json.longitude;

  return await getJsonFromUrl(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=458b6f24d9bec1db57c2f337dc35dbcc`
  );
}
