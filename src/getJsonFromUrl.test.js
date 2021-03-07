import { getJsonFromUrl } from "./getJsonFromUrl";

const result = { longitude: 1, latitude: 2 };
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(result),
  })
);

describe("It should return json object from given url", () => {
  it(`calls fetch two times and returns object`, async () => {
    const data = await getJsonFromUrl("https://google.com");
    expect(data).toEqual(result);
  });
});
