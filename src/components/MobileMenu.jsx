import Link from "next/link";
import styles from "@/styles/MobileMenu.module.scss";

const MobileMenu = () => {
    return (
        <div className={styles.mobilemenu}>
            <ul>
                <li>
                    <Link href="/">CATEGORIES</Link>
                </li>
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
                    <Link href="/">Other</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="" className="email">moisesinmdeveloper@hotmail.com</Link>
                </li>
                <li>
                    <Link href="" className="sign-out">Sign out</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;