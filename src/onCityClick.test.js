import { onCityClick } from "./onCityClick";
import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";

jest.mock("./getWeatherByCity", () => ({
  getWeatherByCity: jest.fn((cityName) => ({ cityName: cityName })),
}));

jest.mock("./showCityWeather", () => ({
  showCityWeather: jest.fn(),
}));

describe("It should show weather for clicked city", () => {
  it("should show weather by clicking on city", async () => {
    const mockElement = {
      target: {
        tagName: "P",
        innerText: "Moscow",
      },
    };

    await onCityClick(mockElement);

    expect(getWeatherByCity).toBeCalled();
    expect(showCityWeather).toBeCalledWith({ cityName: "Moscow" });
  });
});
