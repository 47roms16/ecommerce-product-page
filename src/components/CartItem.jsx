import { shoe1, deleteIcon } from "../assets/images/images.js";
import CartButton from "./CartButton";

// CartItem component displays an item in the cart with quantity, price, and checkout option
const CartItem = ({
  productQuantity,
  productPrice,
  totalPrice,
  setProductQuantity,
  isCartVisible,
}) => {
  // Function to delete cart items
  const deleteCartItems = () => {
    setProductQuantity(0); // Reset product quantity to zero
  };

  return (
    <div
      className={`cart | absolute -right-16 top-24 z-50 w-[22.5rem] rounded-xl border bg-white pb-8 pt-5 max-xl:right-9 max-lg:right-0 max-lg:top-20 max-sm:-right-4 ${
        isCartVisible ? "block" : "hidden"
      }`}
    >
      {/* Cart header */}
      <div className="mb-7 px-4">
        <h4 className="font-bold">Cart</h4>
      </div>
      <hr />
      {/* Render cart item or empty cart message */}
      {productQuantity ? (
        // Cart item details
        <div className="px-6">
          <div className="mb-6 pt-6">
            <div className="flex items-center gap-4 ">
              <img
                className="size-[3.125rem] rounded-[4px]"
                src={shoe1}
                width={1000}
                height={1000}
                alt="Cart item - shoe sneakers"
              />
              <div className="text-dark-grayish-blue">
                <h5 className="">Fall Limited Edition Sneakers</h5>
                <p></p>
                <div className="flex">
                  <p>
                    ${productPrice}.00 × {productQuantity}{" "}
                    <span className="font-bold text-dark-blue">
                      ${totalPrice}
                    </span>
                  </p>
                </div>
              </div>
              {/* Button to delete cart item */}
              <button onClick={deleteCartItems}>
                <svg
                  className="transition-transform hover:scale-110 focus:scale-110 active:scale-125"
                  width={14}
                  height={16}
                  alt="Cart"
                >
                  <use xlinkHref={deleteIcon}></use>
                </svg>
              </button>
            </div>
          </div>
          {/* Render checkout button */}
          <CartButton buttonText="Checkout" />
        </div>
      ) : (
        // Empty cart message
        <div className="pb-14 pt-[4.625rem] text-center">
          <h5 className="font-bold text-grayish-blue">Your cart is empty</h5>
        </div>
      )}
    </div>
  );
};

export default CartItem;
