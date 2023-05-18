import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import MultiRange from "../MultiRange/MultiRange";

import "./filter.scss";
import {RootState} from "../../store";
import {fetching} from "../../Helpers/fetch";
import {CategoryT} from "../../@types";
import {setCategoryType} from "../../store/slice/appSlice";
import Accordion from "../Accordion/Accordion";

const Filter = (props: { gender: string | undefined }) => {
    const dispatch = useDispatch();
    const {categoryType} = useSelector((state: RootState) => state.appSlice);
    const [filterAccordion, setFilterAccordion] = useState(0);
    const [categories, setCategories] = useState<CategoryT[]>([]);

    useEffect(() => {
        fetching(`categories/type/${categoryType}`)
            .then(res => setCategories(res));
    }, [categoryType]);

    return (
        <div className="filter">
            <Accordion title={'Цена'} state={filterAccordion} setState={setFilterAccordion} index={1}
                       children={<MultiRange
                           min={1}
                           max={200}
                           onChange={({min, max}) => console.log(`min = ${min}, max = ${max}`)}
                       />}/>
            <Accordion title={'Категории'} state={filterAccordion} setState={setFilterAccordion} index={2} children={<ul>
                           {categories.map(item =>
                               <li key={item._id}>
                                   <Link className="blue-hover" onClick={() => dispatch(setCategoryType(item.type))}
                                         to={`/products/${props.gender}/${item.value}`}>{item.text}</Link>
                               </li>
                           )}
                       </ul>}/>

            {categoryType === "shoes" ?
                <Accordion title={'Размер обуви'} state={filterAccordion} setState={setFilterAccordion} index={3} children={<div className="filter-list">
                    <button className="btn btn-icon blue-hover">UE 46</button>
                    <button className="btn btn-icon blue-hover">EU 45</button>
                    <button className="btn btn-icon blue-hover">EU 44.5</button>
                    <button className="btn btn-icon blue-hover">EU 44</button>
                    <button className="btn btn-icon blue-hover">EU 43</button>
                    <button className="btn btn-icon blue-hover">EU 42.5</button>
                    <button className="btn btn-icon blue-hover">EU 42</button>
                    <button className="btn btn-icon blue-hover">EU 41</button>
                    <button className="btn btn-icon blue-hover">EU 40</button>
                    <button className="btn btn-icon blue-hover">EU 39</button>
                </div>}/> :
                <Accordion title={'Размер одежды'} state={filterAccordion} setState={setFilterAccordion} index={3} children={<div className="filter-list">
                    <button className="btn btn-icon blue-hover">XXL</button>
                    <button className="btn btn-icon blue-hover">XS</button>
                    <button className="btn btn-icon blue-hover">XL</button>
                    <button className="btn btn-icon blue-hover">M</button>
                    <button className="btn btn-icon blue-hover">US 42</button>
                    <button className="btn btn-icon blue-hover">US 40</button>
                    <button className="btn btn-icon blue-hover">US 39</button>
                    <button className="btn btn-icon blue-hover">US 38</button>
                    <button className="btn btn-icon blue-hover">US 36</button>
                    <button className="btn btn-icon blue-hover">US 34</button>
                    <button className="btn btn-icon blue-hover">US 33</button>
                    <button className="btn btn-icon blue-hover">US 32</button>
                    <button className="btn btn-icon blue-hover">US 31</button>
                    <button className="btn btn-icon blue-hover">US 30</button>
                    <button className="btn btn-icon blue-hover">US 29</button>
                    <button className="btn btn-icon blue-hover">US 28</button>
                    <button className="btn btn-icon blue-hover">US 27</button>
                </div>}/>
            }

            <Accordion title={'Цвета'} state={filterAccordion} setState={setFilterAccordion} index={4}
                       children={
                <>
                    <div className="filter-list">
                <button className="btn-color" style={{background: "red"}}></button>
                <button className="btn-color" style={{background: "blue"}}></button>
                <button className="btn-color" style={{background: "green"}}></button>
                <button className="btn-color" style={{background: "orange"}}></button>
                <button className="btn-color" style={{background: "yellow"}}></button>
                <button className="btn-color" style={{background: "purple"}}></button>
                <button className="btn-color" style={{background: "brown"}}></button>
                <button className="btn-color" style={{background: "#e000ff"}}></button>
                <button className="btn-color"
                        style={{background: "white", border: "1px solid var(--gray)"}}></button>
                <button className="btn-color" style={{background: "black"}}></button>
                <button className="btn-color" style={{background: "grey"}}></button>
            </div>
                    <a className="show-more yell-hv" href="#">Показать еще</a>
                </>}/>
            <button className="btn btn-outline">Сбросить фильтры</button>
        </div>
    );
};

export default Filter;