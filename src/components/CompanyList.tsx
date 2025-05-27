import React from 'react';
import { Company } from '../types';
import CompanyCard from './CompanyCard';

interface CompanyListProps {
  companies: Company[];
  loading?: boolean;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, loading = false }) => {
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden animate-pulse h-48"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
          No companies found matching your search criteria.
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;