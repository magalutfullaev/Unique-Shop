import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from "swiper";
import {BannerT} from "../../../@types";
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.scss';
import {fetching} from "../../../Helpers/fetch";


const Banner = () => {
    const [banner, setBanner] = useState<BannerT[] | []>([]);
    useEffect(() => {
        fetching('banners')
            .then(res => setBanner(res))
    }, [])

    if (!banner.length) {
        return <></>;
    }
    return (
        <div className='banner'>
            <div className="container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{delay: 5000}}
                    speed={700}
                    pagination={{clickable: true}}
                >
                    {banner.map((item: BannerT, i: number) =>
                        <SwiperSlide key={i}>
                            <div className='banner-slider' style={{backgroundImage: `url("${item.img}")`}}>
                                <div className="banner-content">
                                    <h2 className='title'>{item.title}</h2>
                                    <p>{item.subtitle}</p>
                                    <a className='banner-term' href="#">Условия проведения акции</a>

                                    <a href={item.link} className='btn btn-solid'>Подробнее<ChevronRightIcon/></a>
                                </div>
                            </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;