import styles from "./banner.module.css";
const Banner = () => {
  return (
    // ISSUE_KNOWN: same css are written in tailwind but first block with (h2,p are taking more width than second cell)
    // <div className="w-[85%] m-[0_auto] py-[2rem] grid grid-col-[1fr_1fr] grid-flow-col"></div>

    <div className={`w-[85%] m-[0_auto] py-[2rem] ${styles.bannerGrid}`}>
      <div className="flex items-center">
        <div className="text-center">
          <h2 className="font-bold m-[3rem]">Exiciting Offers are here!</h2>
          <p className="px-[2rem] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.
          </p>
          <button className="uppercase mt-[2rem]">Shop Now</button>
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
