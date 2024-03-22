import { arrowNext, arrowPrevious } from "../assets/images/images";

const CarouselButtons = ({ updateIndex, buttonClassName, currentBigShoe }) => {
  return (
    <>
      {/* Previous button */}
      <button
        className={`${buttonClassName}-prev big-img-btns`}
        onClick={() => updateIndex(currentBigShoe - 1)}
      >
        <svg stroke="#1D2026" width={13} height={18}>
          <use xlinkHref={arrowPrevious} />
        </svg>
      </button>
      {/* Next button */}
      <button
        className={`${buttonClassName}-next big-img-btns`}
        onClick={() => updateIndex(currentBigShoe + 1)}
      >
        <svg stroke="#1D2026" width={13} height={18}>
          <use xlinkHref={arrowNext} />
        </svg>
      </button>
    </>
  );
};

export default CarouselButtons;
