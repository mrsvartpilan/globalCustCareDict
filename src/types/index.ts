export interface Company {
  id: string;
  name: string;
  industry: Industry;
  logo: string;
  phoneNumber: string;
  email: string;
  chatUrl?: string;
  supportPortalUrl?: string;
  supportHours: SupportHours;
  description: string;
}

export type Industry = 
  | 'Technology'
  | 'Banking'
  | 'Retail'
  | 'Healthcare'
  | 'Telecommunications'
  | 'Travel'
  | 'Food & Beverage'
  | 'Entertainment';

export interface SupportHours {
  type: '24/7' | 'Business Hours' | 'Limited';
  details: string;
}

export type SortOption = 'name' | 'industry';
export type FilterOption = Industry | 'all' | '24/7' | 'Business Hours' | 'Limited';