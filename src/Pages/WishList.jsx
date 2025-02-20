import { useContext, useEffect, useState } from "react";
import { deletEstate, getEstate } from "../Utilities/LocalStorage";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { AuthContext } from "../AuthProvider/AuthProvider";



const WishList = () => {

    const {setLoading, loading, setReload} = useContext(AuthContext)
    const [wish, setWish] = useState([])
    const [delet, setDelet] = useState()

    useEffect(()=>{
        let storeEstate = getEstate()
          setWish(storeEstate)
          
        
        
    }, [])

    const handleDelet = (id)=>{
     const remainingEstate = deletEstate(id)
     setWish(remainingEstate)
        }
     
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 my-7 ">

          {wish.length === 0 & !loading ? <div className="h-screen flex justify-center items-center">
           <p className="font-bold text-4xl text-center text-[#D23A25]">No Data Found! &#128546;</p>
          </div> :  <div className="flex flex-col gap-6 ">
            {wish?.map(item=> <div  key={item.id}> <div className="card relative gap-8 border lg:card-side ">
  <figure className="p-6 "><img src={item.image} alt="Album" className="lg:w-72 lg:h-72"/></figure>
  <div className="flex flex-col px-6 flex-1">
    <h2 className="card-title text-2xl md:text-3xl lg:text-4xl mb-4">{item.estate_title}</h2>
    <p className="text-[18px]"><span className="font-semibold md:text-xl lg:text-xl">Segment Name:</span> {item.segment_name}</p>
    <p className="text-[18px]"><span className="font-semibold md:text-xl lg:text-xl">Location :</span> {item.location}</p>
    <p><span className="font-semibold md:text-xl lg:text-xl">Faciliteis:</span> {item.facilities.map((data, idx)=><li className="list-decimal" key={idx}>{data}</li>)} </p>
    <div className="flex justify-between flex-col md:flex-row lg:flex-row"> 
    <p className="text-[#D23A25] text-xl md:text-2xl lg:text-2xl font-semibold"><span>Price:</span> {item.price}</p>
    <p className="text-xl md:text-2xl lg:text-2xl font-bold pr-6"><span>Area: </span>{item.area}</p>
    </div>
   
    <div className="card-actions justify-center my-3">
      <Link to={`/details/${item.id}`} className="btn bg-[#D23A25] text-white">View Details</Link>
    </div>
  </div>
  <div className="absolute -right-4 text-red-700 -top-4">
    
    <button  onClick={()=>handleDelet(item.id)}><TiDeleteOutline className="w-10 h-10"></TiDeleteOutline></button>
        
  </div>
</div></div>)}

        </div>}
          
       

        
        </div>
    );
};

export default WishList;