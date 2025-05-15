import styles from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className={styles.pos_center}>
      <div className={styles.loader}></div>
    </div>
  );
};
export default Spinner;
