

const ContactUs = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const fullName = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        console.log(fullName, email, message)
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
	<form onSubmit={handleSubmit} noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" name="fullName" placeholder="" className="w-full p-3 rounded input input-bordered" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" name="email" className="w-full p-3 rounded input input-bordered" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" name="message" rows="3" className="w-full p-3 rounded border input-bordered"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#D23A25] text-white">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default ContactUs;