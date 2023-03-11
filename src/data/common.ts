import { SelectOption } from "@/components/Select";
import { OrderType } from "../models/order-type.enum";

export const URL_GET_CLOTHES = "http://localhost:3000/clothes.json";
export const IDLE_TIMEOUT_ON_INPUTS = 1000;

export const ORDER_TYPE_IN_PRICE: SelectOption[] = [
  {
    value: "",
    label: "Relevancia",
  },
  {
    value: OrderType.Ascending,
    label: "Precio ascendente",
  },
  {
    value: OrderType.Descending,
    label: "Precio descendente",
  },
];
