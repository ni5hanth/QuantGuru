import React from "react";
import { useAnimate, motion } from "framer-motion";
import { SiFacebook, SiYoutube, SiGmail } from "react-icons/si";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <LinkBox text="About Us" href="#" />
          <LinkBox text="Contact Us" href="#" />
        </div>
        <div className={styles.rightSection}>
          <LinkBox Icon={SiYoutube} href="#" />
          <LinkBox Icon={SiGmail} href="#" />
          <LinkBox Icon={SiFacebook} href="#" />
        </div>
      </div>
      <motion.div 
        className={styles.copyright}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        © 2024 <span className={styles.companyName}>QuantGuru</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, text, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();
    const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" };
    const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" };
    const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" };
    const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" };

    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort((a, b) => a.proximity - b.proximity);
    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <motion.a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={Icon ? styles.iconLink : styles.textLink}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon ? <Icon className={styles.icon} /> : <span className={styles.linkText}>{text}</span>}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className={styles.linkOverlay}
      >
        {Icon ? <Icon className={styles.icon} /> : <span className={styles.linkText}>{text}</span>}
      </div>
    </motion.a>
  );
};

export default Footer;