const { resolveUrl, parseUrlEncodedUrl } = require("../../eleventy/url.js");
module.exports = {
  async resolvedUrl(data) {
    const url = data?.eleventy?.serverless?.query?.url;
    if (!url) return;

    const encodedUrl = parseUrlEncodedUrl(url);
    if (encodedUrl) return encodedUrl;

    return resolveUrl(url);
  },
};
