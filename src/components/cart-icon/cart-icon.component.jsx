import { CartContext } from '../../contexts/cart.context'

import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles'
import { useContext } from 'react'
// import {ReactCompnent as ShoppingIcon} from '../../assets/shopping-bag.svg'




const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
            
        </CartIconContainer>
    )
}

export default CartIcon;