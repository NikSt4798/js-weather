import { onCityClick } from "./onCityClick";
import * as getWeatherByCityModule from "./getWeatherByCity";
import * as showCityWeatherModule from "./showCityWeather";

jest
  .spyOn(getWeatherByCityModule, "getWeatherByCity")
  .mockImplementation(() => "weather");

jest.spyOn(showCityWeatherModule, "showCityWeather").mockImplementation();

describe("It should show weather for clicked city", () => {
  it("should show weather by clicking on city", async () => {
    await onCityClick();

    expect(getWeatherByCityModule.getWeatherByCity).toBeCalled();
    expect(showCityWeatherModule.showCityWeather).toBeCalledWith("weather");
  });
});
