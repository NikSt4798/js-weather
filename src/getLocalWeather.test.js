import * as module from "./getLocalWeather";

global.fetch = require("node-fetch");

describe("It sould show local weather", () => {
  it("has longitude and latitude", async () => {
    let json = await module.getJsonFromUrl(
      "https://get.geojs.io/v1/ip/geo.json"
    );

    expect(json.hasOwnProperty("longitude")).toBeTruthy();
    expect(json.hasOwnProperty("latitude")).toBeTruthy();
  });

  it(`calls function two times`, async () => {
    jest.spyOn(module, "getJsonFromUrl");
    await module.getLocalWeather();

    expect(module.getJsonFromUrl.mock).toBeTruthy();
    expect(module.getJsonFromUrl).toBeCalledTimes(2);
  });
});
