import { Link } from "react-router-dom";


const AboutUS = () => {

    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <img  src="https://i.ibb.co/Yt929w9/7.jpg" className="rounded-lg shadow-2xl" />
    <div>
      <h1  className="text-3xl md:text-4xl lg:text-5xl font-bold">Heaven Home</h1>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">1.Introduction:</span> <br />At HeavenHome, we believe in making the journey of finding your dream home a heavenly experience. Founded with a passion for excellence and a commitment to serving our clients with integrity, we strive to redefine the real estate industry with innovation and dedication.</p>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">2.Our Mission:</span> <br />Our mission at HeavenHome is simple yet profound - to empower individuals and families to discover the perfect place they can call home. We are dedicated to providing unparalleled service, personalized guidance, and access to a wide range of properties, ensuring that every client finds their slice of paradise.</p>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">3.Who We Are:</span> <br />We are a team of passionate real estate experts, driven by a shared vision of transforming the way people find and experience their homes. With years of experience and a deep understanding of the market, we are here to guide you through every step of your real estate journey, from exploration to acquisition.</p>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">4.Our Values:</span> <br />At HeavenHome, our values serve as the foundation of everything we do. Integrity, transparency, and professionalism are at the core of our business practices, guiding us as we navigate the complexities of the real estate landscape. We believe in building lasting relationships based on trust, honesty, and mutual respect.</p>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">5.Why Choose Us:</span> <br />Choosing HeavenHome means choosing excellence. With a commitment to excellence in everything we do, we go above and beyond to exceed our clients' expectations. From our personalized approach to our attention to detail, we are dedicated to delivering exceptional results and making your real estate experience truly heavenly.</p>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">6.Our Promise:</span> <br />When you choose HeavenHome, you're not just getting a real estate service - you're getting a partner dedicated to your success and satisfaction. We promise to listen to your needs, advocate for your best interests, and work tirelessly to help you find the perfect home that aligns with your lifestyle and aspirations.</p>
      <p className="py-3 list-decimal"> <span className="text-[18px] font-semibold">7.Join Us:</span> <br />Join us on this journey of discovery and transformation as we redefine the real estate experience together. Whether you're buying, selling, or renting, HeavenHome is here to support you every step of the way. Let us help you turn your dreams of home ownership into reality and create a future filled with endless possibilities.</p>
      <Link to="/contact-us" className="btn bg-[#D23A25] text-white">Contact Us</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUS;