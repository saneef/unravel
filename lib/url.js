const fetch = require("node-fetch");

const resolveUrl = async (url) => {
  try {
    const res = await fetch(url);
    return res.url;
  } catch (error) {
    return;
  }
};

module.exports = {
  resolveUrl,
};
