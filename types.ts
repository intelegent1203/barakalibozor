export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  supplier: string;
  rating: number;
  isHalal: boolean;
  stock: number;
  image: string;
  location: string;
}

export interface Supplier {
  id: string;
  name: string;
  type: 'Farmer' | 'Wholesaler';
  rating: number;
  verified: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Tab {
  LANDING = 'LANDING',
  DASHBOARD_MARKET = 'MARKET',
  DASHBOARD_ANALYTICS = 'ANALYTICS',
  DASHBOARD_LOGISTICS = 'LOGISTICS',
  DASHBOARD_FINANCE = 'FINANCE',
  DASHBOARD_AI = 'AI_ADVISOR'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}