import { useState } from 'react';
import Link from "next/Link";
import Image from "next/image";
import closeIcon from '@/icons/icon_close.png';
import styles from "@/styles/MobileMenu.module.scss";

const MenuMobile = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (func, obj) => {
    func(!obj);
  };

  if (toggle) {
    return (
      <div className={styles.MobileMenu}>
        <figure onClick={() => handleToggle(setToggle, toggle)} className={`${styles.MobileMenu__close}`}>
          <Image className={styles.MobileMenu__images} src={closeIcon} alt="Close menu" />
        </figure>
        <ul className={`${styles.MobileMenu__categories} ${styles.list}`}>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">CATEGORIES</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">All</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">Clothes</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">Electronics</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">Furnitures</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">Toys</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">Others</Link>
          </li>
        </ul>
        <ul className={`${styles.MobileMenu__account} ${styles.list}`}>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">My orders</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={styles["list__link"]} href="/">My account</Link>
          </li>
        </ul>
        <ul className={`${styles.MobileMenu__info} ${styles.list}`}>
          <li className={styles["list__item"]}>
            <Link className={`${styles.list__link} ${styles.email}`} href="/" >moisesinmdeveloper@hotmail.com</Link>
          </li>
          <li className={styles["list__item"]}>
            <Link className={`${styles.list__link} ${styles["sign-out"]}`} href="/" >Sign out</Link>
          </li>
        </ul>
      </div >
    );

  };

};

export default MenuMobile;