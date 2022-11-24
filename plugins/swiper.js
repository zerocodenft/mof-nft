import Vue from 'vue'
import {Autoplay, Mousewheel, Pagination, Swiper as SwiperClass} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'

SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
