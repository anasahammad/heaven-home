import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import key from "../assets/images/key.jpg"
const AboutCompany = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img src={key} className="w-[50%] h-[400px] rounded-lg shadow-2xl" />
    <div className="w-[45%]">
        <div className="flex gap-4 items-center">
            <div className="w-[65px] bg-[#D23A25] flex flex-row items-center mt-1 mb-1 h-1"></div>
            <p className="text-[#D23A25] text-xl font-semibold">Who we are</p>
        </div>
      <h1 className="text-4xl font-bold">Discover the Essence of HeavenHome</h1>
      <p className="py-6">At HeavenHome, we are more than just a real estate agency – we are your dedicated partners on your journey to finding the perfect home. With a commitment to excellence, integrity, and personalized service, we strive to exceed your expectations at every step of the way. Our team of experienced professionals is here to guide you through the complexities of the real estate market, providing expert advice, tailored solutions, and unwavering support. Whether you're a first-time buyer, seasoned investor, or looking to sell your property, HeavenHome is here to make your real estate dreams a reality.</p>
      <Link to="/about-us">
      <button className="btn bg-[#D23A25] text-white">About Our Company <BsArrowUpRight/></button>
      </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutCompany;