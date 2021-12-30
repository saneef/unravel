import fetch from "node-fetch";

export const resolveUrl = async (url) => {
  try {
    const res = await fetch(url);
    return res.url;
  } catch (error) {
    console.log(error);
  }
};
