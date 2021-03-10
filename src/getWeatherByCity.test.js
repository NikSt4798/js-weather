import { getWeatherByCity } from "./getWeatherByCity";

const result = { longitude: 1, latitude: 2, cityName: "Moscow" };
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(result),
  })
);

describe("It should return weather by city name ", () => {
  it(`calls fetch a two times`, async () => {
    const data = await getWeatherByCity("Moscow");
    expect(data.cityName).toEqual("Moscow");
  });
});
