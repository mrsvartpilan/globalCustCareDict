import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Globe, Clock, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const getIndustryColor = (industry: string): string => {
    const colorMap: Record<string, string> = {
      'Technology': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Banking': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Retail': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Healthcare': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Telecommunications': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Travel': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'Food & Beverage': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Entertainment': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    };
    
    return colorMap[industry] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const getSupportHoursColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      '24/7': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Business Hours': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Limited': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    };
    
    return colorMap[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden
                transition-all duration-300 hover:shadow-lg
                border border-gray-200 dark:border-gray-700
                ${expanded ? 'transform-gpu scale-[1.02]' : ''}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h2>
              <div className="flex items-center mt-1 space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getIndustryColor(company.industry)}`}>
                  <Building className="w-3 h-3 mr-1" />
                  {company.industry}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSupportHoursColor(company.supportHours.type)}`}>
                  <Clock className="w-3 h-3 mr-1" />
                  {company.supportHours.type}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={toggleExpanded}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={expanded ? "Show less" : "Show more"}
          >
            {expanded ? (
              <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </div>
        
        <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 ${expanded ? '' : 'hidden md:grid'}`}>
          <a 
            href={`tel:${company.phoneNumber}`}
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Phone className="h-4 w-4" />
            <span>{company.phoneNumber}</span>
          </a>
          
          <a 
            href={`mailto:${company.email}`}
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Mail className="h-4 w-4" />
            <span className="truncate">{company.email}</span>
          </a>
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {company.description}
            </p>
            
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Support Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {company.supportHours.details}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {company.chatUrl && (
                <a 
                  href={company.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                           shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
                           hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <MessageSquare className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Live Chat
                </a>
              )}
              
              {company.supportPortalUrl && (
                <a 
                  href={company.supportPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                           shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
                           hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <Globe className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Support Portal
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;