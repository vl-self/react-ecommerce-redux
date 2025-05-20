import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-[85%] m-[0_auto] py-[2rem] grid grid-cols-[repeat(2,minmax(250px,_1fr))] grid-flow-col">
      <div className="flex items-center">
        <div className="text-center">
          <h2 className="font-bold m-[3rem]">Exiciting Offers are here!</h2>
          <p className="px-[2rem] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.
          </p>
          <Link to="/prodlist" className="buttonCls">
            Shop Now
            {/* <button className="uppercase mt-[2rem]"></button> */}
          </Link>
        </div>
      </div>
      <div>
        <img
          src="../../src/assets/offer-price.jpg"
          alt="offer price"
          className="w-full rounded-[2rem]"
        ></img>
      </div>
    </div>
  );
};

export default Banner;
