const googleSearch = require("./script");

dbMock = ["dog.com", "disney.com", "dogpictures.com", "cheesepuff.com"];

it("Searching Google", () => {
    expect(googleSearch(dbMock, "test")).toEqual([]);
  expect(googleSearch(dbMock, "dog")).toEqual(["dog.com", "dogpictures.com"]);
});
