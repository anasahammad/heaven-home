import slide3 from "../assets/images/3.jpg"

const Slider3 = () => {
    return (
        <div>
             <div className="hero min-h-screen" style={{backgroundImage: `url(${slide3})`}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-screen-lg">
      <h1 className="mb-5 text-5xl text-white font-bold">Creating Memories Starts with Finding the Perfect Home</h1>
      <p className="mb-5 text-white">Experience unparalleled luxury and refinement with our collection of elegant estates and prestigious properties. From sprawling mansions to opulent estates, each home is a masterpiece of design and craftsmanship. Elevate your lifestyle to new heights with HeavenHome's luxury listings</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider3;