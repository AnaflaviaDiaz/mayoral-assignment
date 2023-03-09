import { ClothesProps } from "@/models/clothes.props";
import { OrderType } from "../data/order-type.enum";

export const getClothesSortedInAscendingAndDescendingOrder = (
  list: ClothesProps[],
  orderType: OrderType | "" = ""
): ClothesProps[] => {
  switch (orderType) {
    case OrderType.Ascending:
      return list.sort((a, b) => a.price - b.price);
    case OrderType.Descending:
      return list.sort((a, b) => b.price - a.price);
    default:
      return list.sort((a, b) => a.title.localeCompare(b.title));
  }
};
