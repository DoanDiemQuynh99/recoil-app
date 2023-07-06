import React from 'react';
import { useRecoilValue } from 'recoil';
import { cardState } from '../../cartState';

function CartInfo(props) {
  const listCart = useRecoilValue(cardState)
  return (
    <div>
      <h2>Cart info:</h2>

      <ul className="cart-items">
        {listCart.map((item) => (
          <li>
            {item.title}: {item.quantity}
          </li>
        ))}
      </ul>

      <p>TOTAL:  VND</p>
    </div>
  );
}

export default CartInfo;