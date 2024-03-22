import { useState } from "react";
import { minus, plus, cart } from "../assets/images/images.js";
import CartButton from "./CartButton.jsx";

const ProductDescription = ({
  productPrice,
  setTotalPrice,
  productQuantity,
  setProductQuantity,
}) => {
  // State for the item count
  const [count, setCount] = useState(0);

  // Function to handle item count
  const handleCount = (counts) => {
    counts < 0 ? 0 : setCount(counts); // Ensure count is non-negative
  };

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    const newProductQuantity = productQuantity + count; // Calculate new quantity
    setTotalPrice((productPrice * newProductQuantity).toFixed(2)); // Update total price
    setProductQuantity(newProductQuantity); // Update product quantity in cart
  };

  return (
    <section className="self-center justify-self-center max-md:px-8 max-sm:px-6 lg:max-w-[27.75rem] 2xl:justify-self-start">
      <div className="flex flex-col gap-[15px]">
        {/* Product Title and Description */}
        <div className="mb-3">
          <h1 className="mb-9 text-[2.75rem] font-bold leading-[3rem] text-dark-blue max-sm:mb-5 max-sm:text-[1.75rem] max-sm:leading-none">
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <p className="text-dark-grayish-blue max-sm:text-[0.9375rem]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        {/* Product Price */}
        <div className="max-sm:flex max-sm:justify-between">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-3xl font-bold text-dark-blue">
              ${productPrice.toFixed(2)}
            </h2>
            <h3 className="ml-2 rounded-md bg-pale-orange px-[10px] py-[2px] text-base font-bold text-orange">
              50%
            </h3>
          </div>
          <p className="sale | relative size-fit font-bold text-grayish-blue">
            $250.00
          </p>
        </div>
        <h3 className="-order-1 text-sm font-bold uppercase tracking-widest text-orange">
          Sneaker Company
        </h3>
        {/* Quantity Selector and Add to Cart Button */}
        <div className="flex justify-between gap-4 max-lg:justify-end max-sm:flex-col">
          <div className="flex rounded-lg bg-light-grayish-blue max-sm:justify-between">
            {/* Decrease Item Count Button */}
            <button
              className="flex size-[3.25rem] items-center justify-start pl-4 hover:opacity-70 active:scale-110 active:opacity-90"
              onClick={() => handleCount(count - 1)}
            >
              {/* offscreen */}
              <p className="absolute left-[999999px]">Subtract</p>
              <svg width={12} height={4}>
                <use xlinkHref={minus} />
              </svg>
            </button>
            {/* Item Count Display */}
            <span className="flex size-[3.25rem] h-14 items-center justify-center font-bold text-dark-blue">
              {count}
            </span>
            {/* Increase Item Count Button */}
            <button
              className="flex size-[3.25rem] items-center justify-end pr-4 hover:opacity-70 active:scale-110 active:opacity-90"
              onClick={() => handleCount(count + 1)}
            >
              {/* offscreen */}
              <p className="absolute left-[999999px]">Add</p>
              <svg width={12} height={12}>
                <use xlinkHref={plus} />
              </svg>
            </button>
          </div>
          {/* Add to Cart Button */}
          <CartButton
            buttonText="Add to cart"
            cartIcon={cart}
            handleAddToCart={handleAddToCart}
            isAddToCart={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
