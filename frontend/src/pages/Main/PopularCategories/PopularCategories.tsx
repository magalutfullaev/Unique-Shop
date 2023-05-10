import React from 'react';

import {ArrowForward} from "@mui/icons-material";
import bag from "../../../assets/img/bag.png";
import shoes from "../../../assets/img/shoes.png";
import shirts from "../../../assets/img/shirts.png";
import cap from "../../../assets/img/cap.png";

import './popularCategories.scss'

const popularCategories = [
    {img: bag, title: 'Рюкзаки'},
    {img: shoes, title: 'Обувь'},
    {img: shirts, title: 'Футболки'},
    {img: cap, title: 'Головные уборы'},
]

const PopularCategories = () => {
    return (
        <section className='popular-categories'>
            <div className='items-top'>
                <div>
                    <h2 className='title'>Популярные категории</h2>
                </div>
                <button className='btn btn-link'>Все категории</button>
            </div>
            <div className='item-list'>
                {popularCategories.map((item, i) =>
                    <div className="popular-category" key={i}>
                        <img src={item.img} alt=""/>
                        <div className='item-content'>
                            <p className='middle-title'>{item.title}</p>
                            <button className='btn blue-hover'><ArrowForward/></button>
                        </div>
                    </div>
                )}
            </div>
            <div className='border'></div>
        </section>
    );
};

export default PopularCategories;