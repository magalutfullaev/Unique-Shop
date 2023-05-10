import React, {useEffect, useState} from 'react';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material/';

import './menuCategories.scss';
import {CategoryT} from "../../../../@types";
import {fetching} from "../../../../Helpers/fetch";
import {Link} from "react-router-dom";

type MenuCategoriesT = {
    genderName: string,
    genderValue: string
    setGenderName: React.Dispatch<React.SetStateAction<string>>,
}

const MenuCategories: React.FC<MenuCategoriesT> = ({genderName, setGenderName, genderValue}) => {
    const [categoryIndex, setCategoryIndex] = useState<number>(0);
    const [subCategory, setSubCategory] = useState<boolean>(false)
    const [categoriesData, setCategoriesData] = useState<CategoryT[]>([])

    useEffect(() => {
        fetching('categories')
            .then(res => setCategoriesData(res))
    }, [])

    if (!categoriesData.length) {
        return (
            <h1>Данные не найдены</h1>
        )
    }

    return (
        <>
            <div className={`menu-categories${genderName ? ' active' : ''}`}>
                <button className='btn' onClick={() => setGenderName( '')}><KeyboardArrowLeft/> Назад</button>
                <div className="border"></div>
                <h4 className="middle-title">{genderValue}</h4>
                {categoriesData.map((category, i) =>
                    <button key={i} className='menu-link' onClick={() => {
                        setCategoryIndex(i)
                        setSubCategory(true)
                    }}>
                        {category.title}<KeyboardArrowRight/>
                    </button>
                )}
            </div>
            <div className={`menu-categories${subCategory ? ' active' : ''}`}>
                <button className='btn' onClick={() => setSubCategory(false)}><KeyboardArrowLeft/> Назад</button>
                <div className="border"></div>
                <h4 className="middle-title">{categoriesData[categoryIndex].title}</h4>
                {categoriesData[categoryIndex].data.map((category, i) =>
                    <Link key={i} className='menu-link menu-close' to={`/products/${genderName}/${category.value}`}>{category.text}</Link>
                )}
            </div>
        </>
    );
};

export default MenuCategories;