import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import Image from "next/image";
import Link from 'next/link';
import OrderItem from '@/components/OrderItem';
import moArrow from "@/icons/flechita.svg";
import styles from "@/styles/MyOrder.module.scss";


const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={styles["MyOrder"]}>
			<div className={styles["title-container"]}>
				<Image
					src={moArrow}
					alt="arrow"
					onClick={() => setToggleOrders(!toggleOrders)}
					className={styles["CloseOrders"]}
				/>
				<p className={styles["title"]}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
			</div>
			<div>
				<div className={styles["order"]}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles["primary-button"]} href="/Checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;