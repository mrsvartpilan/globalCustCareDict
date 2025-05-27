import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Company } from '../types';

interface SearchBarProps {
  companies: Company[];
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ companies, onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const filteredCompanies = companies
        .filter(company => 
          company.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredCompanies);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query, companies]);

  useEffect(() => {
    // Close suggestions on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  const selectSuggestion = (companyName: string) => {
    setQuery(companyName);
    onSearch(companyName);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a company..."
          className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border-2 border-gray-300 
                    focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200
                    dark:bg-gray-800 dark:border-gray-700 dark:text-white
                    dark:focus:border-blue-400 dark:focus:ring-blue-800
                    transition-all duration-200"
        />
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
        {query && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg 
                      shadow-lg border border-gray-300 dark:border-gray-700 overflow-hidden">
          <ul>
            {suggestions.map((company) => (
              <li 
                key={company.id} 
                onClick={() => selectSuggestion(company.name)}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                         cursor-pointer transition-colors duration-150
                         text-gray-800 dark:text-gray-200"
              >
                {company.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;