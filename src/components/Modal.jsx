import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./../styles/Modal.module.scss";
import buttonStyles from "./../styles/Hero.module.scss";
import React from "react";
import { paths } from "../pages/paths";

const Modal = function (props) {
  const mediaMatch = window.matchMedia("(min-width: 768px)");
  const [match, setMatch] = React.useState(mediaMatch.matches);

  React.useEffect(() => {
    const handler = (e) => setMatch(e.matches);
    mediaMatch.addEventListener("change", handler);
    return () => mediaMatch.removeEventListener("change", handler);
  });

  React.useEffect(() => {
    if (props.text) document.body.classList.add(styles.overflow_hidden);
    return () => document.body.classList.remove(styles.overflow_hidden);
  });

  if (!props.text) return "";

  return (
    <>
      <div className={styles.bg_layout}></div>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.top} onClick={props.closeModal}>
            <h2 className={styles.title}>Order Summary</h2>
          </div>

          <div className={styles.order_wrapper}>{props.text}</div>

          <p className={styles.text}>
            Is this correct? You can proceed to checkout or go back to plan selection if something
            is off. Subscription discount codes can also be redeemed at the checkout.{" "}
          </p>

          {!match ? (
            <div className={styles.btn_wrapper}>
              <Link className={`${buttonStyles.link} ${styles.btn}`} to={paths.home}>
                Checkout - $14.00 / mo
              </Link>
            </div>
          ) : (
            ""
          )}
          {match ? (
            <div className={styles.btn_wrapper}>
              <p>$14.00 / mo</p>
              <Link className={`${buttonStyles.link}`} to={paths.home}>
                Checkout
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

Modal.propTypes = {
  text: PropTypes.any,
  closeModal: PropTypes.func,
};

export default Modal;
