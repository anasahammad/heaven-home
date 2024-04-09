
import { CiLocationOn } from "react-icons/ci";


const EstateCard = ({estate}) => {
  const {estate_title, segment_name, price, status, location, image, area} = estate;

    return (
        <div>
            {/* <h1>{estate.estate_title}</h1> */}
            <div className="card  h-full w-96 bg-base-100  shadow-xl my-6">
  <figure className="relative">
    <img src={image} alt="Shoes" className="rounded-xl h-[280px] transition duration-300 ease-in-out hover:scale-110 " />
    <span className="absolute top-2 left-2 bg-[#3E4C66] text-white px-4 cursor-pointer">{status}</span>
  </figure>
  <div className="flex flex-col px-3 py-2">

      <h4 className=" text-red-400 ">{segment_name}</h4>
  

        <h1 className="text-xl text-left font-bold my-2">{estate_title}</h1>
        <div className="flex items-center gap-1">
        <CiLocationOn className="text-[#BB915B] font-bold"/>
        <p>{location}</p>
        </div>

        <div className="flex  justify-between my-2 pr-2">
            <h4 className="font-bold text-xl text-[#BB915B]"> {price} </h4>
            <p className="text-[18px] font-bold">Area: <span className="font-normal">{area}</span></p>
        </div> 
    <div className="divider"></div>

       
    <div className="flex justify-center">
      <button className="btn bg-[#BB915B] text-white">Vew Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EstateCard;