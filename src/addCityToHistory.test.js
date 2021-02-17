import { addCityToHistory, onCityClick } from "./addCityToHistory";

const utils1 = require(`./getWeatherByCity`);
utils1.getWeatherByCity = jest.fn();

const utils2 = require("./showCityWeather");
utils2.showCityWeather = jest.fn();

describe("Add new city to history", () => {
  const Cities = [
    "Moscow",
    "London",
    "Paris",
    "Berlin",
    "Saint Petersburg",
    "Kurgan",
    "New York",
    "Los Angeles",
    "Novgorod",
    "Sidney",
    "Tokyo",
  ];

  beforeEach(() => {
    const div = document.createElement("div");
    div.className = "history";
    document.body.appendChild(div);
  });

  Cities.forEach((cityName) => {
    it(`should add ${cityName}`, () => {
      addCityToHistory(cityName);

      const paragraphs = document.querySelectorAll("p");

      expect(paragraphs.item(cityName)).not.toBeNull();
    });
  });

  it("should save up to 10 cities", () => {
    Cities.forEach(() => {
      const paragraphs = document.querySelectorAll("p");

      expect(paragraphs.length).toBe(10);
    });
  });

  it("should show weather by clicking on city", async () => {
    await onCityClick();

    expect(utils1.getWeatherByCity).toBeCalled();
    expect(utils2.showCityWeather).toBeCalled();
  });
});
