export interface Review {
  user_name: string;
  user_image: string;
  rating: number;
  text: string;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  category: string;
  price_range: string;
  is_open: boolean;
  photos: string[];
  reviews: Review[];
}
