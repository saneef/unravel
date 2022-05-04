const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const resolveUrl = async (url) => {
  try {
    const res = await fetch(url);
    return res.url;
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = {
  resolveUrl,
};
