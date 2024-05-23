import React from 'react';
import styles from './../Product/Product.module.scss';

const ProductImage = ({ name, title, selectedColor }) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`} alt={title} />
    </div>
  );
};

export default ProductImage;