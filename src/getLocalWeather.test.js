import { getLocalWeather } from "./getLocalWeather";

const result = { longitude: 1, latitude: 2 };
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(result),
  })
);

describe("It should show local weather", () => {
  it(`calls fetch two times and returns object`, async () => {
    const data = await getLocalWeather();
    expect(data).toEqual(result);
  });
});
