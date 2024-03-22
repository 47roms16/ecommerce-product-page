import { useState } from "react";
import ProductDetails from "./sections/ProductDetails";
import Header from "./sections/Header";

const App = () => {
  const productPrice = 125;

  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <Header
        productQuantity={quantity}
        productPrice={productPrice}
        totalPrice={totalPrice}
        setProductQuantity={setQuantity}
      />

      <ProductDetails
        productQuantity={quantity}
        setProductQuantity={setQuantity}
        productPrice={productPrice}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </>
  );
};

export default App;
