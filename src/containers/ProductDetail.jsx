import ProductInfo from '@/components/ProductInfo';
import pdIconClose from "@/icons/icon_close.png";
import Link from "next/link";
import styles from '@/styles/ProductDetail.module.scss';

const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className="ProductDetail-close">
				<Link src={pdIconClose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};

export default ProductDetail;