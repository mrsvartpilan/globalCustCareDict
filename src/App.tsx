import React, { useState, useEffect } from 'react';
import { companies } from './data/companies';
import { FilterOption, SortOption } from './types';
import { filterCompanies, getUniqueIndustries } from './utils/filterUtils';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterSection from './components/FilterSection';
import CompanyList from './components/CompanyList';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState<FilterOption>('all');
  const [sortOption, setSortOption] = useState<SortOption>('name');
  const [loading, setLoading] = useState(true);
  
  const industries = getUniqueIndustries(companies);
  
  const filteredCompanies = filterCompanies(
    companies,
    searchQuery,
    filterOption,
    sortOption
  );
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Reset to default filter when searching
    if (query && filterOption !== 'all') {
      setFilterOption('all');
    }
  };
  
  const handleFilterChange = (filter: FilterOption) => {
    setFilterOption(filter);
  };
  
  const handleSortChange = (sort: SortOption) => {
    setSortOption(sort);
  };
  
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4">
            <SearchBar companies={companies} onSearch={handleSearch} />
            
            <FilterSection 
              industries={industries} 
              selectedFilter={filterOption}
              onFilterChange={handleFilterChange}
              sortBy={sortOption}
              onSortChange={handleSortChange}
            />
            
            <CompanyList 
              companies={filteredCompanies} 
              loading={loading} 
            />
          </div>
        </main>
        
        <footer className="py-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
            Global Customer Care Directory &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;