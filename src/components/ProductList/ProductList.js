import React from 'react';
import Grid from '@mui/material/Grid';

import Product from '../Product/Product';

export default function ProductList({items}) {    
    return (
            <Grid container spacing={4}>
                {items.map(item => {
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={4} key={item._id}>
                            <Product item={item} key={item.id} />
                        </Grid>
                    )
                })}
            </Grid>
    )

}
