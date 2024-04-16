import { useState } from "react";
import { useForm } from "react-hook-form";


const ContactUs = () => {

	const [userName, setUserName] = useState('')
	const {register,  handleSubmit,formState: { errors },} = useForm()
	
    const handleMessage = data =>{
        const {fullName, email, message} = data;
        setUserName(fullName);
		document.getElementById('my_modal_5').showModal();
    }
    return (
        <div>
          <div className="grid  max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="">Have any query about our company don't forget to get in touch.</div>
		</div>
		<img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64 " />
	</div>
	<form onSubmit={handleSubmit(handleMessage)} noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input {...register("fullName", {
				required: true
			})} id="name" type="text" name="fullName" placeholder="" className="w-full p-3 rounded input input-bordered" />
			{errors.fullName && <span className="text-red-600">This field is required</span>}
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" name="email" className="w-full p-3 rounded input input-bordered" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" name="message" rows="3" className="w-full p-3 rounded border input-bordered"></textarea>
		</div>
		<button  type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#D23A25] text-white">Send Message</button>
		<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello, <span className="text-2xl">{userName}</span></h3>
    <p className="py-4">We got your message. Thanks for your messaging us. We will connect with you soon as possible. Please stay with us.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
	</form>
</div>
        </div>
    );
};

export default ContactUs;