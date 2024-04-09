
import { CiLocationOn } from "react-icons/ci";


const EstateCard = () => {

    return (
        <div>
            // {/* <h1>{estate.estate_title}</h1> */}
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
        <CiLocationOn/>
        <p>456 Oak Avenue, Metropolis, USA</p>
        </div>

        <h1 className="text-3xl">Modern Single-Family Home</h1>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="divider"></div>

        <div className="flex justify-between">
            <h4> $750,000 </h4>
            <p></p>
        </div>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EstateCard;