import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <header id="header">
      <div className="grid grid-cols-3 py-[1.5rem]">
        <div className="col-span-1">
          <a href="index.html">
            <img
              src="../../src/assets/logo_dark.svg"
              alt="logo"
              className="w-[50px]"
            ></img>
          </a>
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
              <button className="uppercase">Shop Now</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ml-[-6rem] mr-[-6rem] border-x border-b border-gray-950/5"></div>
    </header>
  );
};

export default Header;
