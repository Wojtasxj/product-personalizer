import React, { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import styles from './Product.module.scss'

const Product = ({ name, title, colors, sizes, basePrice }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className={styles.product}>
      <ProductImage name={name} title={title} selectedColor={selectedColor} />
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {basePrice}$</span>
      </header>
      <ProductForm
        colors={colors}
        sizes={sizes}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        setSelectedColor={setSelectedColor}
        setSelectedSize={setSelectedSize}
        basePrice={basePrice}
      />
    </div>
  );
};

export default Product;