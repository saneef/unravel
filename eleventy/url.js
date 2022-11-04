const fetch = require("node-fetch");
const debug = require("debug")("url");

async function resolveUrl(url) {
  debug("resolveUrl", url);
  try {
    const res = await fetch(url);
    debug("resolveUrl:resolved", res.url);
    return res.url;
  } catch (error) {
    debug("resolveUrl:error", error);
    return;
  }
}

function parseUrlEncodedUrl(url) {
  debug("parseUrlEncodedUrl", url);
  let str = url?.toLowerCase().replace("%25", "%");
  const urlRegex =
    /(https?:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-]))/gim;

  let segments = [];
  try {
    const url = new URL(str);

    const pathSegments = url.pathname
      .split("/")
      // Path needs decoding
      .map(decodeURIComponent);

    // Search params are already decoded
    let params = Array.from(url.searchParams.values());

    segments = [...pathSegments, ...params];
  } catch (error) {
    return;
  }

  let urls = segments.flatMap((s) => s.match(urlRegex)).filter(Boolean);

  const result = urls[0];
  debug("parseUrlEncodedUrl:result", result);
  return result;
}

module.exports = {
  resolveUrl,
  parseUrlEncodedUrl,
};
