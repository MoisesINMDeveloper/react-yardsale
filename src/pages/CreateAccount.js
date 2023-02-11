import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/CreateAccount.module.scss';

const CreateAccount = () => {
	return (
		<>
		<Head>
			<title>Create Account</title>
		</Head>
		<div className={styles["CreateAccount"]}>
			<div className={styles["CreateAccount-container"]}>
				<h1 className={styles["createAccount-title"]}>My account</h1>
				<form action="/" className={styles["createAccount-form"]}>
					<div className={styles.form}>
						<label htmlFor="name" className={styles["label"]}>Name</label>
						<input type="text" id="name" placeholder="Moises Navarro" className={`${styles.input} ${styles["input-name"]}`} />
						<label htmlFor="email" className={styles["label"]}>Email</label>
						<input type="text" id="email" placeholder="moisesinmdeveloper@hotmail.com" className={`${styles.input} ${styles["input-email"]}`}/>
						<label htmlFor="password" className={styles["label"]}>Password</label>
						<input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles["input-password"]}`} />
					</div>
					<Link type="submit" value="Create" className={`${styles["primary-button"]+" "+ ["login-button"]}`} href="/Login"/>
				</form>
			</div>
		</div>
		</>
	);
};

export default CreateAccount;