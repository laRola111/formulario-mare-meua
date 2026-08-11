export interface CompanyConfig {
  id: string;
  name: string;
  hostnames: string[];
  logoUrl?: string;
  primaryColor: string; // Hex color code
  accentColor: string;  // Hex color code for secondary elements
  address: string;
  email: string;
  phone: string;
  instagram?: string;
}

export const ruedaLaRolaCompany: CompanyConfig = {
  id: 'ruedalarola',
  name: 'Rueda la Rola Media',
  hostnames: ['localhost', 'ruedalarola.com', 'www.ruedalarola.com'],
  logoUrl: '/logo.png',
  primaryColor: '#E11D48', // Rose/Red (example for Rueda la Rola)
  accentColor: '#F59E0B', // Amber
  address: '',
  email: '',
  phone: '',
  instagram: 'https://www.instagram.com/ruedalarola/'
};

export const companies: CompanyConfig[] = [ruedaLaRolaCompany];

export const defaultCompany: CompanyConfig = ruedaLaRolaCompany;

export function getCompanyByHostname(_hostname: string): CompanyConfig {
  return ruedaLaRolaCompany;
}
