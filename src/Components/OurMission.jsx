import { BsArrowUpRight } from "react-icons/bs";
import ourMission from "../assets/images/Our mission.png"
const OurMission = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-delay="1600" src={ourMission} className="w-full lg:w-[55%] lg:h-[450px]  " />
    <div className="lg:w-[45%] lg:pt-14 lg:ml-6">
    <div className="flex gap-4 items-center">
            <div data-aos="fade-right" className="w-[65px] bg-[#D23A25] flex flex-row items-center mt-1 mb-1 h-1"></div>
            <p data-aos="fade-left" className="text-[#D23A25] text-xl font-semibold">Our Mission</p>
        </div>
      <h1 data-aos="fade-left" data-aos-delay="1000" className="text-[25px] md:text-4xl lg:text-4xl font-bold">Elevating Real Estate: Our Commitment to You</h1>
      <p data-aos="fade-down-left" data-aos-delay="1300" className="py-6">At HeavenHome, our mission is woven into the fabric of everything we do. We understand that real estate transactions are not just about buying or selling property; they're about fulfilling dreams, creating memories, and building futures. That's why we're committed to more than just closing deals; we're dedicated to fostering lasting relationships built on trust, integrity, and mutual respect. Our mission is to empower you with the knowledge, resources, and support you need to make informed decisions and achieve your real estate goals. Whether you're embarking on your first home purchase, expanding your investment portfolio, or selling a beloved property, we're here to champion your vision and advocate for your success. At HeavenHome, our mission is your satisfaction, and we won't rest until we've exceeded your expectations and earned your trust.</p>
      <button data-aos="fade-up" className="btn bg-[#D23A25] text-white">Learn More <BsArrowUpRight/></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OurMission;