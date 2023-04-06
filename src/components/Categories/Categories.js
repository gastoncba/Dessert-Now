import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Categories.css'

function Categories() {
    const [categories, setCategories] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
        
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        fetch('https://api-products-dessert-now-production.up.railway.app/api/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(e => console.log(e))
    }, [])

    return(
        <Container className='mb-2 pl-0'>
            <Button 
                variant='outlined' 
                sx={[
                    {
                        borderColor: '#e91e63', 
                        color: '#e91e63', 
                    }, 
                    {
                        ':hover': {
                            borderColor: '#e91e63',
                            color: '#e91e63'
                        }
                    }
                
                ]} 
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}>
                <div className='category-title'>Categorias</div>
            </Button>

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
        </Container>
    );
}

export default Categories;
