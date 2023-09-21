// import React from "react";
import { useState } from "react";
import data from "../data/data.json";

import {
  ItemsDiv,
  ItemDiv,
  ImageItemDiv,
  ColorItemDiv,
  ColorIteamp,
  NameItemDiv,
  IdItemDiv,
  PriceItemDiv,
  AddItemDiv,
} from "./style.tsx";

interface TProductItemsProps {
  product: string;
}

const ProductItems = ({ product, sendProducts }: TProductItemsProps) => {
  // const [addNumberItems, setAddNumberItems] = useState(0);
  const [array, setArray] = useState([]);

  return (
    <div>
      <ItemsDiv>
        {data
          .filter((dtf) => dtf.category === product.toLowerCase())

          .map((dt, index) => (
            <ItemDiv>
              <ImageItemDiv key={index} />

              <ColorItemDiv key={index}>
                {dt.colors.map((color, index) => (
                  <ColorIteamp
                    key={index}
                    style={{ background: `${color.code}` }}
                  ></ColorIteamp>
                ))}
              </ColorItemDiv>

              <NameItemDiv key={index}>{dt.name}</NameItemDiv>

              <IdItemDiv key={index}>{dt.code}</IdItemDiv>

              <PriceItemDiv key={index}>
                {dt.price.toLocaleString()} đ
              </PriceItemDiv>

              <AddItemDiv
                key={index}
                onClick={() => {
                  array.push(JSON.stringify(dt));
                  console.log("array", dt);

                  // setAddNumberItems(addNumberItems + 1);
                  sendProducts(array.join("+"));
                }}
              >
                +THÊM VÀO GIỎ HÀNG
              </AddItemDiv>
            </ItemDiv>
          ))}
      </ItemsDiv>
    </div>
  );
};

export default ProductItems;
