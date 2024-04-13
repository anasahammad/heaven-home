import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const [show, setShow] = useState(false)
  const acceptRef = useRef(null)
  const [accepted, setAccepted] = useState(false)
  const {createUser, user, setReload} = useContext(AuthContext)
  const navigate = useNavigate()
  
  //React Form - Hook codes
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = watch("password", "")

  //handle register of signUp functionality
  const handleRegister = (data) => {
      const {email, password, name, photoURL} = data;
      console.log(photoURL)
      
      
        createUser(email, password)
        .then(result=>{
          
          toast.success("Account Created Successfully")
          navigate("/");
          updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL
          })
          .then(()=>{
            setReload(true) 
          })
         
        })
        
        .catch(error=> {
            return toast.error(`${error.message.replace('Firebase: Error (auth/', ' ').replace(/\)/, '')}`)
          
        })
      
      
      
  }
  const disableBtn = ()=>{
    const checked = acceptRef.current.checked;
    
    if(checked){
      setAccepted(true)
      return
    }
    else{
      setAccepted(false)
    }
  }
    return (
        <div>
           <div className=" ">
  <div className="hero-content mx-auto flex-col ">
    <div className="text-center ">
      <h1 className="text-4xl font-bold mb-2 ">Create an account</h1>
      <p>Ready to get started? It's time to fill out the form and create your account. </p>
      
    </div>
    <div className="card shrink-0 w-full mx-auto max-w-[30rem] shadow-2xl ">
      <form onSubmit={handleSubmit(handleRegister)} className="card-body gap-4">
        <div className="form-control">
        <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input {...register("name",
        { required: true })} name="name" type="text" placeholder="Your Name" className="input input-bordered" />
        {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input {...register("email", { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input {...register("photoURL")}  name="photoURL" type="text" placeholder="Your Photo URL" className="input input-bordered"  />
        
        </div>
        <div className="form-control relative">
        <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input {...register("password", {
            required: "Password is required", 
            minLength: {
              value: 6, 
              message: "Password must be at least 6 characters"
            }, 
            validate: {
              upperCase: (value)=> /[A-Z]/.test(value) || "Password must have  at least one UpperCase letter", 
              lowerCase: (value)=> /[a-z]/.test(value) || "Password must have  at least one LowerCase letter" 

            }
          })} name="password" type={`${show ? "text" : "password"}`} placeholder="Password" className="input input-bordered"  />
{errors.password && <span className="text-red-600">{errors.password.message}</span>}


          <span className="absolute right-5 top-12" onClick={()=>setShow(!show)}>
            {!show ? <FaEyeSlash/> : <FaEye/>}
          </span>
          </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text font-semibold">Confirm Password</span>
          </label>
          <input  {...register("confirmPassword", {
          validate: (value) => value === password || 'Passwords do not match'
        })} name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered"  />
{errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword.message}</span>}
          </div>
        
          <div className="flex items-center">
				<input onChange={disableBtn}  ref={acceptRef} type="checkbox" name="terms" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
				<label htmlFor="remember" className="text-sm dark:text-gray-600">Accept Term & Conditions</label>
			</div>

        <div className="form-control mt-3">
            
          <button disabled={!accepted} className="btn bg-[#D23A25] text-white">Sign Up</button>
        </div>

        <p className="px-6  text-center dark:text-gray-600">Already have an account? {} 
				<Link  to="/login" className="underline  text-[#D23A25]">Sign in</Link>.
			</p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;