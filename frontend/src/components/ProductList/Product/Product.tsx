import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {CartItemT} from "../../../@types";

// import {setLike} from "../../../store/slice/mainSlice";

import "./product.scss";
import {SITE_URL} from "../../../data/consts";

const Product: React.FC<CartItemT> = ({img, liked, name, discount, price, orders, sizes, _id, createdAt}) => {
    const [like, setLike] = useState(liked);
    const created = new Date().getTime() - new Date(createdAt).getTime() <= 604800000;

    const onLike = () => {
        fetch(`${SITE_URL}api/products/${_id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ liked: !like })
        })
        setLike(like => !like)
    };

    return (
        <div className="product">
            <div className="img-block">
                <img src={img} alt="img"/>
                {discount ? <p className="discount">Скидка</p> : created ? <p className="new">Новый</p> : null}
            </div>
            <p className="product-name">{name}</p>
            {orders ?
                <p className="subtitle">{orders < 5 ? "Надевали несколько раз" : `Заказы: ${orders}`}</p>
                : null
            }
            <p className="subtitle sizes">Размеры: {sizes.map((size, i) =>
                <span key={i}>{size}{sizes.length - 1 !== i ? "," : null}</span>)}
            </p>
            <div className="product-texts">
                {discount ? <p className="price discount">
                    <span className="old-price">{price}₽</span>
                    <span>{price - discount}₽</span>
                </p> : <p className="price">{price}₽</p>}
                <div>
                    <button className={`blue-hover${like ? " active" : ""}`} onClick={onLike}>
                        {like ? <FavoriteIcon/> :
                            <FavoriteBorderIcon/>}
                    </button>
                    <button className="blue-hover"><AddShoppingCartIcon/></button>
                </div>
            </div>
        </div>
    );
};

export default Product;