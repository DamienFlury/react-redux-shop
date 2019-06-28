import React from 'react';
import { useSelector } from 'react-redux';
import Typography from './styled-components/Typography';

const Products = () => {
    const products = useSelector(state => state.products);
    return (
        <div>
            <Typography variant="h1">Products</Typography>
            {products.map(item => <p key={item.id}>{item.name}</p>)}
        </div>
    )
};

export default Products;