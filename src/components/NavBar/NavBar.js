import React, {useState, useContext, useEffect} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import { CardContext } from '../../context/CardContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

function NavBar() {

  const {cant} = useContext(CardContext); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch('https://api-dessert-now.herokuapp.com/api/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(e => console.log(e))
  }, [])

    return (
        <AppBar sx={{background: '#e91e63'}}>
          <Toolbar>
            <Link to={`/`} style={{textDecoration: 'none', color: 'white'}}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
              <IconButton color="inherit" edge='start' size='large'>
                <CartWidget></CartWidget>
              </IconButton>
              <Typography variant='h5' sx={{mr: 2, display:{xs: 'none', sm: 'block'}}}>
                <div className='main-title'>Dessert Now!</div>
              </Typography>
              </Box>
            </Link>
            <Box sx={{flexGrow: 1}}>
              <Button onClick={handleClick} style={{color: 'white'}}>
                <div className='category-title'>Categorias</div>
              </Button>
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

          <Menu
            id="menu-category"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          {categories.map(cat => {
            return (
              <MenuItem onClick={handleClose} key={cat._id}>
                <NavLink to={`/category/${cat.name}`} style={{ textDecoration: 'none', color: 'black'}}>
                  {cat.name}
                </NavLink>
              </MenuItem>
            )
          })}
          </Menu>
        </AppBar>
    )
}

export default NavBar
