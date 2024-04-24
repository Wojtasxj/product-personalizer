import React from 'react';
import styles from './../../components/Product/Product.module.scss'

const OptionColor = ({ colors, selectedColor, setSelectedColor }) => {
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color, index) => (
          <li key={index}>
            <button
              style={{ backgroundColor: color, border: selectedColor === color ? '2px solid black' : 'none' }}
              onClick={() => handleColorChange(color)}
            >
              {selectedColor === color && <span>&#10003;</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
