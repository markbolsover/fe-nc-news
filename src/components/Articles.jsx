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
                const filteredArticles = articles.filter(article => article.topic == topic)
                setArticles(filteredArticles);
                setIsLoading(false);
            } else {
                setArticles(articles);
                setIsLoading(false);
            }
        });
    }, [topic]);
    
    if (isLoading) return <h2 className="loading">LOADING</h2>
    else return (
     <section className="articles-container">
                {articles.map(({author, title, article_id, topic}) => {
                    return <ArticleCard 
                        key={article_id} 
                        author={author} 
                        title={title}
                        topic={topic}
                        />
                })}
     </section>   
    )
};

export default Articles;