import React from "react";
interface FiltersProps {
    filters: {
        dateFrom: string;
        dateTo: string;
        category: string;
        source: string;
        sectionId: string;
    };
    onFilterChange: (newFilters: {
        dateFrom: string;
        dateTo: string;
        category: string;
        source: string;
        sectionId: string;
    }) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "10px 0" }}>
            <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    Date From:
                    <input
                        type="date"
                        name="dateFrom"
                        value={filters.dateFrom}
                        onChange={handleInputChange}
                        style={{ display: "block", width: "95%", padding: "8px", marginTop: "4px" }}
                    />
                </label>
            </div>
            <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    Date To:
                    <input
                        type="date"
                        name="dateTo"
                        value={filters.dateTo}
                        onChange={handleInputChange}
                        style={{ display: "block", width: "95%", padding: "8px", marginTop: "4px" }}
                    />
                </label>
            </div>
            <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    Source:
                    <select
                        name="source"
                        value={filters.source}
                        onChange={handleSelectChange}
                        style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
                    >
                        <option value="guardian">The Guardian</option>
                        <option value="newsapi">NewsAPI</option>
                        <option value="opennews">OpenNews</option>
                    </select>
                </label>
            </div>
            <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>
                    Category:
                    <select
                        name="sectionId"
                        value={filters.sectionId}
                        onChange={handleSelectChange}
                        style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
                    >
                        <option value="us-news">US News</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                        <option value="politics">Politics</option>
                    </select>
                </label>
            </div>
        </div>

    );
};

export default Filters;
