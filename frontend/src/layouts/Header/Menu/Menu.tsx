import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Link, useLocation} from "react-router-dom";
import {KeyboardArrowRight} from "@mui/icons-material/";

import MenuCategories from "./MenuCategories/MenuCategories";

import "./menu.scss";

const Menu: React.FC<{ burgerActive: boolean }> = ({burgerActive}) => {
    const [genderName, setGenderName] = useState<string>("");
    const [genderValue, setGenderValue] = useState<string>("");
    const {pathname} = useLocation();
    const {navItems} = useSelector((state: RootState) => state.appSlice);

    return (
        <div className={`header-menu${burgerActive ? " active" : ""}`}>
            <div className="menu-inner">
                <Link to="./" className="logo">
                    <svg width="136" height="28" viewBox="0 0 136 28" fill="none"
                         style={{zIndex: 4, position: "relative"}} xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M31.516 10.5875H22.466C20.4549 1.50477 5.3717 10.5872 9.39389 17.8536C12.4106 21.4867 18.779 20.2756 20.4549 17.8536H30.5104C20.0527 32.3862 6.37725 27.8447 3.36059 25.1199C0.343952 23.3033 -4.88492 8.77087 10.3994 1.50456C25.6838 -3.58186 30.8456 5.44048 31.516 10.5875Z"
                            fill="#121720"/>
                        <path
                            d="M31.5158 28L36.4011 0H45.1945L40.3092 21.6774H65.7124C71.9655 21.6774 72.2261 16.8602 71.5747 14.4516H69.6206L74.5058 9.93548L80.3681 14.4516H78.414C78.414 24.5677 69.9463 27.6989 65.7124 28H31.5158Z"
                            fill="#121720"/>
                        <path
                            d="M49.1027 14.4516H51.0567C51.8384 3.6129 61.1529 0.301075 65.7124 0H103.817V6.32258L88.1845 22.5806H100.886L99.909 28H78.414V22.5806L94.0468 7.22581H65.7124C57.1144 7.22581 56.2677 12.043 56.919 14.4516H59.8502L53.9879 18.9677L49.1027 14.4516Z"
                            fill="#121720"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M100.11 28L117.188 0H128.929L135.333 28H124.659V23.3333H112.918L109.716 28H100.11ZM116.12 17.7333L121.457 8.4L123.592 17.7333H116.12Z"
                              fill="#121720"/>
                    </svg>
                </Link>
                <nav className="menu-nav">
                    <ul>
                        {navItems.map((item, i: number) =>
                            <li key={i}
                                className={`nav-item${pathname ===  "/" + item.name ? " active" : ""}${item.gender ? " nav-gender" : ""}`}>
                                {item.gender ?
                                    <button className="menu-link" onClick={() => {
                                        setGenderName(item.name);
                                        setGenderValue(item.value);
                                    }}>{item.value}<KeyboardArrowRight/></button> :
                                    <Link className="menu-link" to={`/${item.name}`}>{item.value}</Link>
                                }
                            </li>
                        )}
                    </ul>
                </nav>
                <MenuCategories genderName={genderName} genderValue={genderValue} setGenderName={setGenderName}/>
            </div>
        </div>
    );
};

export default Menu;