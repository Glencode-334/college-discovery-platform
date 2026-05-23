export interface Course {
  name: string;
  duration: string;
  fees: number;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placementRate: string;
  description: string;
  image: string;
  courses: Course[];
  reviews: Review[];
}