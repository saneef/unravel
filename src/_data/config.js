module.exports = {
  title: "Unravel URL",
  description: "Gives you orignal URL from shortened or tracking URLs.",
  production: process.env.NODE_ENV === "production",
  now: new Date().toISOString(),
  serverless: process.env.ELEVENTY_SERVERLESS,
};
