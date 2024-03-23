import { useState } from "react";
import { logo, cart, avatar, menu, close } from "../assets/images/images.js";
import CartItem from "../components/CartItem.jsx";
import Nav from "../components/Nav.jsx";

const Header = ({
  productQuantity,
  productPrice,
  totalPrice,
  setProductQuantity,
}) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="padding-x | sticky top-0 bg-white max-lg:z-50">
      <nav className="max-container | relative flex items-center justify-between border-b-grayish-blue pt-3 max-lg:pb-6 max-lg:pt-8 max-sm:pt-5 lg:border-b">
        <menu className="padding-y | z-50 flex items-center gap-14 max-lg:gap-4">
          <button className="z-50 lg:hidden" onClick={handleNavVisibility}>
            <svg width={16} height={15} className="Menu">
              <use xlinkHref={isNavVisible ? close : menu}></use>
            </svg>
          </button>
          <a href="/">
            <svg width={138} height={20} alt="Sneakers home page">
              <use xlinkHref={logo}></use>
            </svg>
          </a>
          <Nav mobileNav={true} isNavVisible={isNavVisible} />
          <Nav />
        </menu>
        <menu className=" flex items-center gap-12 max-sm:gap-5">
          <div className="relative">
            {productQuantity ? (
              <span className="absolute -right-2 -top-2 z-10 w-5 animate-ping rounded-3xl bg-orange text-center text-[10px] font-semibold text-white">
                {productQuantity}
              </span>
            ) : null}
            <button
              className="fill-[#69707D] transition-transform hover:scale-110 hover:fill-black focus:scale-110 focus:fill-black active:scale-125"
              onClick={() => setIsCartVisible(!isCartVisible)}
              aria-label="Cart"
            >
              <svg width={22} height={20} className="transition-all" alt="Cart">
                <use xlinkHref={cart}></use>
              </svg>
            </button>
          </div>
          <button className="rounded-full outline-orange hover:outline hover:transition-all active:outline-8">
            <img
              className="max-lg:size-10 max-sm:size-6"
              width={50}
              height={50}
              src={avatar}
              alt="Profile picture"
            />
          </button>
          <CartItem
            productQuantity={productQuantity}
            productPrice={productPrice}
            totalPrice={totalPrice}
            setProductQuantity={setProductQuantity}
            isCartVisible={isCartVisible}
          />
        </menu>
      </nav>
    </header>
  );
};

export default Header;
