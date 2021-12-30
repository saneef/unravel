module.exports = {
  production: process.env.NODE_ENV === "production",
  now: new Date().toISOString(),
};
