import AboutCompany from "../../Components/AboutCompany";

import OurMission from "../../Components/OurMission";
import AllSlides from "../../Sliders/AllSlides";
import { Link, useLoaderData } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { CiLocationOn } from "react-icons/ci";
import FAQ from "../../Components/FAQ";
const Home = () => {

    const allEstates = useLoaderData()
  
    
    return (
        <div className="">
            
        <AllSlides/>
           
        <AboutCompany/>
        <OurMission/>

        <div  id="estates" className="py-10">
            <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Featured Properties</h1>
            <p >Handpicked properties by our team</p>
            </div>
            
            <Swiper
        breakpoints={{
            300: {
                slidesPerView: 1, 
                spaceBetween: 8
            }, 
            700: {
                slidesPerView: 2, 
                spaceBetween: 17
            }, 
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
        }}
       
        freeMode={true}
        pagination={{
            clickable: true
        }}
        autoplay={
            {delay: 2500}
        }
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] mx-auto"
      >        
        {
             
                allEstates.map((estate)=> <SwiperSlide key={estate.id}>
                    <div className=" cursor-pointer my-6  overflow-hidden">

                    

<div data-aos="fade-up" className="card    mx-auto h-[500px]  bg-base-100  shadow-xl my-6">
  <figure className="relative">
    <img src={estate.image} alt="Shoes" className="rounded-xl   transition duration-300 ease-in-out hover:scale-110 " />
    <span className="absolute top-2 left-2 bg-[#3E4C66] text-white  px-4 cursor-pointer">{estate.status}</span>
  </figure>
  <div className="flex flex-col px-3 py-2">

      <h4 className=" text-green-500  ">{estate.segment_name}</h4>
  

        <h1 className=" text-xl text-left font-bold my-2">{estate.estate_title}</h1>
        <div className="flex text-sm  items-center gap-1">
        <CiLocationOn className="text-[#D23A25] font-bold"/>
        <p>{estate.location}</p>
        </div>

        <div className="flex gap-4 md:justify-between lg:justify-between my-2 md:pr-8 lg:pr-2">
            <h4 className="font-bold text-xl text-[#D23A25]"> {estate.price} </h4>
            <p className="text-[18px] font-bold">Area: <span className="font-normal">{estate.area}</span></p>
        </div> 
    <div className="divider"></div>

       <div className="flex-grow">
       <div className="flex  justify-center">
<Link to={`/details/${estate.id}`} state={estate.estate_title}>
<button className="btn bg-[#D23A25]  text-white">Vew Details</button>
</Link>
      
    </div>
       </div>
   
  </div>
</div>
</div>
                </SwiperSlide>)

            
        }


           
</Swiper>
            {/* <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
                {
                    allEstates.map(estate=><EstateCard key={estate.id} estate={estate}></EstateCard>)

                }


                
            </div> */}
            {/* <EstateCard/> */}
           
        </div>
          <FAQ/>
        </div>
    );
};

export default Home;