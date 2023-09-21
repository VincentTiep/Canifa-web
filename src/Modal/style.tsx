import { styled } from "styled-components";

export const ModalDiv = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.603);
  width: 120vw;
  height: 100vh;
  transform: translate(-90%, -50px);
  display: flex;
  justify-content: flex-end;
  transition: all 0.4s ease-in;
  z-index: 10000;
`;
export const DetailCart = styled.div`
  position: relative;
  background-color: #fff;
  width: 500px;
`;

export const CardDiv = styled.div`
  position: relative;
  background-color: red;
  color: #fff;
  padding: 10px 0;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const ListItemsDiv = styled.div`
  max-height: 60%;
  overflow-y: scroll;
`;
export const TotalDiv = styled.div`
  padding: 30px;
`;
export const TotalQtyPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;
export const CloseModal = styled.button`
  position: absolute;
  padding: 10px 20px;
  border: 1px solid red;
  border-radius: 5px;
  width: fit-content;
  color: red;
  bottom: 30px;
  right: 80px;
  cursor: pointer;
`;
