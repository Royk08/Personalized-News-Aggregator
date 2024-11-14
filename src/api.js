import { NEWS_API_KEY } from "./config";

export const getArticles = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${'47cda92a2d90446fb333e04de7b7ff68'}`
  );
  const json = await response.json();
  return json;
};