import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/MyAccount.module.scss';

const MyAccount = () => {
	return (
		<>
		<Head>
			<title>My Account</title>
		</Head>
		<div className={styles["MyAccount"]}>
			<div className="MyAccount-container">
				<h1 className={styles["title"]}>My account</h1>
				<form action="/" className={styles["form"]}>
					<div>
						<label htmlFor="name" className={styles["label"]}>Name</label>
						<p className={styles["value"]}>Moises Navarro</p>
						<label htmlFor="email" className={styles["label"]}>Email</label>
						<p className={styles["value"]}>moisesinmdeveloper@hotmail.com</p>
						<label htmlFor="password" className={styles["label"]}>Password</label>
						<p className={styles["value"]}>*********</p>
					</div>
					<Link href="/NewPassword">
					<input type="submit" value="Edit" className={styles["secondary-button"] + " " + styles["login-button"]} />
					</Link>
				</form>
			</div>
		</div>
		</>
	);
};

export default MyAccount;