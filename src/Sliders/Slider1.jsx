import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import slide1 from "../assets/images/1.jpg"
const Slider1 = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${slide1})`}}>
           
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-screen-lg">
      <h1 data-aos="fade-left" className="mb-5  text-2xl md:text-4xl lg:text-5xl text-white font-bold">Discover Your Perfect Property Today</h1>
      <p data-aos="fade-right" className="mb-5 text-[10px] md:text-[16px] lg:text-[16px] text-white">Escape the hustle and bustle of everyday life and step into your personal oasis. Our handpicked selection of serene properties offers a retreat from the chaos, where you can unwind, recharge, and reconnect with nature. Experience the peace and serenity you deserve with HeavenHome</p>
      <Link data-aos="fade-up" data-aos-delay="500" to="#estates" className="btn bg-[#D23A25] text-white">View Estates</Link>
    </div>
  </div>
</div>
    );
};

export default Slider1;