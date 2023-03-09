import { useEffect, useState } from "react";
import styled from "styled-components";

import { CardClothes } from "@/components/CardClothes";
import { EmptyResult } from "@/components/EmptyResult";
import { IncreaseDecreaseProducts } from "@/components/IncreaseDecreaseProducts";
import { LayoutContent } from "@/components/LayoutContent";
import { SearchInput } from "@/components/SearchInput";
import { Select } from "@/components/Select";
import {
  IDLE_TIMEOUT_ON_INPUTS,
  ORDER_TYPE_IN_PRICE,
  URL_GET_CLOTHES,
} from "@/data/common";
import { devicesSize } from "@/data/device-size";
import { OrderType } from "@/data/order-type.enum";
import { ClothesProps } from "@/models/clothes.props";
import { debounce } from "@/utils/debounce";
import { getClothesSortedInAscendingAndDescendingOrder } from "@/utils/get-clothes-ascending-and-descending-order";

const ActionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--space1);
  flex-direction: column;
  align-items: center;

  @media ${devicesSize.mobileL} {
    flex-direction: initial;
  }
`;

const ClothesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start !important;
`;

export default function Home(props: any) {
  const clothes: ClothesProps[] = props.clothes;

  const [searchText, setSearchText] = useState("");
  const [filteredClothes, setFilteredClothes] =
    useState<ClothesProps[]>(clothes);

  const [orderType, setOrderType] = useState("");

  const onChangeSortType = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderType(target.value);
    const sortedList = getClothesSortedInAscendingAndDescendingOrder(
      [...filteredClothes],
      target.value as OrderType | ""
    );
    setFilteredClothes(sortedList);
  };

  // for Search with text
  useEffect(() => {
    const filterClothes = () => {
      const dataFiltered = [
        ...clothes.filter(
          ({ title }) => title.toLowerCase().indexOf(searchText) != -1
        ),
      ];
      const sortedData = getClothesSortedInAscendingAndDescendingOrder(
        [...dataFiltered],
        orderType as OrderType | ""
      );
      setFilteredClothes(sortedData);
    };

    if (searchText.trim()) {
      filterClothes();
    } else {
      const sortedData = getClothesSortedInAscendingAndDescendingOrder(
        [...clothes],
        orderType as OrderType | ""
      );
      setFilteredClothes(sortedData);
    }
  }, [clothes, searchText]);

  return (
    <LayoutContent>
      <ActionHeader>
        <SearchInput
          handleChange={debounce(
            ({ target }: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(target.value);
            },
            IDLE_TIMEOUT_ON_INPUTS
          )}
        />
        <Select
          title="Ordenar"
          id="select-asc-desc-price"
          options={ORDER_TYPE_IN_PRICE}
          handleChange={onChangeSortType}
        />
        {/* TODO:  */}
        <IncreaseDecreaseProducts
          handleClickIncrease={() => {}}
          handleClickDecrease={() => {}}
        />
      </ActionHeader>

      <ClothesContent>
        {filteredClothes.length ? (
          filteredClothes.map((item, index) => (
            <CardClothes
              key={index}
              alt={item.title}
              title={item.title}
              price={item.price}
              colors={item.colors}
              discountPercentage={item.discountPercentage}
              urlImage={item.urlImage}
            />
          ))
        ) : (
          <EmptyResult />
        )}
      </ClothesContent>
    </LayoutContent>
  );
}

export async function getStaticProps() {
  const res = await fetch(URL_GET_CLOTHES);
  const clothes = await res.json();

  return { props: clothes };
}
