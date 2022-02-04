import React from 'react';
import Item from '../Item/Item';
// {Card} from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
export default function ItemList({items}) {
    
    return (
            <Grid container spacing={4}>
                {items.map(item => {
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Item item={item} key={item.id}></Item>
                        </Grid>
                    )
                })}
            </Grid>
    )

}
