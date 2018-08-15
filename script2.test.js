const fetch = require("node-fetch");
const swapi = require("./script2");

it("call swapi to get people swapin with promise", () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it("call swapi to get people with a AsynAwait", () => {
  expect.assertions(2);
  return swapi.getPeopleAsync(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
