import { showCityWeather } from "./index";

describe("Check start function", () => {
  it("Check function", () => {
    expect(typeof showCityWeather).toBe("function");
  });
});
