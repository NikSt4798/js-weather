import { createIndex } from "./createIndex";
import { showCityWeather } from "./showCityWeather";
import { addCityToHistory } from "./addCityToHistory";
import { createHistory } from "./createHistory";

jest.mock("./addCityToHistory", () => ({
  addCityToHistory: jest.fn(),
}));

const cityJson = {
  name: "Moscow",
  main: {
    temp: 20,
  },
  coord: {
    lon: 1,
    lat: 1,
  },
  weather: [
    {
      icon: null,
    },
  ],
};

describe("Show city weather", () => {
  beforeEach(() => {
    createIndex();
    createHistory();
  });

  it("should inform about city", () => {
    showCityWeather(cityJson);

    expect(document.querySelectorAll("p")[0].innerText).toBe(
      `Showing weather for ${cityJson.name}`
    );
  });

  it("should inform about temperature", () => {
    showCityWeather(cityJson);

    expect(document.querySelectorAll("p")[1].innerText).toBe(
      `Current weather is ${cityJson.main.temp} degrees of Celcium`
    );
  });

  it("should add city to history", () => {
    showCityWeather(cityJson);

    expect(addCityToHistory).toBeCalled();
  });

  it("should add city to local storage", () => {
    showCityWeather(cityJson);

    const history = JSON.parse(localStorage.getItem("history"));

    expect(history.includes(cityJson.name)).toBeTruthy();
  });

  it("should add city to local storage once", () => {
    showCityWeather(cityJson);
    showCityWeather(cityJson);

    const history = JSON.parse(localStorage.getItem("history"));
    delete history[history.indexOf(cityJson.name)];

    expect(history.includes(cityJson.name)).toBeFalsy();
  });
});
