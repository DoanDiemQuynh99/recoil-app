import React from 'react';
import CartInfo from './components/CartInfor';
import ProductList from './components/ProductList';

Cart.propTypes = {};

function Cart() {
  return (
    <div>
      <ProductList />
      <CartInfo />
    </div>
  );
}

export default Cart;