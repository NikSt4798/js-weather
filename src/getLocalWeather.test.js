import { getLocalWeather } from "./getLocalWeather";
import * as getJsonFromUrlModule from "./getJsonFromUrl";

const json = { longitude: 1, latitude: 2 };
jest
  .spyOn(getJsonFromUrlModule, "getJsonFromUrl")
  .mockImplementation(() => json);

describe("It sould show local weather", () => {
  it(`calls function two times`, async () => {
    await getLocalWeather();
    expect(getJsonFromUrlModule.getJsonFromUrl).toBeCalledTimes(2);
  });
});
