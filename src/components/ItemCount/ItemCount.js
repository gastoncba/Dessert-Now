import React, {useState} from 'react'
import {Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ItemCount.css';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';


function ItemCount({stock, initial, onAdd}) {

    const [init, setInit] = useState(initial);

    const agregar = () => {
        if(init !== stock) {
            setInit(init + 1);
        }
    }

    const quitar = () => {
        if(init !== initial) {
            setInit(init - 1);
        }
    }

    return ( 
        <div>
            <div className={'conteiner-count'}>
                <h4>Cantidad: {init}</h4>
                <div>
                    <IconButton onClick={agregar}>
                        <AddCircleRoundedIcon style={{color: '#e91e63', fontSize: '2.1rem'}}/>
                    </IconButton>
                    <IconButton onClick={quitar} className='pl-0'>
                        <RemoveCircleRoundedIcon style={{color: '#e91e63', fontSize: '2.1rem'}}/>
                    </IconButton>
                </div>
            </div>
            <Button onClick={() => {onAdd(init)}} className="agregar-carrito" variant="contained" color="secondary">
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount
