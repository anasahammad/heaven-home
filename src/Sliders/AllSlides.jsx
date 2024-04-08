
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';
import './AllSlides.css'


const AllSlides = () => {

    return (
        <div>
            
            <Swiper  

            autoplay={
               { delay: 2000}
            }
            pagination={{ clickable: true }} navigation={true} loop={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">

<SwiperSlide><Slider1/></SwiperSlide>
<SwiperSlide>
    <Slider2/>
</SwiperSlide>
<SwiperSlide>
    <Slider3/>
</SwiperSlide>
<SwiperSlide>
    <Slider4/>
</SwiperSlide>
</Swiper>
        </div>
    );
};

export default AllSlides;