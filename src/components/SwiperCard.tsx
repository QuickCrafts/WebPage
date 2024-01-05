import React from "react";
import type Proyects from "../interfaces/proyects";
import "../styles/carouselStyles.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperCard() {

    const products: Proyects[] = [
        {
            name: "QuickFins",
            url: "https://quickfins.co/",
            icon: "/products/QuickFins/QuickFins.png",
            slogan: "El mejor amigo de tus finanzas personales.",
            description:
                "QuickFins es una aplicación web que te ayuda a gestionar tus finanzas personales, registrando ingresos, gastos y más.",
            galery: [
                { url: "/products/QuickFins/QuickFins1.png" },
                { url: "/products/QuickFins/QuickFins2.png" },
                { url: "/products/QuickFins/QuickFins3.png" },
                { url: "/products/QuickFins/QuickFins4.png" },
            ],
        },
        {
            name: "QuickFins",
            url: "https://quickfins.co/",
            icon: "/products/QuickFins/QuickFins.png",
            slogan: "El mejor amigo de tus finanzas personales.",
            description:
                "QuickFins es una aplicación web que te ayuda a gestionar tus finanzas personales, registrando ingresos, gastos y más.",
            galery: [
                { url: "/products/QuickFins/QuickFins1.png" },
                { url: "/products/QuickFins/QuickFins2.png" },
                { url: "/products/QuickFins/QuickFins3.png" },
                { url: "/products/QuickFins/QuickFins4.png" },
            ],
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
                        <div className="productCards" key={product.name}>
                            <a href={product.url} target="_blank">
                                <img className="productIcon" src={product.icon} alt={product.name} />
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
                                            <img src={image.url} />
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
