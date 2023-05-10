import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetching} from "../../Helpers/fetch";
import ProductList from "../../components/ProductList/ProductList";
import Path from "../../components/Path/Path";
import MultiRange from "../../components/MultiRange/MultiRange";

import './productsPage.scss'

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
                    <div className="products-filter">
                        <h4 className="middle-title">Цена</h4>
                        <MultiRange
                            min={1}
                            max={200}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                        <div className="border" style={{margin: 0}}></div>
                        <button className="btn btn-outline">Сбросить фильтры</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductsPage;