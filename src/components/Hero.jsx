import styles from "./../styles/Hero.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import homeHeroMobile from "./../assets/home/mobile/image-hero-coffeepress.jpg";
import homeHeroTablet from "./../assets/home/tablet/image-hero-coffeepress.jpg";
import homeHeroDesktop from "./../assets/home/desktop/image-hero-coffeepress.jpg";

import aboutHeroMobile from "./../assets/about/mobile/image-hero-whitecup.jpg";
import aboutHeroTablet from "./../assets/about/tablet/image-hero-whitecup.jpg";
import aboutHeroDesktop from "./../assets/about/desktop/image-hero-whitecup.jpg";

import planHeroMobile from "./../assets/plan/mobile/image-hero-blackcup.jpg";
import planHeroTablet from "./../assets/plan/tablet/image-hero-blackcup.jpg";
import planHeroDesktop from "./../assets/plan/desktop/image-hero-blackcup.jpg";
import { paths } from "../pages/paths";

const Hero = function (props) {
  let imagesLoaded = 0;
  const imgs = 1;

  const handleImageLoad = function () {
    imagesLoaded++;
    if (imagesLoaded === imgs) props.checkImagesLoad();
  };

  let mobile, tablet, desktop, alt;

  if (props.page === "home") {
    mobile = homeHeroMobile;
    tablet = homeHeroTablet;
    desktop = homeHeroDesktop;
    alt = "A french press coffee with some coffee beans";
  }

  if (props.page === "about") {
    mobile = aboutHeroMobile;
    tablet = aboutHeroTablet;
    desktop = aboutHeroDesktop;
    alt = "A cup of coffee with some biscuits";
  }

  if (props.page === "plan") {
    mobile = planHeroMobile;
    tablet = planHeroTablet;
    desktop = planHeroDesktop;
    alt = "Cappuccino";
  }

  return (
    <section className={styles.section}>
      <div
        className={`${styles.wrapper} ${props.page === "home" ? styles.home : ""} ${
          props.page === "about" ? styles.about : ""
        } ${props.page === "plan" ? styles.plan : ""}`}
      >
        <picture>
          <source srcSet={mobile} media="(max-width: 767px)" />
          <source srcSet={tablet} media="(max-width: 1109px)" />

          <img className={styles.homeHeroImg} src={desktop} onLoad={handleImageLoad} alt={alt} />
        </picture>

        <div className={styles.content_wrapper}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.text}>{props.text}</p>

          {props.button ? (
            <Link className={styles.link} to={paths.plan}>
              {props.button}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.any,
  checkImagesLoad: PropTypes.func,
};
