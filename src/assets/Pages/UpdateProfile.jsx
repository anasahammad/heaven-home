import {  updateProfile } from 'firebase/auth';
import  { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { TfiEmail } from "react-icons/tfi";

const UpdateProfile = () => {
 const {user, setLoading} = useContext(AuthContext)
  const {register, handleSubmit, setValue} = useForm();
  
setValue('name', user?.displayName || '');
setValue('photoURL', user?.photoURL || ''  );

  const handleUpdate = (data )=>{
    setLoading(true)
   
    updateProfile(user, {
      displayName: data?.name,
      photoURL: data?.photoURL
    })
    .then(()=>{
      setLoading(false)
      
      return toast.success("Profile Update successfully")
    })
    .catch((error)=>{
      setLoading(true)
      return toast.error(error.message)
    })
  } 
    return (
        <div>
          
           <div className="card max-w-3xl mx-auto my-6 ">
           <h className="text-2xl md:text-3xl lg:text-3xl text-center mb-2">Update your profile</h>
           <p className='text-center mb-6'>Need to update your profile? Here You can change your name and Photo.</p>
           <div className='shadow-xl'>
           <figure><img className='w-32 h-32 mx-auto rounded-full' src={user?.photoURL} alt="Movie"/></figure>
  <h3 className=' md:text-2xl lg:text-2xl text-center '>Name: {user?.displayName}</h3>
  <div className='flex justify-center items-center gap-2 mt-2'>
  <TfiEmail className=''/>
  <p className='text-center '> {user?.email}</p>
  </div>
  
 
  <form onSubmit={handleSubmit(handleUpdate)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  {...register("name")} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="text" {...register("photoURL")} className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D23A25] text-white">Update</button>
        </div>
      </form>
           </div>
 
  
</div>
        </div>
    );
};

export default UpdateProfile;