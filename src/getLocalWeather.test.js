import { getLocalWeather } from "./getLocalWeather";

const result = { longitude: 1, latitude: 2 };
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(result),
  })
);

describe("It sould show local weather", () => {
  it(`calls function two times`, async () => {
    const data = await getLocalWeather();
    expect(data).toEqual(result);
  });
});
