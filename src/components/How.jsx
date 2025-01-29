import styles from "./../styles/How.module.scss";
import heroStyles from "./../styles/Hero.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { paths } from "../pages/paths";

const How = function (props) {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.wrapper} ${props.btn === false ? styles.wrapper_black : ""}`}>
        {props.btn === true ? (
          <h1 className={styles.title}>How it works</h1>
        ) : (
          <div className={styles.empty_title}></div>
        )}

        <div className={`${styles.circles}`}>
          <div className={`${styles.circle} ${props.btn === true ? styles.bg_white : ""}`}></div>
          <div className={`${styles.circle} ${props.btn === true ? styles.bg_white : ""}`}></div>
          <div className={`${styles.circle} ${props.btn === true ? styles.bg_white : ""}`}></div>
        </div>

        <div
          className={`${styles.content_wrapper} ${
            props.btn === true ? styles.text_grey : styles.text_white
          }`}
        >
          <div className={styles.box}>
            <p className={styles.num}>01</p>
            <h2 className={styles.sub_title}>Pick your coffee</h2>
            <p className={styles.text}>
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and
              we pay fair prices for them. There are new coffees in all profiles every month for you
              to try out.
            </p>
          </div>

          <div className={styles.box}>
            <p className={styles.num}>02</p>
            <h2 className={styles.sub_title}>Choose the frequency</h2>
            <p className={styles.text}>
              Customize your order frequency, quantity, even your roast style and grind type. Pause,
              skip or cancel your subscription with no commitment through our online portal.
            </p>
          </div>

          <div className={styles.box}>
            <p className={styles.num}>03</p>
            <h2 className={styles.sub_title}>Receive and enjoy!</h2>
            <p className={styles.text}>
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy
              award-winning world-class coffees curated to provide a distinct tasting experience.
            </p>
          </div>
        </div>

        {props.btn === true ? (
          <Link className={`${heroStyles.link} ${styles.btn}`} to={paths.plan}>
            Create your plan
          </Link>
        ) : (
          <div className={styles.empty_btn}></div>
        )}
      </div>
    </section>
  );
};

How.propTypes = { btn: PropTypes.bool };

export default How;
