import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import key from "../assets/images/key.jpg"
const AboutCompany = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img data-aos="zoom-in-up"  data-aos-duration="1000"  src={key} className="lg:w-[50%]  lg:h-[450px]  shadow-2xl" />
    <div className="lg:w-[45%]">
        <div className="flex gap-4 items-center">
            <div data-aos="fade-right" data-aos-delay="1400" className="w-[65px] bg-[#D23A25] flex flex-row items-center mt-1 mb-1 h-1"></div>
            <p data-aos="fade-left" data-aos-delay="1500" className="text-[#D23A25] text-xl font-semibold">Who we are</p>
        </div>
      <h1 data-aos="fade-right" data-aos-delay="1000" className="text-[25px] md:text-4xl lg:text-4xl font-bold">Discover the Essence of HeavenHome</h1>
      <p data-aos="fade-down" className="py-6">At HeavenHome, we are more than just a real estate agency – we are your dedicated partners on your journey to finding the perfect home. With a commitment to excellence, integrity, and personalized service, we strive to exceed your expectations at every step of the way. Our team of experienced professionals is here to guide you through the complexities of the real estate market, providing expert advice, tailored solutions, and unwavering support. Whether you're a first-time buyer, seasoned investor, or looking to sell your property, HeavenHome is here to make your real estate dreams a reality.</p>
      <Link to="/about-us">
      <button data-aos="fade-up" className="btn bg-[#D23A25] text-white">About Our Company <BsArrowUpRight/></button>
      </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutCompany;