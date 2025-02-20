
import { useEffect, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { useParams } from "react-router-dom";
import { saveEstate } from '../Utilities/LocalStorage';
import useLocalStorage from '../Hooks/useLocalStorage';
const EstateDetails = () => {
    const {localData} = useLocalStorage()
 const {id} = useParams()
 const [singleWish, setSingleWish ] = useState([])
 const estate = localData.find(item=> item.id === parseInt(id))
 
 useEffect(()=>{
    setSingleWish(estate);
 }, [estate])

 const {estate_title, segment_name, description, price, area, location, facilities, image, status} = singleWish || {};
 const handleWish = data =>{
    saveEstate(data)
 }
    return (
        <div className='py-6 '>
           <div className="max-w-4xl mx-auto  p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4">
		<div className="space-y-2">
            <div className='relative '>
            <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-full dark:bg-gray-500" />
            <span className={`absolute bottom-4 left-3 md:text-2xl  lg:text-2xl text-white px-4 md-px-8 lg:px-8 my-2 text-center ${status === "rent" ? "bg-[#D23A25]" : "bg-green-400"}`}>{status}</span>
            </div>
            
        
			<div className="flex flex-col md:flex-row lg:flex-row items-center justify-between ">
				<span className='  lg:rounded-xl text-green-700 font-medium '>{segment_name}</span>
                <div className='flex items-center md:text-xl lg:text-xl  gap-2'>
                <CiLocationOn className="text-[#D23A25]  "/>
        <p>{location}</p>
                </div>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-2xl md:text-4xl lg:text-4xl font-bold ">{estate_title}</h3>
			</a>
            <h4 className='text-xl font-semibold'>Description:</h4>
			<p className="leading-snug dark:text-gray-600">{description}</p>
		</div>
        <div className="divider"></div>
        
            <div>
            <p className=' '><span className='font-bolod text-xl underline'>Facilities:</span>  <ul className='list-decimal ml-6'>

            
{facilities?.map((facility, index)=> <li key={index}>{facility}</li>)}
</ul></p>
            </div>

           
           
        
        <div className=' flex flex-row justify-between items-center'>
                
              
                    <h1 className=' md:text-3xl lg:text-3xl font-bold text-[#D23A25]'>
                        Price:  {}
                        <span>{price}</span></h1>

                        <h4 className='md:text-2xl lg:text-2xl font-bold'>Area : <span>{area}</span> </h4>
                
            </div>

                <div className='flex justify-center'>
                <button onClick={()=>handleWish(estate)} className='btn bg-[#D23A25] text-white'>Add to Wishlist<BsArrowUpRight/></button>
                </div>
            
	</div>
</div>
        </div>
    );
};

export default EstateDetails;