import { shoes } from "../constants/contents";

const ShoeCard = ({ currentBigShoe, updateIndex }) => {
  // Function to handle shoe card click
  const handleClick = (index) => {
    updateIndex(index); // Update the current big shoe index
  };

  return (
    <ul className="flex items-center justify-between max-lg:hidden">
      {/* Render shoe card thumbnails */}
      {shoes.map((item, index) => (
        <li key={index}>
          {/* Shoe card thumbnail button */}
          <button
            className={`shoe-card-btn | size-[5.5rem] cursor-pointer rounded-[10px] bg-white transition-all ${
              currentBigShoe === index
                ? "-rotate-[7deg] scale-110 border-2 border-solid border-orange"
                : ""
            }`}
            onClick={() => handleClick(index)} // Handle click event
            disabled={currentBigShoe === index} // Disable button if already selected
          >
            {/* Shoe thumbnail image */}
            <img
              className={`rounded-md ${currentBigShoe === index ? "opacity-50" : ""}`}
              src={item.thumbnail}
              alt="Shoe collection thumbnail"
              width={176}
              height={176}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoeCard;
