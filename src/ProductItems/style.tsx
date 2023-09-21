import { styled } from "styled-components";

export const ItemsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemDiv = styled.div`
  width: 250px;
  margin: 20px;
  overflow: hidden;
`;

export const ImageItemDiv = styled.div`
  width: 250px;
  height: 300px;
  margin-bottom: 10px;
  background: url("https://fastly.picsum.photos/id/655/200/300.jpg?hmac=SlNnemiSlvt724JhX_6o0cfOmLnp5NnDewnA1_vB2rg");
`;

export const ColorItemDiv = styled.div`
  display: flex;
`;
export const ColorIteamp = styled.p`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`;
export const NameItemDiv = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding: 10px 0;
  text-transform: uppercase;
`;

export const IdItemDiv = styled.div`
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;
`;

export const PriceItemDiv = styled.div`
  text-align: left;
  padding: 10px 0;
  font-weight: 700;
`;

export const AddItemDiv = styled.div`
  display: block;
  border: 1px solid red;
  color: red;
  text-transform: uppercase;
  margin: 20px 0;
  padding: 5px;
  font-size: 13px;
  cursor: pointer;
  transform: translateY(-20px);
  transition: transform 0.3s;
`;
