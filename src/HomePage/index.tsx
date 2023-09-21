import { SearchNormal1, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import Modal from "../Modal/index.tsx";

interface THomePageProps {
  recievedApp: string;
  // sendProduct:string
}

const HomePage = ({ recievedApp, HomepageSendtoApp }: THomePageProps) => {
  const [showCart, setShowCart] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    HomepageSendtoApp(searchInput);
  };

  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="logo">
            <img
              src="https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?fit=539%2C244&amp;ssl=1&amp;w=640"
              alt="Shopify"
            />
          </div>
          <div className="search-and-cart">
            <div className="search">
              <span className="searchicon">
                <SearchNormal1
                  className="search-img"
                  size="24"
                  color="#000"
                  fontWeight="Bold"
                />
              </span>
              <input
                type="text"
                placeholder="Bạn đang tìm gì?"
                value=""
                onChange={handleChange}
              />
            </div>
            <span className="cart" onClick={() => setShowCart(true)}>
              <div className="numberitem">{recievedApp.split("+").length}</div>
              <ShoppingCart
                className="img-cart"
                size="32"
                color="#000"
                cursor="Pointer"
              />
              {showCart && <Modal />}
            </span>
          </div>
        </div>
      </div>
      <div className="promo">
        <div className="left">
          <div className="title">
            <p>
              Nhà <br /> là nơi...
            </p>
            <p>ta được thoải mái nhất</p>
          </div>
          <a
            href="#product"
            className="button"
            onClick={() => window.scrollTo(0, 600)}
          >
            Mua ngay
          </a>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default HomePage;
