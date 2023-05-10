import React, {useEffect, useState} from "react";

import Banner from "./Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";
import Genders from "./Genders/Genders";
import Features from "./Features/Features";
import PopularCategories from "./PopularCategories/PopularCategories";
import Brands from "./Brands/Brands";
import Sort from "../../components/Sort/Sort";
import {CartItemT} from "../../@types";
import {fetching} from "../../Helpers/fetch";

const Main = () => {
    const [gender, setGender] = useState('man');
    const [products, setProducts] = useState<CartItemT[]>([]);

    useEffect(() => {
        fetching(`/products/new/${gender}`)
            .then(res => setProducts(res))
    }, [gender]);

    return (
        <main>
            <Banner/>
            <div className="container">
                <section className="products">
                    <div className="items-top">
                        <div>
                            <p className="subtitle">Недавние поступления</p>
                            <h2 className="title" style={{padding: 0}}>Новые товары</h2>
                        </div>
                        <Sort/>
                    </div>
                    <Genders gender={gender} setGender={setGender} />
                    <ProductList products={products} />
                    <div className="border"></div>
                </section>
                <Features />
                <PopularCategories />
                <Brands />
            </div>
        </main>
    );
};

export default Main;