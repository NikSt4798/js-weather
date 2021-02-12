import { createIndex } from "./createIndex";
import { showCityWeather } from "./showCityWeather";

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
    const utils = require("./addCityToHistory");
    utils.addCityToHistory = jest.fn();

    showCityWeather(cityJson);

    expect(utils.addCityToHistory).toBeCalled();
  });
});
