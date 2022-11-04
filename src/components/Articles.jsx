import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const {topic} = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(topic).then((articles) => {
            setArticles(articles);
            setErr(null)
            setIsLoading(false);
        }).catch(() => {
            setErr('there are no articles for this topic');
        })
    }, [topic]);
    
    if (err) return <Error errorMessage={err}/>
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