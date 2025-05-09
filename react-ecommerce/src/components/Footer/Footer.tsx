import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer id="about" className="py-[5rem]">
      <div className="grid grid-col-11 grid-flow-col">
        <div className="col-span-3 text-left">
          <div className={styles.footer_section}>
            <img
              src="../../src/assets/logo_dark.svg"
              alt="logo"
              className="w-[50px]"
            ></img>
          </div>
          <p className="inline-block w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit
            iaculis amet, ac urna. Adipiscing fames semper erat ac in
            suspendisse iaculis.
          </p>
        </div>
        <div className="col-span-2">
          <h5 className={styles.footer_section}>About Us</h5>
          <ul>
            <li className={styles.footer_item}>
              <a href="#">vision</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">articles </a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">careers</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">service terms</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">donate</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h5 className={styles.footer_section}>Discover</h5>
          <ul>
            <li className={styles.footer_item}>
              <a href="#">Home</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Books</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Authors</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Subjects</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Advanced Search</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h5 className={styles.footer_section}>My account</h5>
          <ul>
            <li className={styles.footer_item}>
              <a href="#">Sign In</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">View Cart</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">My Wishtlist</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Track My Order</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h5 className={styles.footer_section}>Help</h5>
          <ul>
            <li className={styles.footer_item}>
              <a href="#">Help center</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Report a problem</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Suggesting edits</a>
            </li>
            <li className={styles.footer_item}>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
