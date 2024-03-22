import { navLinks } from "../constants/contents.js";

const Nav = ({ mobileNav, isNavVisible }) => {
  return (
    <div
      className={` ${mobileNav ? "mobile-nav-wrapper" : ""} ${isNavVisible ? "active" : ""}`}
    >
      <menu
        className={`${mobileNav ? "mobile-nav" : "flex gap-8 text-dark-grayish-blue max-lg:hidden"} ${isNavVisible ? "active" : ""}`}
        // aria-hidden attribute for the mobile navigation toggle
        aria-hidden={mobileNav && !isNavVisible}
      >
        {navLinks.map((item) => (
          <li
            className={`${!mobileNav && "nav__li | relative"}`}
            key={item.label}
          >
            <a className="nav-link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </menu>
    </div>
  );
};

export default Nav;
