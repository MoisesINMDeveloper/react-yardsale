import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import logo from "@/logos/logo_yard_sale.svg";
import styles from '@/styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
	return (
		<>
		<Head>
			<title>Password Recovery</title>
		</Head>
		<div className={styles["PasswordRecovery"]}>
			<div className={styles["PasswordRecovery-container"]}>
				<Image src={logo} alt="logo" className={styles["logo"]} />
				<h1 className={styles["title"]}>Password recovery</h1>
				<p className={styles["subtitle"]}>Inform the email address used to create your account</p>
				<form action="/" className={styles["form"]}>
					<label htmlFor="email" className={styles["label"]}>Email address</label>
					<input type="text" id="email" className={styles["input"] + " " + styles["input-email"]} />
					<Link href="/SendEmail" >
					<input type="submit" value="Confirm" className={styles["primary-button"] + " " + styles["login-button"]} />
					</Link>
				</form>
			</div>
		</div>
		</>
	);
};

export default PasswordRecovery;