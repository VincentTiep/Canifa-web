import { styled } from "styled-components";

export const ItemsDiv = styled.div`
  display: flex;
  padding: 15px 0;
  margin: 0 20px;
  border-bottom: 1px solid #dadada;
`;
export const ItemCartImg = styled.img`
  height: 140px;
  width: 35%;
  background: url("https://fastly.picsum.photos/id/655/200/300.jpg?hmac=SlNnemiSlvt724JhX_6o0cfOmLnp5NnDewnA1_vB2rg");
`;
export const InfoCartDiv = styled.div`
  width: 100%;
  padding: 0 0 0 20px;
`;
export const InfoCarColor = styled.p`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`;
export const InfoCartName = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 10px 0;
  text-transform: uppercase;
`;
export const InforCartID = styled.div`
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;
`;
export const PriceQtyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PriceDiv = styled.div`
  text-align: left;
  padding: 10px 0;
  font-weight: 700;
`;
export const QtyDiv = styled.div``;
export const ChangeQty = styled.span`
  height: 15px;
  width: 15px;
  padding: 5px 8px;
  margin: 10px;
  background-color: silver;
  border-radius: 5px;
  line-height: 15px;
  text-align: center;
`;
export const DeleteItem = styled.div`
  color: #fff;
  background-color: red;
  width: fit-content;
  padding: 5px 15px;
`;
