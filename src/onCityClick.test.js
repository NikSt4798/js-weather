import { onCityClick } from "./onCityClick";
import { getWeatherByCity } from "./getWeatherByCity";
import { showCityWeather } from "./showCityWeather";

jest.mock("./getWeatherByCity", () => ({
  getWeatherByCity: jest.fn(() => ({ cityName: "Moscow" })),
}));

jest.mock("./showCityWeather", () => ({
  showCityWeather: jest.fn(),
}));

describe("It should show weather for clicked city", () => {
  it("should show weather by clicking on city", async () => {
    await onCityClick();

    expect(getWeatherByCity).toBeCalled();
    expect(showCityWeather).toBeCalledWith({ cityName: "Moscow" });
  });
});
