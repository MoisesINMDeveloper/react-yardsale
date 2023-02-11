import { useState, useContext } from 'react';
import Link from "next/link";
import menu from "@/icons/icon_menu.svg";
import Image from "next/image";
import Menu from "@/components/Menu";
import logo from "@/logos/logo_yard_sale.svg";
import AppContext from "@/context/AppContext";
import MyOrder from '@/containers/MyOrder';
import shoppingCart from "@/icons/icon_shopping_cart.svg";
import MobileMenu from '@/components/MobileMenu';
import styles from "@/styles/Header.module.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { state: { cart } } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleToggleMobileMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu);
    };

    return (
        <nav className={styles.nav}>
            <Image src={menu} alt="menu" className={styles.menu} onClick={handleToggleMobileMenu} />
            <div className={styles.navbarleft}>
                <Link href="/" >
                    <Image src={logo} alt="logo" className={styles.navlogo} />
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.navbarright}>
                <ul>
                    <li className={styles.navbaremail} onClick={handleToggle} >
                        moisesinmdeveloper@hotmail.com
                    </li>
                    <li
                        className={styles.navbarshoppingcart}
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                        <Image src={shoppingCart} alt="shopping cart" />
                        {cart.length > 0 && <div>{cart.length > 9 ? '+9' : cart.length}</div>}
                    </li>
                </ul>
            </div>
            {toggle ? <Menu /> : ""}
            {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
            {toggleMobileMenu ? <MobileMenu /> : ""}
        </nav>
    );
};

export default Header;