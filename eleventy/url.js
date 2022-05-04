const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

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
