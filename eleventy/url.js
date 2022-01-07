const fetch = require("node-fetch");

const resolveUrl = async (url) => {
  try {
    const res = await fetch(url);
    return `<a href="${res.url}">🔗 Resolved URL →</a>`;
  } catch (error) {
    console.log(error);
    return `<span class="error">Unable to resolve the URL</span>`;
  }
};

module.exports = {
  resolveUrl,
};
