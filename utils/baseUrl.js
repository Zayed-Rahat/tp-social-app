const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://tparty-app.herokuapp.com";

module.exports = baseUrl;
