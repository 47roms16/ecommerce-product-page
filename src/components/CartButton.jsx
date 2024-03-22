const CartButton = ({ buttonText, cartIcon, handleAddToCart, isAddToCart }) => {
  const handleClick = () => {
    // Only call handleAddToCart for add to cart button or if isAddToCart is true
    isAddToCart && handleAddToCart();
  };

  return (
    <button
      className={`flex h-14 items-center justify-center gap-4 text-nowrap rounded-[10px] bg-orange px-20 text-center font-semibold text-white hover:opacity-50 active:opacity-80 lg:w-full ${!isAddToCart ? "w-full" : ""}`}
      onClick={handleClick}
    >
      {cartIcon && (
        <svg className="fill-white" width={16} height={16}>
          <use xlinkHref={cartIcon} />
        </svg>
      )}
      {buttonText}
    </button>
  );
};

export default CartButton;
