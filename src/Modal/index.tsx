// import React from "react";
import { useState } from "react";
import ItemDiv from "../ItemDiv/index.tsx";

import {
  ModalDiv,
  DetailCart,
  CardDiv,
  TotalDiv,
  TotalQtyPrice,
  CloseModal,
  ListItemsDiv,
} from "./style";

const Modal = () => {
  const [showcolor, setShowcolor] = useState("blue");
  return (
    <ModalDiv>
      <DetailCart>
        <CardDiv>Giỏ hàng</CardDiv>
        <ListItemsDiv>
          <ItemDiv />
        </ListItemsDiv>

        <TotalDiv>
          <TotalQtyPrice>
            <p>Số lượng sản phẩm:</p>
            <p style={{ fontWeight: "700" }}>100</p>
          </TotalQtyPrice>
          <TotalQtyPrice>
            <p>Tổng giá trị:</p>
            <p style={{ fontWeight: "700" }}>100</p>
          </TotalQtyPrice>
          <CloseModal
            onClick={() => {
              // setShowmodal(!showmodal);
              setShowcolor("pink");
            }}
          >
            Close
          </CloseModal>
        </TotalDiv>
      </DetailCart>
    </ModalDiv>
  );
};

export default Modal;
