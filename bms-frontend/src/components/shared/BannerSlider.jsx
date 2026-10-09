import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.avif'
import banner3 from '../../assets/banner3.avif'
import banner4 from '../../assets/banner4.avif'

const banners = [banner1, banner2, banner3, banner4]

const BannerSlider = () => {
  return (
    <div className="bg-gray-100 py-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1.15}
        centeredSlides
        spaceBetween={10}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="banner-slider"
      >
        {banners.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Banner ${i + 1}`} className="w-full aspect-[1240/300] object-cover rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerSlider
