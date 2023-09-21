export interface TestimonialInterface {
  id: PropertyKey;
  ranking: number;
  author: {
    name: string;
    thumbnail: string;
  };
  verifiedCustomer: boolean;
  text: string;
}
