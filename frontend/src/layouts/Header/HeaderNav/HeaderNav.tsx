import React, {useEffect, useState} from "react";

import "./headerNav.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import HeaderCategories from "../HeaderCategories/HeaderCategories";
import {Link, useLocation} from "react-router-dom";

const HeaderNav = () => {
    const [activeNav, setActiveNav] = useState("");
    const {navItems} = useSelector((state: RootState) => state.appSlice);
    const {pathname} = useLocation();


    useEffect(() => {
        const event = (e: MouseEvent) => {
            const target = e.target as HTMLDivElement;
            if (!target.classList.contains('header-nav-item') && !target.classList.contains('header-categories-inner') && !target.classList.contains('header-categories-item')) {
                setActiveNav('');
            }
        }
        const scroll = () => {
            if (window.pageYOffset > 200 && activeNav) {
                setActiveNav('')
            }
        }

        document.addEventListener('scroll', scroll)
        document.addEventListener("click", event);

        return () => {
            document.removeEventListener("click", event);
            document.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <nav className="header-nav">
            <ul>
                {navItems.map((item, i: number) =>
                    <li key={i} className={`nav-item${pathname === "/" + item.name ? " active" : ""}`}>
                        <div className="nav-text">
                            {item.gender ?
                                <button className='header-nav-item' onClick={() => setActiveNav(item.name)}>{item.value}</button> :
                                <Link to={`/${item.name}`}>{item.value}</Link>
                            }
                            <div className="item-border"></div>
                        </div>
                        {
                            item.gender && <HeaderCategories status={activeNav === item.name} gender={item.name} />
                        }
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default HeaderNav;