import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mb-news-api.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  let queryString = "/articles";
  if (topic) {
    queryString += `?topic=${topic}`;
  }
  return newsApi.get(queryString).then((res) => {
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
  return newsApi.patch(`/articles/${id}`, { inc_votes: votes });
};

export const fetchCommentsById = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const addComment = (id, commentUsername, commentBody) => {
  return newsApi.post(`/articles/${id}/comments`, {
    username: commentUsername,
    body: commentBody,
  });
};

export const fetchUsers = () => {
  return newsApi.get("/users").then((res) => {
    return res.data.users;
  });
};
