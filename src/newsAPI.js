const dotenv = require("dotenv");
dotenv.config({
  path: "/home/adrien/Projects/web-components/web-component-list/.env"
});

const apiKey = process.env.NEWS_API_KEY;
console.log(apiKey);
console.log(apiKey);
const topHeadlinesUrl =
  "https://newsapi.org/v2/everything?q=happiness&from=2019-06-22&sortBy=publishedAt&apiKey=" +
  apiKey;
export { apiKey, topHeadlinesUrl };
