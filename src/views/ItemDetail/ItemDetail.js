import React from 'react'
import './ItemDetail.css'
import 'semantic-ui-css/semantic.min.css'

function ItemDetail({item}) {
    return (
        <div className='item-detail'>
            <div class="ui items">
            <div class="item">
                <div class="image">
                    <img src="https://images.clarin.com/2020/02/11/F16NA-Sz_1256x620__1.jpg"/>
                </div>
                <div class="content">
                <p class="header">{item.name}</p>
                <div class="meta">
                    <span>Description</span>
                </div>
                <div class="description">
                    <p>{item.description}</p>
                </div>
                <div class="description">
                    <p>{`Precio: $${item.price}`}</p>
                </div>
                </div>
            </div>
        </div> 
        </div>
        
    )
}

export default ItemDetail
