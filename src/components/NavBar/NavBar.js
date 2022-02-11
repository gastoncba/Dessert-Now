import React, {useContext} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { CardContext } from '../../context/CardContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

function NavBar() {

    const {cant} = useContext(CardContext); 
    
    return (
        <AppBar sx={{background: '#e91e63'}} position='sticky'>
          <Toolbar>
            <Box sx={{flexGrow: 1}}>
              <Link to={`/`} style={{textDecoration: 'none', color: 'white'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                <IconButton color="inherit" edge='start' size='large'>
                  <CartWidget></CartWidget>
                </IconButton>
                <Typography variant='h5'>
                  <div className='main-title'>Dessert Now!</div>
                </Typography>
                </Box>
              </Link>
            </Box>
            {
              cant > 0 && 
              <Link to={`/cart`}>
                <IconButton sx={{color: 'white'}} size='large'>
                  <Badge badgeContent={cant} color='primary'>
                    <ShoppingCartIcon></ShoppingCartIcon>
                  </Badge>
                </IconButton>
              </Link>
            }
          </Toolbar>
        </AppBar>
    )
}

export default NavBar
