import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import e1 from '../assets/e1.avif'
import e2 from '../assets/e2.avif'
import e3 from '../assets/e3.avif'
import e4 from '../assets/e4.avif'
import e5 from '../assets/e5.avif'

// Titles and event counts are printed on the images, so they're only used as alt text.
const events = [
  { title: 'Comedy Shows', img: e1 },
  { title: 'Amusement Park', img: e2 },
  { title: 'Theatre Shows', img: e3 },
  { title: 'Kids', img: e4 },
  { title: 'Music Shows', img: e5 },
]

const LiveEvents = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">The Best of Live Events</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2.2}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.title}>
            <a href="#" className="block group">
              <img
                src={event.img}
                alt={event.title}
                className="w-full aspect-square object-cover rounded-lg transition group-hover:scale-[1.02]"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default LiveEvents
