import React from 'react';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import styles from './../../components/Product/Product.module.scss'

const ProductForm = ({ colors, sizes, selectedColor, selectedSize, setSelectedColor, setSelectedSize, basePrice }) => {
  return (
    <form className=''>
      <OptionSize sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <OptionColor colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;