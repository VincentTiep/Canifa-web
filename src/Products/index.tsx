import { useState } from "react";
import ProductItems from "../ProductItems";
import { ProductSection } from "./style.tsx";

const products = ["Men", "Women", "Boy", "Girl"];

const Products = ({ sendToApp, AppSendSearchtoProduct }) => {
  // const [sendApp, setSendApp] = useState(0);
  // const [pagination, setPagination] = useState("");
  const [stateSearch, setStateSearch] = useState("");

  return (
    <ProductSection>
      {products.map((product, index) => (
        <>
          <h1 key={index}>{product}</h1>
          <ProductItems
            key={index}
            product={product}
            sendProducts={sendToApp}
            ProductSendtoItems={AppSendSearchtoProduct}
          />
        </>
      ))}
    </ProductSection>
  );
};

export default Products;
