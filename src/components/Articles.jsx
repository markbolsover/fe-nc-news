import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);
    
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