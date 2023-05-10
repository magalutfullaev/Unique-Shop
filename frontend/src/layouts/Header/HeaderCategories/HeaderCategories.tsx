import React, {useEffect, useState} from 'react';

import './HeaderCategories.scss';
import {SITE_URL} from "../../../data/consts";
import {CategoryT} from "../../../@types";
import {Link} from "react-router-dom";


const HeaderCategories: React.FC<{status: boolean, gender: string}> = ({status, gender}) => {
    const [categories, setCategories] = useState<CategoryT[] | undefined>([]);

    useEffect(() => {
        fetch(`${SITE_URL}api/categories`)
            .then((res) => res.json())
            .then(res => setCategories(res))
    }, [])

    return (
        <div className={`header-categories${status ? ' active' : ''}`}>
            <div className="container">
                <div className="header-categories-inner">
                    {categories?.map((category, i) =>
                        <div className='header-categories-item' key={i}>
                            <p>{category.title}</p>
                            <ul>
                                {category.data.map(item =>
                                    <li className='header-categories-item' key={item._id}>
                                        <Link className='category-link' to={`/products/${gender}/${item.value}`}>{item.text}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderCategories;