import { Company, FilterOption, SortOption } from '../types';

export const filterCompanies = (
  companies: Company[],
  searchQuery: string,
  filterOption: FilterOption,
  sortOption: SortOption
): Company[] => {
  // First filter by search query
  let filteredCompanies = companies;
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredCompanies = filteredCompanies.filter(company => 
      company.name.toLowerCase().includes(query) ||
      company.industry.toLowerCase().includes(query)
    );
  }
  
  // Then filter by filter option
  if (filterOption !== 'all') {
    // Check if it's an industry filter
    const industryOptions = [
      'Technology', 'Banking', 'Retail', 'Healthcare', 
      'Telecommunications', 'Travel', 'Food & Beverage', 'Entertainment'
    ];
    
    if (industryOptions.includes(filterOption as string)) {
      filteredCompanies = filteredCompanies.filter(company => 
        company.industry === filterOption
      );
    } else {
      // It's a support hours filter
      filteredCompanies = filteredCompanies.filter(company => 
        company.supportHours.type === filterOption
      );
    }
  }
  
  // Finally sort
  return sortCompanies(filteredCompanies, sortOption);
};

const sortCompanies = (companies: Company[], sortOption: SortOption): Company[] => {
  return [...companies].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'industry') {
      return a.industry.localeCompare(b.industry);
    }
    return 0;
  });
};

export const getUniqueIndustries = (companies: Company[]) => {
  const industries = companies.map(company => company.industry);
  return Array.from(new Set(industries));
};