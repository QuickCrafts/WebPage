import React from "react";
import type Proyects from "../interfaces/proyects";
import "../styles/carouselStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      vision:
        "Para el 2026, QuickFins será la mejor opción en Colombia para la gestión financiera personal, ayudando a las personas a tener control total sobre sus finanzas.",
      mission:
        "Dar herramientas e información a los usuarios para tomar decisiones informadas y alcanzar sus metas financieras, nos dedicamos a simplificar el registro y seguimiento de la actividad financiera personal mediante una plataforma intuitiva y eficaz, facilitando así un mejor control sobre sus ahorros y gastos diarios.",
      galery: [{ url: QF1 }, { url: QF2 }, { url: QF3 }, { url: QF4 }],
      key: "QuickFins1",
    },
    {
      name: "QuickFins",
      url: "https://quickfins.co/",
      icon: QF,
      slogan: "El mejor amigo de tus finanzas personales.",
      description:
        "QuickFins es una aplicación web que te ayuda a gestionar tus finanzas personales, registrando ingresos, gastos y más.",
      vision:
        "Para el 2026, QuickFins será la mejor opción en Colombia para la gestión financiera personal, ayudando a las personas a tener control total sobre sus finanzas.",
      mission:
        "Dar herramientas e información a los usuarios para tomar decisiones informadas y alcanzar sus metas financieras, nos dedicamos a simplificar el registro y seguimiento de la actividad financiera personal mediante una plataforma intuitiva y eficaz, facilitando así un mejor control sobre sus ahorros y gastos diarios.",
      galery: [{ url: QF1 }, { url: QF2 }, { url: QF3 }, { url: QF4 }],
      key: "QuickFins2",
    },
  ];

  return (
    <div className="gridCards">
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 10950,
          disableOnInteraction: false,
        }}
        className="sniper"
        modules={[Navigation, Pagination, Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.index}>
            <div className="productCards">
              <a href={product.url} target="_blank">
                <img
                  src={product.icon?.src}
                  alt={product.name}
                  className="productIcon"
                  key={product.index}
                />
              </a>
              <p>{product.slogan}</p>
              <div className="flex gap-[20px] w-full max-xl:flex-col">
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
                    <SwiperSlide key={image.index}>
                      <div className="galery" key={image.url}>
                        <img src={image.url.src} alt={image.url} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="flex flex-col w-1/2 text-left gap-[10px] justify-around max-xl:flex-row max-xl:w-full max-xl:p-[10px]">
                  <div>
                    <div className="text-[#F69A0B]">Visión:</div>
                    <div className="miniText">{product.vision}</div>
                  </div>
                  <div>
                    <div className="text-[#F69A0B]">Misión:</div>
                    <div className="miniText">{product.mission}</div>
                  </div>
                </div>
              </div>
              <a className="myBotton" href={product.url} target="_blank">
                Conocer
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
