const fetch = require("node-fetch");

async function resolveUrl(url) {
  try {
    const res = await fetch(url);
    return res.url;
  } catch (error) {
    return;
  }
}

function parseUrlEncodedUrl(url) {
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

  return urls[0];
}

module.exports = {
  resolveUrl,
  parseUrlEncodedUrl,
};
