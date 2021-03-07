import { addCityToHistory } from "./addCityToHistory";

describe("Add new city to history", () => {
  const cities = [
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
    document.body.innerHTML = "";
    const div = document.createElement("div");
    div.className = "history";
    document.body.appendChild(div);
  });

  cities.forEach((cityName) => {
    it(`should add ${cityName}`, () => {
      addCityToHistory(cityName);

      const paragraphs = document.querySelectorAll("p");

      expect(paragraphs.item(cityName)).not.toBeNull();
    });
  });

  cities.forEach((cityName) => {
    it(`should add ${cityName} once`, () => {
      addCityToHistory(cityName);
      addCityToHistory(cityName);

      const paragraphs = document.querySelectorAll("p");

      expect(paragraphs.length).toBe(1);
    });
  });

  it("should save up to 10 cities", () => {
    cities.forEach((cityName) => {
      addCityToHistory(cityName);
    });

    const paragraphs = document.querySelectorAll("p");

    expect(paragraphs.length).toBe(10);
  });
});
