import React from 'react';
import styles from './../../components/Product/Product.module.scss'

const OptionSize = ({ sizes, selectedSize, setSelectedSize }) => {
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size, index) => (
          <li key={index}>
            <button
              className={selectedSize === size.name ? 'active' : ''}
              onClick={() => handleSizeChange(size.name)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionSize;