import fsPromises from "fs/promises";
import path from "path";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { CardClothes } from "@/components/CardClothes";
import { IncreaseDecreaseProducts } from "@/components/IncreaseDecreaseProducts";
import { LayoutContent } from "@/components/LayoutContent";
import { SearchInput } from "@/components/SearchInput";
import { Clothes } from "@/models/clothes.interface";
import { debounce } from "@/utils/debounce";
import { EmptyResult } from "@/components/EmptyResult";

// import Image from "next/image";
// import styles from "@/styles/Home.module.css";

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
            1000
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
  const filePath = path.join(process.cwd(), "src/data/clothes.json");
  const jsonClothesData: Buffer = await fsPromises.readFile(filePath);
  const objectClothesData = JSON.parse(jsonClothesData.toString());

  return {
    props: objectClothesData,
  };
}

{
  /* <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */
}
