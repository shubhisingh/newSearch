import React, { useState, useEffect } from "react";
import { fetchGuardianArticles, fetchNewsAPIArticles, fetchOpenNewsArticles } from "../services/api";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ArticleCard from "../components/ArticleCard";

const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filters, setFilters] = useState({
        dateFrom: "",
        dateTo: "",
        category: "",
        sectionId: "",
        source: "newsapi",
    });
    const [articles, setArticles] = useState<any[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<any[]>([]);

    const handleFilterChange = (newFilters: any) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
    };
    useEffect(() => {
        const filtered = articles.filter((article) =>
            (article.webTitle || article.title || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredArticles(filtered);
    }, [searchTerm, articles]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let results = [];
                if (filters.source === "guardian") {
                    results = await fetchGuardianArticles({ ...filters, q: searchTerm });
                } else if (filters.source === "newsapi") {
                    results = await fetchNewsAPIArticles({ ...filters, q: searchTerm });
                } else if (filters.source === "opennews") {
                    results = await fetchOpenNewsArticles({ ...filters, q: searchTerm });
                }
                setArticles(results);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        if (searchTerm.trim() || filters.dateFrom || filters.dateTo) {
            fetchArticles();
        }
    }, [filters.source, filters.dateFrom, filters.dateTo, filters.category, filters.sectionId, searchTerm]);

    return (

        <div style={{ margin: "10px" }}>
            <header style={{ textAlign: "center", marginBottom: "20px" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "10px 0" }}>
                    Explore Articles
                </h1>
            </header>
            <Filters filters={filters} onFilterChange={handleFilterChange} />
            <SearchBar onSearch={(term) => setSearchTerm(term)} />
            <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "16px",
                    justifyItems: "center",
                }}
            >
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article: any, index: number) => (
                        <ArticleCard
                            key={index}
                            title={article.webTitle || article.title}
                            description={article.sectionName || article.description}
                            source={filters.source}
                            url={article.webUrl || article.url}
                        />
                    ))
                ) : (
                    <p>No Data</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
