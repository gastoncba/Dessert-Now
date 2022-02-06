import React, {useState, useContext, useEffect} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import { CardContext } from '../../context/CardContext';
// import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//     },
//     title: {
//       flexGrow: 1,
//       marginTop: '9.8%',
//     },
//   }));

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

  // const classes = useStyles();
  
  useEffect(() => {
    fetch('https://api-dessert-now.herokuapp.com/api/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(e => console.log(e))
  }, [])

    return (
        // <div className={classes.root, 'menu'}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{backgroundColor: '#e91e63'}}>
            <Toolbar>
            <Link to={`/`} className={'link-conteiner'}>
              {/* <IconButton edge="start" color="inherit" aria-label="menu">
                  <CartWidget></CartWidget>
              </IconButton> */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
              <Typography variant="h6" component='div' sx={{display:{xs:'none', sm:'block'}, flexGrow:1}}>
                  Dessert Now!
              </Typography>
            </Link>
            <Button className={'categoria'} aria-controls="menu-category" aria-haspopup="true" onClick={handleClick}
              style={{
              color:'white',  
              textTransform: 'lowercase', 
              fontSize: '120%'}}>
              Categorias
            </Button>
            {cant > 0 && (
              <Link to={`/cart`}>
              <IconButton>
              <Badge badgeContent={cant} color='primary'>
              <ShoppingCartIcon fontSize='large' style={{ color: 'white' }}></ShoppingCartIcon>
              </Badge>
              </IconButton>
              </Link>
            )}
            </Toolbar>
        </AppBar>

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
        </Box>
    // </div>
    )
}

export default NavBar
