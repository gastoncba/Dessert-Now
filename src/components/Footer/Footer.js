import React from 'react'
import { Icon } from 'semantic-ui-react'
import './Footer.css'

function Footer() {
    return (
        <div className='text-center container-footer'>
            <h5 className='footer-title'>Síguenos en nuestras redes</h5>
            <Icon name='facebook official' className='icon-footer' />
            <Icon name='instagram' className='icon-footer' />
            <Icon name='twitter' className='icon-footer' />
        </div>
    )
}

export default Footer
