
import slide2 from "../assets/images/2.jpg"
const Slider2 = () => {
    return (
        <div>
             <div className="hero min-h-screen" style={{backgroundImage: `url(${slide2})`}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-screen-lg">
      <h1  className="mb-5 text-2xl md:text-4xl lg:text-5xl text-white font-bold">Experience Blissful Living with HeavenHome</h1>
      <p className="mb-5 text-[10px] md:text-[16px] lg:text-[16px] text-white">Escape to the breathtaking beauty of coastal living with our exclusive selection of seaside properties. With pristine beaches, stunning ocean views, and luxurious amenities, each home offers a slice of paradise by the sea. Find your own slice of coastal bliss with HeavenHome</p>
      <a  href="#estates" className="btn bg-[#D23A25] text-white">View Estates</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider2;