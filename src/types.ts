export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  badge?: 'NEW ARRIVAL' | 'LIMITED' | 'BEST SELLER';
  details: {
    material: string;
    dimensions?: string;
    features: string[];
    waterproof?: string;
    rechargeable?: string;
    careInstructions: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  stars: number;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}
