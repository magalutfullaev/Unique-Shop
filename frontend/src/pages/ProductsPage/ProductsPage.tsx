import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetching} from "../../Helpers/fetch";
import ProductList from "../../components/ProductList/ProductList";
import Path from "../../components/Path/Path";

import './productsPage.scss'
import Filter from "../../components/Filter/Filter";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetching(`/products/${params.gender}/${params.category || ''}`)
            .then(res => setProducts(res));
    }, [params])

    return (
        <main>
            <Path params={params} />
            <div className="container">
                <div className="products-page">
                    <ProductList products={products} />
                    <Filter gender={params.gender}/>
                </div>
            </div>
        </main>
    );
};

export default ProductsPage;