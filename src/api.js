import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mb-news-api.herokuapp.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const fetchArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const updateVotes = (id, votes) => {
  return newsApi.patch(`/articles/${id}`, { inc_votes: votes }).then((res) => {
    console.log(res);
  });
};
