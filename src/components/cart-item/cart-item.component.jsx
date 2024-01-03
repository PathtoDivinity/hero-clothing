import { useContext } from 'react';

import {CartItemContainer, ItemDetails, RemoveButton, QuantitySelect} from './cart-item.styles';

import { CartContext } from '../../contexts/cart.context';

const CartItem = ({cartItem, updateItemQuantity}) => {
    const {id, name, imageUrl, price, quantity} = cartItem;
    const {removeItemFromCart} = useContext(CartContext);

    const handleQuantityChange = (event) => {
        updateItemQuantity(id, parseInt(event.target.value));
    };
    const removeItemHandler = () => removeItemFromCart(cartItem);
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                <QuantitySelect 
                    id={`quantity-select-${id}`}
                    name={`quantity-${id}`}
                    value={quantity} 
                    onChange={handleQuantityChange}
                >
                    {[...Array(10).keys()].map(num => (
                        <option key={num + 1} value={num + 1}>
                            {num + 1}
                        </option>
                    ))}
                </QuantitySelect> x ${price}   
                </span>    
            </ItemDetails>
            <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>    
        </CartItemContainer>
            
    )
}

export default CartItem;