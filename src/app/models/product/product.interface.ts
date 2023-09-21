export interface ProductInterface {
  id: PropertyKey
  uri: string;
  name: string;
  brandPrefixed: boolean;
  ranking: number;
  stock: number;
  price: number;
  description: {
    short: string;
    large: string;
  };
  advantages: string[];
  images: {
    large: string;
    medium: string;
    small: string;
  },
  testimonials?: PropertyKey[];
  specialOffer?: PropertyKey;
}
