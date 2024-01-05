import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type Proyects from "../interfaces/proyects";
import "./carouselStyles.css"

export default function CarouselCard() {

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
            {products.map((product) => (
                <div className="productCards" key={product.name}>
                    <a href={product.url} target="_blank">
                        <img className="productIcon" src={product.icon} alt={product.name} />
                    </a>
                    <p>{product.slogan}</p>
                    <Carousel autoPlay infiniteLoop showStatus={false}>
                        {product.galery.map((image: any) => (
                            <div className="galery" key={image.url}>
                                <img src={image.url} />
                            </div>
                        ))}
                    </Carousel>
                    <a className="myBotton" href={product.url} target="_blank">Conocer</a>
                </div>
            ))}
        </div >
    );
}
