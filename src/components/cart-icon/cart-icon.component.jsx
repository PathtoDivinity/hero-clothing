import { UserContext } from '../../contexts/user.context'

import {ReactComponent as ShoppingIcon} from '../../assets/crown.svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'
import { useContext } from 'react'
// import {ReactCompnent as ShoppingIcon} from '../../assets/shopping-bag.svg'

// console.llog(ShoppingIcon)
const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
            
        </div>
    )
}

export default CartIcon;