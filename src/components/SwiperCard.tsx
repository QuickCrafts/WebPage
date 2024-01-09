import React from "react";
import type Proyects from "../interfaces/proyects";
import "../styles/carouselStyles.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import QF from "../../public/products/QuickFins/QuickFins.png";
import QF1 from "../../public/products/QuickFins/QuickFins1.png";
import QF2 from "../../public/products/QuickFins/QuickFins2.png";
import QF3 from "../../public/products/QuickFins/QuickFins3.png";
import QF4 from "../../public/products/QuickFins/QuickFins4.png";

export default function SwiperCard() {

    const products: Proyects[] = [
        {
            name: "QuickFins",
            url: "https://quickfins.co/",
            icon: QF,
            slogan: "El mejor amigo de tus finanzas personales.",
            description:
                "QuickFins es una aplicación web que te ayuda a gestionar tus finanzas personales, registrando ingresos, gastos y más.",
            galery: [
                { url: QF1 },
                { url: QF2 },
                { url: QF3 },
                { url: QF4 },
            ],
            key: "QuickFins1",
        },
        {
            name: "QuickFins",
            url: "https://quickfins.co/",
            icon: QF,
            slogan: "El mejor amigo de tus finanzas personales.",
            description:
                "QuickFins es una aplicación web que te ayuda a gestionar tus finanzas personales, registrando ingresos, gastos y más.",
            galery: [
                { url: QF1 },
                { url: QF2 },
                { url: QF3 },
                { url: QF4 },
            ],
            key: "QuickFins2",
        },
    ];

    return (
        <div className="gridCards">
            <Swiper
                direction={'vertical'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                className="sniper"
                modules={[Navigation, Pagination, Autoplay]}
            >
                {products.map((product) => (
                    <SwiperSlide>
                        <div className="productCards" key={product.key}>
                            <a href={product.url} target="_blank">
                                    <img src={product.icon?.src} alt={product.name} className="productIcon"/>
                            </a>
                            <p>{product.slogan}</p>
                            <Swiper
                                spaceBetween={30}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                className="sniper"
                                modules={[Navigation, Pagination, Autoplay]}
                            >
                                {product.galery.map((image: any) => (
                                    <SwiperSlide>
                                        <div className="galery" key={image.url}>
                                            <img src={image.url.src} alt={image.url}/>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <a className="myBotton" href={product.url} target="_blank">Conocer</a>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}
