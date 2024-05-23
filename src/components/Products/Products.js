//import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';


const Products = () => {
  //const [products]  = useState(productsData);
  console.log('Products is re-rendered');
  return (
    <section>
      {productsData.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          title={product.title}
          colors={product.colors}
          sizes={product.sizes}
          basePrice={product.basePrice}
          selectedColor={product.colors[0]}
          selectedSize={product.sizes[0].name}
        />
      ))}
    </section>
  );
};

export default Products;