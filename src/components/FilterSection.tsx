import React from 'react';
import { FilterOption, Industry, SortOption } from '../types';

interface FilterSectionProps {
  industries: Industry[];
  selectedFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  industries,
  selectedFilter,
  onFilterChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange('all')}
              className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
                ${selectedFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              All
            </button>
            
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => onFilterChange(industry)}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
                  ${selectedFilter === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {industry}
              </button>
            ))}
          </div>
          
          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-4">Support hours:</h2>
          <div className="flex flex-wrap gap-2">
            {['24/7', 'Business Hours', 'Limited'].map((hours) => (
              <button
                key={hours}
                onClick={() => onFilterChange(hours as FilterOption)}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
                  ${selectedFilter === hours
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {hours}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</h2>
          <div className="flex gap-2">
            <button
              onClick={() => onSortChange('name')}
              className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
                ${sortBy === 'name'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              Name
            </button>
            <button
              onClick={() => onSortChange('industry')}
              className={`px-3 py-1 text-sm rounded-full transition-colors duration-200
                ${sortBy === 'industry'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              Industry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;