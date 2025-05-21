import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useCartItemContext } from "../../hooks/CartContext";
const Header = () => {
  const { cartCount } = useCartItemContext();
  return (
    <header id="header">
      <div className="grid grid-cols-3 py-[1.5rem]">
        <div className="col-span-1">
          <Link to="/">
            <img
              src="../../src/assets/logo_dark.svg"
              alt="logo"
              className="w-[50px]"
            ></img>
          </Link>
        </div>
        <nav className="col-span-2">
          <ul className="grid auto-cols-[minmax(100px,1fr)] grid-flow-col items-center h-full gap-[10px]">
            <li className="uppercase text-center">
              <HashLink to="/#beauty">Beauty</HashLink>
            </li>
            <li className="uppercase text-center">
              <HashLink to="/#fragrances">fragrances</HashLink>
            </li>
            <li className="uppercase text-center">
              <HashLink to="/#furniture">furniture</HashLink>
            </li>
            <li className="uppercase text-center">
              <HashLink to="/#groceries">groceries</HashLink>
            </li>
            <li className="uppercase text-center">
              <HashLink to="/#articles">Articles</HashLink>
            </li>
            <li className="uppercase text-center">
              <HashLink to="/#contact">Contact</HashLink>
            </li>
            <li className="uppercase text-center">
              <Link to="/cart">
                <div className="relative inline-block text-2xl text-gray-800 cursor-pointer">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="absolute -top-2 -right-2 bg-[var(--site-light-theme-text-color)] text-[--site-light-root-text-color] text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount ? cartCount : 0}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ml-[-6rem] mr-[-6rem] border-x border-b border-[var(--site-border-color)]"></div>
    </header>
  );
};

export default Header;
