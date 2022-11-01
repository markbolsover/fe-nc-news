import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {topic} = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((articles) => {
            if (topic) {
                const filteredArticles = articles.filter(article => article.topic === topic)
                setArticles(filteredArticles);
                setIsLoading(false);
            } else {
                setArticles(articles);
                setIsLoading(false);
            }
        });
    }, [topic]);
    
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