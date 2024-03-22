import { useState } from "react";
import ShoeCard from "./ShoeCard";
import { shoes } from "../constants/contents";
import BigImage from "./BigImage";
import { close } from "../assets/images/images.js";

const ShoesCarousel = ({
  modalCarousel,
  toggleModalVisibility,
  isModalVisible,
  bigImgClass,
}) => {
  // State for the index of the currently displayed big shoe
  const [currentBigShoe, setCurrentBigShoe] = useState(0);

  // Function to update the index of the big shoe image
  const updateIndex = (newIndex) => {
    // Ensure the index stays within the range of available shoes
    const updatedIndex =
      newIndex < 0 ? shoes.length - 1 : newIndex >= shoes.length ? 0 : newIndex;

    setCurrentBigShoe(updatedIndex);
  };

  return (
    <section
      className={`justify-self-center ${modalCarousel && isModalVisible ? "active" : ""} ${bigImgClass || "img-carousel"}`}
    >
      <div
        className={`box-content max-w-[27.75rem] justify-self-center max-lg:max-w-full ${modalCarousel ? "max-w-[34.5rem] max-lg:hidden" : ""} ${modalCarousel || ""}`}
      >
        <div>
          {/* Render close button for modal */}
          {modalCarousel && (
            <div className="flex justify-end pb-6">
              <button
                className="modal-btn-close"
                onClick={() => toggleModalVisibility(false)}
              >
                <svg width={22} height={22}>
                  <use xlinkHref={close} />
                </svg>
              </button>
            </div>
          )}
          {/* Render BigImage component */}
          <BigImage
            toggleModalVisibility={toggleModalVisibility}
            isModalVisible={isModalVisible}
            imgUrl={shoes}
            currentBigShoe={currentBigShoe}
            updateIndex={updateIndex}
            modalCarousel={modalCarousel}
          />
          {/* Render ShoeCard thumbnails component */}
          <ShoeCard updateIndex={updateIndex} currentBigShoe={currentBigShoe} />
        </div>
      </div>
    </section>
  );
};

export default ShoesCarousel;
