import styles from "./../styles/Shimmer.module.scss";
import React from "react";
import PropTypes from "prop-types";

const Shimmer = function (props) {
  const { removeShimmer, toTop, height } = props;

  const layout = React.useRef(null);
  const cover = React.useRef(null);
  toTop();

  React.useEffect(() => {
    const body = document.body;
    body.classList.add(styles.overflow_hidden);

    if (removeShimmer) {
      layout.current.classList.add(styles.hide);
      cover.current.classList.add(styles.hide);
      body.classList.remove(styles.overflow_hidden);
      toTop();
    }
  }, [removeShimmer, toTop]);

  return (
    <>
      <div className={styles.cover} ref={cover}></div>
      <div className={styles.shimmer} ref={layout}>
        <div className={styles.wrapper}>
          <div className={styles.nav}></div>
          {/* prettier-ignore */}
          <div className={styles.hero} style={{ height: `${height}px` }}></div>
          <div className={styles.collection_title}></div>

          <div className={styles.boxes_wrapper}>
            <div className={styles.content_wrapper}>
              <div className={styles.img}></div>
              <div className={styles.name}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.content_wrapper}>
              <div className={styles.img}></div>
              <div className={styles.name}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.content_wrapper}>
              <div className={styles.img}></div>
              <div className={styles.name}></div>
              <div className={styles.text}></div>
            </div>

            <div className={styles.content_wrapper}>
              <div className={styles.img}></div>
              <div className={styles.name}></div>
              <div className={styles.text}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;

Shimmer.propTypes = {
  toTop: PropTypes.func,
  removeShimmer: PropTypes.bool,
  height: PropTypes.number,
};
