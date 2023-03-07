import { Clothes } from "./clothes.interface";

export interface CardClothesInterface extends Clothes {
  children?: React.ReactNode;
  alt: string;
}