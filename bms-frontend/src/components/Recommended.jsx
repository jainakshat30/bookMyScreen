import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import m1 from '../assets/m1.avif'
import m2 from '../assets/m2.avif'
import m3 from '../assets/m3.avif'
import m4 from '../assets/m4.avif'
import m5 from '../assets/m5.avif'
import m6 from '../assets/m6.avif'
import m7 from '../assets/m7.avif'
import m8 from '../assets/m8.avif'
import m9 from '../assets/m9.avif'
import m10 from '../assets/m10.avif'
import m11 from '../assets/m11.avif'
import m12 from '../assets/m12.avif'

// ponytail: hardcoded list, swap for an API call once the backend serves movies
const movies = [
  { title: 'Maa', genre: 'Horror/Mythological', img: m1 },
  { title: 'Kannappa', genre: 'Action/Drama/Mythological', img: m2 },
  { title: 'Mission: Impossible - The Final Reckoning', genre: 'Action/Adventure/Thriller', img: m3 },
  { title: 'F1: The Movie', genre: 'Action/Drama/Sports', img: m4 },
  { title: 'Ballerina', genre: 'Action/Thriller', img: m5 },
  { title: 'M3GAN 2.0', genre: 'Horror/Sci-Fi/Thriller', img: m6 },
  { title: 'Housefull 5', genre: 'Comedy/Thriller', img: m7 },
  { title: 'Sitaare Zameen Par', genre: 'Comedy/Drama/Sports', img: m8 },
  { title: 'Naruto the Movie: Ninja Clash in the Land of Snow', genre: 'Anime/Action/Adventure', img: m9 },
  { title: '28 Years Later', genre: 'Horror/Thriller', img: m10 },
  { title: 'Sinners', genre: 'Horror/Thriller/Period', img: m11 },
  { title: 'Kesari Chapter 2', genre: 'Drama/Historical', img: m12 },
]

const Recommended = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Recommended Movies</h2>
        <a href="/movies" className="text-sm text-[#f84464] hover:underline">See All ›</a>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2.2}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5, slidesPerGroup: 5 } }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <a href="/movies" className="block group">
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full aspect-[400/660] object-cover rounded-lg transition group-hover:scale-[1.02]"
              />
              <h3 className="mt-2 font-semibold text-gray-800 truncate">{movie.title}</h3>
              <p className="text-sm text-gray-500 truncate">{movie.genre}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Recommended
