import { useEffect, useState } from "react";
import ProductDescription from "../components/ProductDescription";
import ShoesCarousel from "../components/ShoesCarousel";

const ProductDetails = ({
  productQuantity,
  setProductQuantity,
  productPrice,
  totalPrice,
  setTotalPrice,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Event listener to close modal when pressing Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVisible]);

  return (
    <main className="pb-10 pt-[5.625rem] max-lg:pt-0">
      <div className="padding-x | grid grid-cols-2 max-lg:grid-cols-1 max-md:px-0">
        {/* First ShoesCarousel for main display */}
        <ShoesCarousel
          toggleModalVisibility={setModalVisible}
          isModalVisible={modalVisible}
          bigImgClass="big-img" // Class name for styling the first ShoesCarousel big image
        />
        <ProductDescription
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
          productPrice={productPrice}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />

        {/* Second ShoesCarousel for modal display */}
        <ShoesCarousel
          modalCarousel="modal-carousel" // Class name for styling the modal ShoesCarousel
          isModalVisible={modalVisible}
          toggleModalVisibility={setModalVisible}
        />
      </div>
    </main>
  );
};

export default ProductDetails;
