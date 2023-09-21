import React from "react";
import {
  ItemsDiv,
  ItemCartImg,
  InfoCartDiv,
  InfoCartName,
  InforCartID,
  PriceQtyDiv,
  PriceDiv,
  QtyDiv,
  ChangeQty,
  DeleteItem,
} from "../ItemDiv/style";
import { ColorIteamp, ColorItemDiv } from "../ProductItems/style.tsx";

function ItemDiv() {
  const ItemData = [
    {
      name: "QUẦN SOÓC KHAKI NAM SLIMFIT COTTON USA",
      code: "8BS21S010",
      price: 499000,
      category: "men",
      colors: [
        {
          code: "#C2C5BE",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/b/8bs21s010-sa124-31-1.jpg",
        },
        {
          code: "#1E2D54",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/b/8bs21s010-sb128-31-1.jpg",
        },
        {
          code: "#667065",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/b/8bs21s010-sg204-31-1.jpg",
        },
      ],
    },
    {
      name: "ÁO SƠ MI NAM VẢI PHA LINEN",
      code: "8TH21S005",
      price: 499000,
      category: "men",
      colors: [
        {
          code: "#C0C2C8",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th21s005-sa544-l-1.jpg",
        },
        {
          code: "#D3DDEA",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th21s005-sb869-l-1.jpg",
        },
      ],
    },
    {
      name: "ÁO PHÔNG UNISEX NGƯỜI LỚN - BỘ SƯU TẬP GIA ĐÌNH",
      code: "5TS21S001",
      price: 249000,
      category: "men",
      colors: [
        {
          code: "#F3F3F5",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/5/t/5ts21s001-sw001-s-1.jpg",
        },
      ],
    },
    {
      name: "ÁO KHOÁC CHỐNG NẮNG NAM CÓ MŨ",
      code: "8OT21S001",
      price: 399000,
      category: "men",
      colors: [
        {
          code: "#9F9F9F",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot21s001-sa046-1-a.jpg",
        },
        {
          code: "#4E709E",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot21s001-sb052-l-1.jpg",
        },
        {
          code: "#162935",
          image:
            "https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot21s001-sb060-l-1.jpg",
        },
      ],
    },
  ];

  return (
    <>
      {ItemData.map((item, index) => (
        <ItemsDiv key={index}>
          <ItemCartImg key={index}></ItemCartImg>
          <InfoCartDiv key={index}>
            <ColorItemDiv key={index}>
              {item.colors.map((ic, index) => (
                <ColorIteamp
                  key={index}
                  style={{ background: `${ic.code}` }}
                ></ColorIteamp>
              ))}
            </ColorItemDiv>
            <InfoCartName key={index}>{item.name}</InfoCartName>
            <InforCartID key={index}>{item.code}</InforCartID>
            <PriceQtyDiv key={index}>
              <PriceDiv key={index}>{item.price.toLocaleString()} đ</PriceDiv>
              <QtyDiv key={index}>
                <span key={index}>Số lượng:</span>
                <ChangeQty key={index}>-</ChangeQty>
                <span key={index}>1</span>
                <ChangeQty key={index}>+</ChangeQty>
              </QtyDiv>
            </PriceQtyDiv>
            <DeleteItem key={index}>Xóa</DeleteItem>
          </InfoCartDiv>
        </ItemsDiv>
      ))}
    </>
  );
}

export default ItemDiv;
