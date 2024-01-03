import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDownContainer, 
  EmptyMessage, 
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateItemQuantity} = useContext(CartContext);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  

  const goToCheckoutHandler = () => {
    toggleIsCartOpen();
    navigate('/checkout');
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCartOpen(false); // Close the cart if clicked outside
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsCartOpen]);

  return (
    <CartDropDownContainer ref={dropdownRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} updateItemQuantity={updateItemQuantity} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;