import { CardClothes } from "@/components/CardClothes";
import { IncreaseDecreaseProducts } from "@/components/IncreaseDecreaseProducts";
import { LayoutContent } from "@/components/LayoutContent";
import { SearchInput } from "@/components/SearchInput";
import styled from "styled-components";
import fsPromises from "fs/promises";
import path from "path";
import { Clothes } from "@/models/clothes.interface";

// import Image from "next/image";
// import styles from "@/styles/Home.module.css";

const ActionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

const ClothesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Home(props: any) {
  const clothes: Clothes[] = props.clothes;

  return (
    <LayoutContent>
      <ActionHeader>
        <SearchInput />
        <IncreaseDecreaseProducts />
      </ActionHeader>

      <ClothesContent>
        {clothes.map((item, index) => (
          <CardClothes
            key={index}
            alt={item.title}
            title={item.title}
            price={item.price}
            colors={item.colors}
            discountPercentage={item.discountPercentage}
            urlImage={item.urlImage}
          />
        ))}
      </ClothesContent>
    </LayoutContent>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/clothes.json");
  const jsonData: Buffer = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: objectData,
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
