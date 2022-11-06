const { resolveUrl, parseUrlEncodedUrl, tidyUrl } = require("./url.js");

describe("URL resolution", () => {
  it("should resolve and return a URL string", async () => {
    const url = "https://example.com/";
    const result = await resolveUrl(url);
    expect(result).toBe(url);
  });

  it("should return undefined for invalid URL", async () => {
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

  it("should return undefined when encoded URL is not present", () => {
    expect(parseUrlEncodedUrl(`https://trackingdomain.com/`)).toBeUndefined();
  });
});

describe("Tidy URL", () => {
  it("should return URL with tracking parameters", () => {
    const dirtyUrl =
      "https://www.amazon.com/Alexander-Theatre-Sessions-Poets-Fall/dp/B08NT852YT/ref=sr_1_1?dchild=1&keywords=Poets+of+the+fall&qid=1621684985&sr=8-1";
    expect(tidyUrl(dirtyUrl)).toBe(
      "https://www.amazon.com/Alexander-Theatre-Sessions-Poets-Fall/dp/B08NT852YT"
    );
  });

  it("should return the string if is not a valid URL", () => {
    const dirtyUrl = "not a URL";
    expect(tidyUrl(dirtyUrl)).toBe(dirtyUrl);
  });
});
