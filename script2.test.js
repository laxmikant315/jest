const fetch = require("node-fetch");
const swapi = require("./script2");
it("Async Methods", () => {
  expect.assertions(2);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(9);
  });
});

it("getPeople return cout and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4.5, 6]
        })
    })
  );
  expect.assertions(4);
  return swapi.getPeople(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
