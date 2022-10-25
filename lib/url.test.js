const { resolveUrl } = require("./url.js");

it("Resolve and return a URL", async () => {
  const url = "https://example.com/";
  const result = await resolveUrl(url);
  expect(result).toBe(url);
});

it("Return undefined on invalid URL", async () => {
  const url = "https://unravel-non-existant-url.com/";
  const result = await resolveUrl(url);
  expect(result).toBeNull();
});
