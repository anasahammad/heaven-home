import slide4 from "../assets/images/4.jpg"

const Slider4 = () => {
    return (
        <div>
             <div className="hero min-h-screen" style={{backgroundImage: `url(${slide4})`}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-screen-lg">
      <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl text-white font-bold">Elevate Your Living Experience with HeavenHome</h1>
      <p className="mb-5 text-[10px] md:text-[16px] lg:text-[16px] text-white">Embrace the vibrant energy of city living with our diverse range of urban properties. From sleek downtown lofts to chic penthouses with skyline views, discover a lifestyle that epitomizes sophistication, convenience, and excitement. Let HeavenHome guide you to your perfect urban sanctuary</p>
      <a  href="#estates" className="btn bg-[#D23A25] text-white">View Estates</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider4;