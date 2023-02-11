import email from "@/icons/email.svg";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/SendEmail.module.scss';


const SendEmail = () => {
	return (
		<>
		<Head>
			<title>Send Email</title>
		</Head>
		<div className={styles["SendEmail"]}>
			<div className={styles["SendEmail-form-container"]}>
				<h1 className={styles["SendEmail-title"]}>Email has been sent!</h1>
				<p className={styles["SendEmail-subtitle"]}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles["email-image"]}>
					<Image src={email} alt="email" />
				</div>
				<button className={styles["primary-button"]+ " " + styles["login-button"]}>
                    <Link href="/Login">
                        Login
                    </Link></button>
				<p className={styles["resend"]}>
					<span>Did not receive the email?</span>
					<Link href="/PasswordRecovery">Resend</Link>
				</p>
			</div>
		</div>
		</>
	);
};

export default SendEmail;