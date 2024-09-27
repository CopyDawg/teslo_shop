'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import './slideshow.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSlideshow = ({images, title, className} : Props) => {
    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px',
                }}
                pagination
                autoplay={{
                    delay: 4000
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                width={600}
                                height={500}
                                src={`/products/${image}`}
                                alt={title}
                                className="object-fill"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
