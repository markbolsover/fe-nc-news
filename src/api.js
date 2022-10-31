import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mb-news-api.herokuapp.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};
