import CarouselButtons from "./CarouselButtons";

const BigImage = ({
  imgUrl,
  currentBigShoe,
  updateIndex,
  toggleModalVisibility,
  modalCarousel,
}) => {
  return (
    <div
      className={`relative mb-8 cursor-pointer max-sm:mb-6`}
      onClick={() => {
        toggleModalVisibility(true);
      }}
    >
      <div className="overflow-hidden rounded-2xl max-md:rounded-none">
        <ul
          className={`flex transition-transform  ${!modalCarousel ? "lg:hover:opacity-50 lg:active:opacity-75" : ""}`}
          style={{
            transform: `translateX(${currentBigShoe * -100}%)`,
          }}
        >
          {/* Render images based on imgUrl array */}
          {imgUrl.map((shoeImg, index) => (
            <li
              className="min-w-full snap-start object-contain max-md:max-h-[30rem] max-sm:max-h-[18.75rem]"
              key={index}
            >
              <img
                width={1000}
                height={1000}
                src={shoeImg.shoe}
                alt="Shoe product collection"
              />
            </li>
          ))}
        </ul>
      </div>
      {/* Render CarouselButtons component */}
      <CarouselButtons
        buttonClassName="modal-btn" // modal buttons class name
        updateIndex={updateIndex}
        currentBigShoe={currentBigShoe}
      />
    </div>
  );
};

export default BigImage;
