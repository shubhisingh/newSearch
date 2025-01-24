import React, { useState, useEffect } from "react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(inputValue);
    };
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            onSearch(inputValue); 
        }, 500);
        return () => clearTimeout(delayDebounce);
    }, [inputValue, onSearch]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleSearchChange}
                placeholder="Search articles"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

