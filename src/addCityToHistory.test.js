import { addCityToHistory, onCityClick } from "./addCityToHistory";
import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";

jest.fn(getWeatherByCity);
jest.fn(showCityWeather);

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

  it("should show weather by clicking on city", () => {
    onCityClick();

    expect(getWeatherByCity).toBeCalled();
    expect(showCityWeather).toBeCalled();
  });

  afterEach(() => {
    document.InnerHTML = "";
  });
});
