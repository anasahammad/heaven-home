import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
    const allEstates = useLoaderData()
 const {id} = useParams()
 const estate = allEstates.find(item=> item.id === parseInt(id))
 const {estate_title, segment_name, description, price, area, location, facilities, image} = estate;

 

    return (
        <div className='py-28 z-10 '>
           <div className="max-w-4xl mx-auto  p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-[300px] dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>{segment_name}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">{description}</p>
		</div>
        <div className="divider"></div>
        <div>
            <p className=' '><span className='font-bolod text-xl underline'>Facilities:</span>  <ul className='list-decimal ml-6'>

            
            {facilities.map(facility=> <li>{facility}</li>)}
            </ul></p>
           
        </div>
	</div>
</div>
        </div>
    );
};

export default EstateDetails;