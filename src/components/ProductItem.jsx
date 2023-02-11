import { useContext } from 'react';
import Image from "next/image";
import AppContext from '@/context/AppContext';
import btAddCart from "@/icons/bt_add_to_cart.svg";
import btAddedCart from "@/icons/bt_added_to_cart.svg";
import styles from '@/styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);
	const itsProductAdded = () => state.cart.some((item) => item.id === product.id) ? true : false;
	const handleClick = (item) => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	};


	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width="240" height="240" />
			<div className={styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{itsProductAdded() ? (
						<Image src={btAddedCart} alt="" className={styles['btAddedCart']} />
					) : (
						<Image src={btAddCart} alt="" className={styles['btAddCart']} />
					)}
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;