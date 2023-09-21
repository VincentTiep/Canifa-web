import { useState } from "react";
import HomePage from "./HomePage";
import Products from "./Products";
import Footer from "./Footer";

import "./App.css";

function App() {
  const [addItem, setAddItem] = useState("");
  const [searchApp, setSearchApp] = useState("");
  return (
    <>
      <HomePage recievedApp={addItem} HomepageSendtoApp={setSearchApp} />
      <Products sendToApp={setAddItem} AppSendSearchtoProduct={searchApp} />
      <Footer />
    </>
  );
}

export default App;
