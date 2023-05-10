import React, {useEffect, useState} from 'react';
import {fetching} from "../../Helpers/fetch";
import {Link} from "react-router-dom";

import './path.scss';

const Path: React.FC<{params: any}> = ({params}) => {
    const [category, setCategory] = useState('')
    const gender = params.gender === 'man' ? 'Мужской' : params.gender === 'woman' ? 'Женский' : params.gender === 'unisex' ? 'Унисекс' : ''

    useEffect(() => {
        fetching(`/categories/${params.category}`)
            .then(res => setCategory(res[0].text))
    }, [params])


    return (
        <div className='path'>
            <div className="container">
                <h1 className="title" style={{padding: 0}}>{params.category ? category : gender}</h1>
                <p className='subtitle'>
                    <Link to='/'>Главная</Link>/
                    <Link to={`/products/${params.gender}`}>{gender}</Link>
                    {params.category ?
                        <>
                            /<Link to={`/products/${params.gender}/${params.category}`}>{category}</Link>
                        </> : null
                    }
                </p>
            </div>
        </div>
    );
};

export default Path;