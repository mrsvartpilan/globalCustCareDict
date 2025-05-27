import { Company } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Apple',
    industry: 'Technology',
    logo: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-275-2273',
    email: 'support@apple.com',
    chatUrl: 'https://support.apple.com/contact',
    supportPortalUrl: 'https://support.apple.com',
    supportHours: {
      type: '24/7',
      details: 'Available 24 hours a day, 7 days a week'
    },
    description: 'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.'
  },
  {
    id: '2',
    name: 'Amazon',
    industry: 'Retail',
    logo: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-888-280-4331',
    email: 'cs-reply@amazon.com',
    chatUrl: 'https://www.amazon.com/hz/contact-us/foresight/hubgateway',
    supportPortalUrl: 'https://www.amazon.com/gp/help/customer/display.html',
    supportHours: {
      type: '24/7',
      details: 'Available 24 hours a day, 7 days a week'
    },
    description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.'
  },
  {
    id: '3',
    name: 'Bank of America',
    industry: 'Banking',
    logo: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-432-1000',
    email: 'customerservice@bankofamerica.com',
    supportPortalUrl: 'https://www.bankofamerica.com/customer-service/',
    supportHours: {
      type: 'Business Hours',
      details: 'Monday to Friday: 8am - 8pm EST, Saturday: 8am - 5pm EST'
    },
    description: 'Bank of America Corporation is an American multinational investment bank and financial services holding company headquartered in Charlotte, North Carolina.'
  },
  {
    id: '4',
    name: 'Netflix',
    industry: 'Entertainment',
    logo: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-866-579-7172',
    email: 'info@netflix.com',
    chatUrl: 'https://help.netflix.com/en/node/412',
    supportPortalUrl: 'https://help.netflix.com',
    supportHours: {
      type: '24/7',
      details: 'Available 24 hours a day, 7 days a week'
    },
    description: 'Netflix, Inc. is an American subscription streaming service and production company that offers a library of films and television series.'
  },
  {
    id: '5',
    name: 'Verizon',
    industry: 'Telecommunications',
    logo: 'https://images.pexels.com/photos/3850215/pexels-photo-3850215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-922-0204',
    email: 'customerservice@verizon.com',
    chatUrl: 'https://www.verizon.com/support/contact-us/',
    supportPortalUrl: 'https://www.verizon.com/support/',
    supportHours: {
      type: 'Business Hours',
      details: 'Monday to Friday: 8am - 7pm, Saturday: 8am - 5pm (Local Time)'
    },
    description: 'Verizon Communications Inc. is an American multinational telecommunications conglomerate and a corporate component of the Dow Jones Industrial Average.'
  },
  {
    id: '6',
    name: 'Mayo Clinic',
    industry: 'Healthcare',
    logo: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-507-284-2511',
    email: 'patientservices@mayoclinic.org',
    supportPortalUrl: 'https://www.mayoclinic.org/patient-visitor-guide',
    supportHours: {
      type: 'Business Hours',
      details: 'Monday to Friday: 8am - 5pm CST'
    },
    description: 'Mayo Clinic is a nonprofit American academic medical center focused on integrated health care, education, and research.'
  },
  {
    id: '7',
    name: 'Starbucks',
    industry: 'Food & Beverage',
    logo: 'https://images.pexels.com/photos/1162455/pexels-photo-1162455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-782-7282',
    email: 'customercare@starbucks.com',
    chatUrl: 'https://customerservice.starbucks.com/',
    supportPortalUrl: 'https://www.starbucks.com/customer-service',
    supportHours: {
      type: 'Limited',
      details: 'Monday to Friday: 5am - 8pm PST'
    },
    description: 'Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington.'
  },
  {
    id: '8',
    name: 'Delta Air Lines',
    industry: 'Travel',
    logo: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-221-1212',
    email: 'customercare@delta.com',
    chatUrl: 'https://www.delta.com/contactus/pages/voice_and_chat/index.jsp',
    supportPortalUrl: 'https://www.delta.com/us/en/need-help/overview',
    supportHours: {
      type: '24/7',
      details: 'Available 24 hours a day, 7 days a week'
    },
    description: 'Delta Air Lines, Inc. is one of the major airlines of the United States and a legacy carrier. It is headquartered in Atlanta, Georgia.'
  },
  {
    id: '9',
    name: 'Microsoft',
    industry: 'Technology',
    logo: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-642-7676',
    email: 'support@microsoft.com',
    chatUrl: 'https://support.microsoft.com/contactus',
    supportPortalUrl: 'https://support.microsoft.com',
    supportHours: {
      type: '24/7',
      details: 'Available 24 hours a day, 7 days a week'
    },
    description: 'Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.'
  },
  {
    id: '10',
    name: 'Target',
    industry: 'Retail',
    logo: 'https://images.pexels.com/photos/3962293/pexels-photo-3962293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-440-0680',
    email: 'guest.relations@target.com',
    supportPortalUrl: 'https://help.target.com',
    supportHours: {
      type: 'Business Hours',
      details: 'Monday to Friday: 7am - 11pm CST, Saturday to Sunday: 8am - 9pm CST'
    },
    description: 'Target Corporation is an American retail corporation. It is the 8th-largest retailer in the United States, and is a component of the S&P 500 Index.'
  },
  {
    id: '11',
    name: 'CVS Health',
    industry: 'Healthcare',
    logo: 'https://images.pexels.com/photos/139398/pharmacy-51-hospital-512x512-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-800-746-7287',
    email: 'customerservice@cvs.com',
    supportPortalUrl: 'https://www.cvs.com/help',
    supportHours: {
      type: 'Business Hours',
      details: 'Monday to Friday: 8:30am - 7pm EST'
    },
    description: 'CVS Health Corporation is an American healthcare company that owns CVS Pharmacy, a retail pharmacy chain; CVS Caremark, a pharmacy benefits manager; and Aetna, a health insurance provider.'
  },
  {
    id: '12',
    name: 'Disney+',
    industry: 'Entertainment',
    logo: 'https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    phoneNumber: '1-888-905-7888',
    email: 'support@disneyplus.com',
    chatUrl: 'https://help.disneyplus.com/csp',
    supportPortalUrl: 'https://help.disneyplus.com',
    supportHours: {
      type: '24/7',
      details: 'Available 24 hours a day, 7 days a week'
    },
    description: 'Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of The Walt Disney Company.'
  }
];