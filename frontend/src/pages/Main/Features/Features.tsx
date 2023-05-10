import React from 'react';
import {GppGoodRounded} from "@mui/icons-material";

import './features.scss'

const features = [
    {
        svg: <GppGoodRounded/>,
        title: "Безопасность",
        subtitle: "Тут офигенная безопасность братан"
    },
    {
        svg: <GppGoodRounded/>,
        title: "Безопасность",
        subtitle: "Тут офигенная безопасность братан"
    },
    {
        svg: <GppGoodRounded/>,
        title: "Безопасность",
        subtitle: "Тут офигенная безопасность братан"
    },
    {
        svg: <GppGoodRounded/>,
        title: "Безопасность",
        subtitle: "Тут офигенная безопасность братан"
    }
]

const Features = () => {
    return (
        <section className='features'>
            <div className='items-top'>
                <div>
                    <h2 className='title'>Почему мы одни из лучших?</h2>
                </div>
            </div>
            <div className='item-list'>
                {features.map((item, i) =>
                    <div className='feature' key={i}>
                        {item.svg}
                        <h4 className='middle-title'>{item.title}</h4>
                        <p className='subtitle'>{item.subtitle}</p>
                    </div>
                )}
            </div>
            <div className='border'></div>
        </section>
    );
};

export default Features;