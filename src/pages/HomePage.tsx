import React, { useState, useEffect } from "react";
import { fetchGuardianArticles, fetchNewsAPIArticles, fetchOpenNewsArticles } from "../services/api";
import NewsFilters from "../components/Filters";
import ArticleCard from "../components/ArticleCard";

const HomePage: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [filters, setFilters] = useState({
        dateFrom: "",
        dateTo: "",
        category: "",
        sectionId: "",
        source: "guardian",
    });
    
    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let data = [];
                if (filters?.source === "guardian") {
                    data = await fetchGuardianArticles(filters);
                } else if (filters?.source === "newsapi") {
                    data = await fetchNewsAPIArticles(filters);
                } else if (filters?.source === "opennews") {
                    data = await fetchOpenNewsArticles(filters);
                }
                setArticles(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
    }, [filters]);

    return (
        <div>
            <h1>News Feed</h1>
            <NewsFilters filters={filters} onFilterChange={handleFilterChange}/>
            <div>
                {articles.length > 0 ? (
                    articles.map((article: any, index: number) => (
                        <ArticleCard
                            key={index}
                            title={article.webTitle || article.title}
                            description={article.sectionName || article.description}
                            source={filters.source}
                            url={article.webUrl || article.url}
                        />
                    ))
                    
                ) : (
                    <p>no news found</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
