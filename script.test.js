const search = require("./script");

db = [
  "www.dog.com",
  "www.doglove.com",
  "www.mydogs.com",
  "www.yourdogs.com",
  "www.123.com"
];

describe("search test group", () => {
  it("this is a test ", () => {
    expect("hello").toBe("hello");
  });

  it("is working with a string", () => {
    expect(search("cat", db)).toEqual([]);
    expect(search("dog", db)).toEqual([
      "www.dog.com",
      "www.doglove.com",
      "www.mydogs.com"
    ]);
  });

  it("is working with a number", () => {
    expect(search(1, db)).toEqual(["www.123.com"]);
  });

  it("works with undefined and null", () => {
    expect(search(undefined, db)).toEqual([]);
    expect(search(null, db)).toEqual([]);
  });

  it("return length of 3 ", () => {
    expect(search("com", db).length).toEqual(3);
  });
});
