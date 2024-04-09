import { BsArrowUpRight } from "react-icons/bs";
import ourMission from "../assets/images/Our mission.png"
const OurMission = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={ourMission} className="w-[55%] h-[450px] rounded-lg shadow-2xl" />
    <div className="w-[50%] pt-14 ml-6">
    <div className="flex gap-4 items-center">
            <div className="w-[65px] bg-[#BB915B] flex flex-row items-center mt-1 mb-1 h-1"></div>
            <p className="text-[#BB915B] text-xl font-semibold">Our Mission</p>
        </div>
      <h1 className="text-4xl font-bold">Elevating Real Estate: Our Commitment to You</h1>
      <p className="py-6">At HeavenHome, our mission is woven into the fabric of everything we do. We understand that real estate transactions are not just about buying or selling property; they're about fulfilling dreams, creating memories, and building futures. That's why we're committed to more than just closing deals; we're dedicated to fostering lasting relationships built on trust, integrity, and mutual respect. Our mission is to empower you with the knowledge, resources, and support you need to make informed decisions and achieve your real estate goals. Whether you're embarking on your first home purchase, expanding your investment portfolio, or selling a beloved property, we're here to champion your vision and advocate for your success. At HeavenHome, our mission is your satisfaction, and we won't rest until we've exceeded your expectations and earned your trust.</p>
      <button className="btn bg-[#BB915B] text-white">Learn More <BsArrowUpRight/></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OurMission;