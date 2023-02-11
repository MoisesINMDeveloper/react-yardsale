import OrderItem from '@/components/OrderItem';
import Head from "next/head";
import styles from '@/styles/Orders.module.scss';

const Orders = () => {
	return (
		<>
		<Head>
			<title>Orders</title>
		</Head>
		<div className={styles["Orders"]}>
			<div className={styles["Orders-container"]}>
				<h1 className={styles["title"]}>My orders</h1>
				<div className={styles["Orders-content"]}>
					<OrderItem />
				</div>
			</div>
		</div>
		</>
	);
};

export default Orders;