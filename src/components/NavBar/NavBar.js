import React, {useState, useContext} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import { CardContext } from '../../CardContext';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginTop: '9.8%',
      marginRight: theme.spacing(4),
    },
  }));

function NavBar() {

  const {resetCant} = useContext(CardContext); 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

    return (
        <div className={classes.root, 'menu'}>
        <AppBar position="fixed" style={{backgroundColor: '#e91e63'}}>
            <Toolbar>
            <div className={'group-menu'}>
            <Link to={`/`} className={'link-conteiner'}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <CartWidget></CartWidget>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                  Dessert Now!
              </Typography>
            </Link>
            <Button className={'categoria'} aria-controls="menu-category" aria-haspopup="true" onClick={handleClick}>
               Categorias
            </Button>
            </div>
            {resetCant() > 0 && (
              <Link to={`/cart`}>
              <IconButton>
              <Badge badgeContent={resetCant()} color='primary'>
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
            <MenuItem onClick={handleClose}>
                <NavLink to={"/category/Tortas"} style={{ textDecoration: 'none', color: 'black'}}>
                            Tortas
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to={"/category/Helados"} style={{ textDecoration: 'none', color: 'black'}}>
                            Helados
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to={"/category/Postres"} style={{ textDecoration: 'none', color: 'black'}}>
                            Postres
                </NavLink>
            </MenuItem>

        </Menu>
    </div>
    )
}

export default NavBar
