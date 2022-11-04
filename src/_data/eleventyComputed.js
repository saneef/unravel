const { resolveUrl, parseUrlEncodedUrl } = require("../../eleventy/url.js");
const debug = require("debug")("eleventyComputed");

async function createUrlResult(source, target, status = "ok") {
  const truncateUrl = (await import("truncate-url")).default;
  debug({ source, target, status });
  const formattedSource = source != null ? truncateUrl(source, 30) : undefined;
  const formattedTarget = target != null ? truncateUrl(target, 30) : undefined;
  debug({ formattedSource, formattedTarget });
  return {
    source,
    target,
    status,
    formattedSource,
    formattedTarget,
  };
}

module.exports = {
  async resolvedUrl(data) {
    const url = data?.eleventy?.serverless?.query?.url;

    if (!url) {
      debug("No Source URL provided");
      return;
    }

    debug("Source URL", url);

    const encodedUrl = parseUrlEncodedUrl(url);
    if (encodedUrl) return createUrlResult(url, encodedUrl, "ok");

    const resolvedUrl = await resolveUrl(url);
    if (resolvedUrl) return createUrlResult(url, resolvedUrl, "ok");

    return createUrlResult(url, null, "error");
  },
};
