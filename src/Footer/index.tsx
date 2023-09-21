import { memo } from "react";
import { FooterDiv, FooterP } from "../Footer/style.tsx";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterP>Copyright © Tiep. All rights reserved. 2023</FooterP>
    </FooterDiv>
  );
};

export default memo(Footer);
