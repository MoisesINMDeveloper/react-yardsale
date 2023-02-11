import ProductItem from '@/components/ProductItem';
import useGetProducts from '@/hooks/useGetProducts';
import styles from '@/styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className={styles.maincontainer}>
			<div className={`${styles.ProductList}`}>
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
};

export default ProductList;