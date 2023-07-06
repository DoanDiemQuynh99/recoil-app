import React from 'react';
import { useRecoilValue } from 'recoil';
import { productListState } from '../../productState';

function ProductList(props) {
  const productList =  useRecoilValue(productListState);
  const handleAddToCart = (product) => {

  }

  return (
    <div>
      <h2>Product List:</h2>
      <ul>
        {productList.map((item) => {
          return (
            <>
              <li>
                {item.title}
              </li>
              <button 
                style={{ marginLeft: '1rem' }}
                onClick={() => handleAddToCart(item)}
              >Add to Cart</button>
            </>
          )
        })}
      </ul>
    </div>
  );
}

export default ProductList;