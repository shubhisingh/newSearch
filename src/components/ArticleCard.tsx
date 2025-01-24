import React from "react";

interface ArticleCardProps {
    title: string;
    description: string;
    source: string;
    url: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, source, url }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
                maxWidth: "400px",
                margin:"10px"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
        >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem", color: "#333" }}>{title}</h3>
            <p style={{ margin: "0 0 1rem 0", fontSize: "1rem", color: "#555" }}>{description}</p>
            <small style={{ display: "block", marginBottom: "0.5rem", color: "#777" }}>Source: {source}</small>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    textDecoration: "none",
                    color: "#007BFF",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                }}
            >
                For more details click here 
            </a>
        </div>
    );
};


export default ArticleCard;
