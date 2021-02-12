import { getLocalWeather } from "./getLocalWeather";

global.fetch = require("node-fetch");

const json = { longitude: 1, latitude: 2 };
const utils = require("./getJsonFromUrl");
utils.getJsonFromUrl = jest.fn(() => json);

describe("It sould show local weather", () => {
  it(`calls function two times`, async () => {
    await getLocalWeather();
    expect(utils.getJsonFromUrl).toBeCalledTimes(2);
  });
});
