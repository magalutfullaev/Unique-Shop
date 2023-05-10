import React from 'react';
import {CartItemT} from "../../@types";

import Product from "./Product/Product";

import './productList.scss'


const ProductList: React.FC<{products: CartItemT[]}> = ({products}) => {
    return (
        <div className='product-list'>
            {products.map((product) => <Product {...product} key={product._id} />)}
        </div>
    );
};

export default ProductList;