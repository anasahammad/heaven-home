import AboutCompany from "../../Components/AboutCompany";
import EstateCard from "../../Components/EstateCard";
import OurMission from "../../Components/OurMission";
import AllSlides from "../../Sliders/AllSlides";
import { useLoaderData } from "react-router-dom";
const Home = () => {

    const allEstates = useLoaderData()
    
    return (
        <div className="">
            
        <AllSlides/>
           
        <AboutCompany/>
        <OurMission/>

        <div className="py-10">
            <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Featured Properties</h1>
            <p >Handpicked properties by our team</p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {
                    allEstates.map(estate=> <EstateCard key={estate.id} estate={estate}></EstateCard>)
                }
            </div> */}
            <EstateCard/>
            
        </div>
            
        </div>
    );
};

export default Home;