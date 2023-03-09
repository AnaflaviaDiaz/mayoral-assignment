import { useEffect, useState } from "react";
import styled from "styled-components";

import { CardClothes } from "@/components/CardClothes";
import { IncreaseDecreaseProducts } from "@/components/IncreaseDecreaseProducts";
import { LayoutContent } from "@/components/LayoutContent";
import { SearchInput } from "@/components/SearchInput";
import { Clothes } from "@/models/clothes.interface";
import { debounce } from "@/utils/debounce";
import { EmptyResult } from "@/components/EmptyResult";
import { IDLE_TIMEOUT_ON_INPUTS, URL_GET_CLOTHES } from "@/data/common";

const ActionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--space1);
`;

const ClothesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start !important;
`;

export default function Home(props: any) {
  const [searchText, setSearchText] = useState("");
  const [filteredClothes, setFilteredClothes] = useState<Clothes[]>([]);
  const clothes: Clothes[] = props.clothes;

  useEffect(() => {
    const filterClothes = () => {
      setFilteredClothes([
        ...clothes.filter(
          ({ title }) => title.toLowerCase().indexOf(searchText) != -1
        ),
      ]);
    };

    if (searchText.trim()) {
      filterClothes();
    } else {
      setFilteredClothes(clothes);
    }
  }, [clothes, searchText]);

  return (
    <LayoutContent>
      <ActionHeader>
        <SearchInput
          handleChange={debounce(
            ({ target }: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(target.value);
              console.log(target.value);
            },
            IDLE_TIMEOUT_ON_INPUTS
          )}
        />
        <IncreaseDecreaseProducts />
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
