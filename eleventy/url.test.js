const { resolveUrl, parseUrlEncodedUrl } = require("./url.js");

describe("URL resolution", () => {
  it("should resolve and return a URL string", async () => {
    const url = "https://example.com/";
    const result = await resolveUrl(url);
    expect(result).toBe(url);
  });

  it("should return null for invalid URL", async () => {
    const url = "https://unravel-non-existant-url.com/";
    const result = await resolveUrl(url);
    expect(result).toBeUndefined();
  });
});

describe("Parsing encoded URL", () => {
  it("should return URL when encoded URL is present", () => {
    const url = "http://example.com/";
    expect(
      parseUrlEncodedUrl(
        `https://trackingdomain.com/?to=${encodeURIComponent(url)}`
      )
    ).toBe(url);

    expect(
      parseUrlEncodedUrl(
        `https://trackingdomain.com/?to=${encodeURIComponent(
          url
        )}&utm_source=abcd`
      )
    ).toBe(url);

    expect(
      parseUrlEncodedUrl(
        `https://trackingdomain.com/${encodeURIComponent(url)}/abcd`
      )
    ).toBe(url);
  });

  it("should return null when encoded URL is not present", () => {
    expect(parseUrlEncodedUrl(`https://trackingdomain.com/`)).toBeUndefined();
  });
});
