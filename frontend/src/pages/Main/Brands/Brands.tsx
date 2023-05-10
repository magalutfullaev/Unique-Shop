import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

import './brands.scss'

const brands = [
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M60.2415 37.017L47.241 15.3945L41.886 18.6165L33.381 23.7285L41.886 37.89L53.1135 56.6055H60.2415H72L60.2415 37.017Z"
            />
            <path
                d="M41.886 48.9015L30.5595 30.0555L17.1405 38.133L16.6815 38.403L17.1405 39.1635L27.621 56.6055H41.886H46.494L41.886 48.9015Z"
            />
            <path d="M17.1405 50.1615L13.8735 44.7345L0 53.0685L2.1195 56.6055H17.1405H21.006L17.1405 50.1615Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M40.4648 31.7514L35.9919 32.9259L23.5812 36.1748C19.1983 37.2593 15.3644 38.7038 11.67 37.4393C6.64816 35.2703 6.73816 29.6275 10.4821 23.6246C3.86273 29.0875 -8.04846 46.5561 8.06113 48.32C10.1131 48.59 13.767 47.87 17.7359 46.2006L35.9919 38.7083L72 23.9846L40.4648 31.7514Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M60.2415 37.017L47.241 15.3945L41.886 18.6165L33.381 23.7285L41.886 37.89L53.1135 56.6055H60.2415H72L60.2415 37.017Z"
            />
            <path
                d="M41.886 48.9015L30.5595 30.0555L17.1405 38.133L16.6815 38.403L17.1405 39.1635L27.621 56.6055H41.886H46.494L41.886 48.9015Z"
            />
            <path d="M17.1405 50.1615L13.8735 44.7345L0 53.0685L2.1195 56.6055H17.1405H21.006L17.1405 50.1615Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M40.4648 31.7514L35.9919 32.9259L23.5812 36.1748C19.1983 37.2593 15.3644 38.7038 11.67 37.4393C6.64816 35.2703 6.73816 29.6275 10.4821 23.6246C3.86273 29.0875 -8.04846 46.5561 8.06113 48.32C10.1131 48.59 13.767 47.87 17.7359 46.2006L35.9919 38.7083L72 23.9846L40.4648 31.7514Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M60.2415 37.017L47.241 15.3945L41.886 18.6165L33.381 23.7285L41.886 37.89L53.1135 56.6055H60.2415H72L60.2415 37.017Z"
            />
            <path
                d="M41.886 48.9015L30.5595 30.0555L17.1405 38.133L16.6815 38.403L17.1405 39.1635L27.621 56.6055H41.886H46.494L41.886 48.9015Z"
            />
            <path d="M17.1405 50.1615L13.8735 44.7345L0 53.0685L2.1195 56.6055H17.1405H21.006L17.1405 50.1615Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M40.4648 31.7514L35.9919 32.9259L23.5812 36.1748C19.1983 37.2593 15.3644 38.7038 11.67 37.4393C6.64816 35.2703 6.73816 29.6275 10.4821 23.6246C3.86273 29.0875 -8.04846 46.5561 8.06113 48.32C10.1131 48.59 13.767 47.87 17.7359 46.2006L35.9919 38.7083L72 23.9846L40.4648 31.7514Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M60.2415 37.017L47.241 15.3945L41.886 18.6165L33.381 23.7285L41.886 37.89L53.1135 56.6055H60.2415H72L60.2415 37.017Z"
            />
            <path
                d="M41.886 48.9015L30.5595 30.0555L17.1405 38.133L16.6815 38.403L17.1405 39.1635L27.621 56.6055H41.886H46.494L41.886 48.9015Z"
            />
            <path d="M17.1405 50.1615L13.8735 44.7345L0 53.0685L2.1195 56.6055H17.1405H21.006L17.1405 50.1615Z"
            />
        </g>
    </svg>,
    <svg className='blue-hover' xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 72 72"
         fill="none">
        <g>
            <path
                d="M40.4648 31.7514L35.9919 32.9259L23.5812 36.1748C19.1983 37.2593 15.3644 38.7038 11.67 37.4393C6.64816 35.2703 6.73816 29.6275 10.4821 23.6246C3.86273 29.0875 -8.04846 46.5561 8.06113 48.32C10.1131 48.59 13.767 47.87 17.7359 46.2006L35.9919 38.7083L72 23.9846L40.4648 31.7514Z"
            />
        </g>
    </svg>,
]

const Brands = () => {
    return (
        <section className='brands'>
            <div className='items-top'>
                <div>
                    <h2 className='title'>Популярные бренды</h2>
                </div>
                <button className='btn btn-link'>Все бренды</button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={5}
                loop={true}
                autoplay={{delay: 5000}}
                navigation
                speed={700}
                breakpoints={{
                    1200: {
                        slidesPerView: 5
                    },
                    800: {
                        slidesPerView: 4
                    },
                    300: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                {brands.map((brand, i) => <SwiperSlide key={i}>{brand}</SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Brands;