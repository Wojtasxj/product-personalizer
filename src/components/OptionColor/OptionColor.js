import React from 'react';
import styles from './../../components/Product/Product.module.scss'
import { useMemo } from 'react';

const OptionColor = ({ colors, selectedColor, setSelectedColor }) => {
  const handleColorChange = (color) => {
    console.log(`Selected color before setting state: ${color}`);
    setSelectedColor(color);
    console.log(`Selected color after setting state: ${color}`);
  };

  const getButtonClasses = useMemo(() => {
    return (color) => {
      return `${styles.choices.button} ${selectedColor === color ? styles.active : ''} ${styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`]}`;
    };
  }, [selectedColor]);

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color, index) => (
          <li key={index}>
            <button className={getButtonClasses(color)} 
              onClick={() => handleColorChange(color)}
            >
              {selectedColor === color}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
