import React from "react";
import Link from "next/link";
import styles from "@/styles/menu.module.scss";

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/" className={styles.title}>My orders</Link>
				</li>
				<li>
					<Link href="/MyAccount">My account</Link>
				</li>
				<li>
					<Link href="/">Sign out</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;