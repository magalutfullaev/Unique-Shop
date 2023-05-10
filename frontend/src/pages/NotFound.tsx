import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <main style={{display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{color: 'var(--gray)', fontSize: 80}}>404</h1>
            <h1 className="title">Страница не найдено</h1>
            <Link to='./' className="btn btn-solid">Вернуться на главную</Link>
        </main>
    );
};

export default NotFound;