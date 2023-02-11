import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import logos from "@/logos/logo_yard_sale.svg";
import styles from '@/styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<>
		<Head>
			<title>New Password</title>
		</Head>
		<div className={styles["NewPassword"]}>
			<div className={styles["NewPassword-container"]}>
				<Image src={logos} alt="logo" className={styles["logo"]} />
				<h1 className={styles["title"]}>Create a new password</h1>
				<p className={styles["subtitle"]}>Enter a new password for your account</p>
				<form action="/" className={styles["form"]}>
					<label htmlFor="password" className={styles["label"]}>Password</label>
					<input type="password" id="password" placeholder="*********" className={styles["input"] + " " + styles["input-password"]} />
					<label htmlFor="new-password" className={styles["label"]}>Password</label>
					<input type="password" id="new-password" placeholder="*********" className={styles["input"] + " " + styles["input-password"]} />
					<Link type="submit"  value="Confirm" className={styles["primary-button"] + " " + styles["login-button"]} href="/PasswordRecovery"/>
				</form>
			</div>
		</div>
		</>
	);
};

export default NewPassword;