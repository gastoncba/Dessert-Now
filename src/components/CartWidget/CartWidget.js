import React from 'react'
import img from './postre.png'
import './CartWidget.css'

function CartWidget() {
    return (
        <img src={img} height='40px' width='40px' className='widget'/>
    )
}

export default CartWidget
