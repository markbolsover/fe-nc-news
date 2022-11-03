import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [noArticles, setNoArticles] = useState(null);
    const {topic} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((articles) => {
            if (topic) {
                const filteredArticles = articles.filter(article => article.topic === topic)
                if (filteredArticles.length === 0) {
                    setNoArticles('there are no articles for this topic')
                } else {
                    setArticles(filteredArticles);
                    setIsLoading(false);
                }
            } else {
                setArticles(articles);
                setNoArticles(null)
                setIsLoading(false);
            }
        });
    }, [topic]);
    
    if (noArticles) return (
        <div className="error">
            <h2>{noArticles}</h2>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
    if (isLoading) return <h2 className="loading">LOADING</h2>
    else return (<section>
            <div className="articles-header">
                <h2>{topic} Articles</h2>
                <p>Click on an article to view</p>
            </div>
            <div className="articles-container">
                        {articles.map(({author, title, article_id, topic, votes}) => {
                            return <ArticleCard 
                                key={article_id} 
                                author={author} 
                                title={title}
                                article_id={article_id}
                                topic={topic}
                                votes={votes}
                                />
                        })}
            </div>
     </section>
    )
};

export default Articles;