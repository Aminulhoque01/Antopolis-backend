

export type CategoryType = "Breakfast" | "Lunch" | "Dinner";

export interface IProduct {
  id: string;
  name: string;
  image: string;
  category: CategoryType;
  rating: number;
  price: number;
}
