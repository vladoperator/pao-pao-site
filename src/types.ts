export type Language = 'en' | 'ro' | 'ru';
export type Size = 'M' | 'L';
export type IceLevel = 'No Ice' | 'Less Ice' | 'Regular Ice';
export type SugarLevel = '0%' | '30%' | '50%' | '70%' | '100%';

// Prices are configured in LEI
export interface Topping {
  id: string;
  name: Record<Language, string>;
  price: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: Record<Language, string>;
  description?: Record<Language, string>;
  basePrice: Record<Size, number>;
  imageColor: string; // Used for gradient placeholder if no image
  imageUrl?: string;
}

export interface Category {
  id: string;
  name: Record<Language, string>;
  description?: Record<Language, string>;
}

export interface CartItem {
  id: string; // unique ID for the cart line item
  product: Product;
  size: Size;
  iceLevel: IceLevel;
  sugarLevel: SugarLevel;
  toppings: Topping[];
  quantity: number;
  totalPrice: number;
}
