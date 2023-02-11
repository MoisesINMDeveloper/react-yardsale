import { useRef } from 'react';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import logo from "@/logos/logo_yard_sale.svg";
import styles from '@/styles/Login.module.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	};

	return (
		<>
		<Head>
			<title>Login</title>
		</Head>
		<div className={styles["Login"]}>
			<div className={styles["Login-container"]}>
				<Image src={logo} alt="logo" className={styles["login-logo"]} />
				<form action="/" className={styles["form"]} ref={form}>
					<label htmlFor="email" className={styles["label"]}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles["input"] + " " + styles["input-email"]} />
					<label htmlFor="password" className={styles["label"]}>Password</label>
					<input type="password" name="password" placeholder="*********" className={styles["input"] + " " + styles["input-password"]}/>
					<Link href="/" type="button">
					<input
						type="submit"
						value="Log in"
						className={styles["primary-button"] + " " + styles["login-button"]}
						onClick={handleSubmit} />
					</Link>
					<Link href="/NewPassword">Forgot my password</Link>
				</form>
				<button className={styles["secondary-button"] + " " + styles["signup-button"]} >
					Sign up
				</button>
			</div>
		</div>
		</>
	);
};

export default Login;