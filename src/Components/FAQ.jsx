import React from 'react';

const FAQ = () => {
    return (
        <div>
          
	
          <section className="dark:bg-gray-100 dark:text-gray-800  py-6">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details className='text-[18px]'>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What types of properties do you offer?</summary>
				<div className="px-4 pb-4">
					<p>We offer a wide range of properties including apartments, houses, villas, condominiums, land plots, and commercial spaces.</p>
				</div>
			</details>
			<details className='text-[18px]'>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Are the property listings on HeavenHome verified?</summary>
				<div className="px-4 pb-4">
					<p>We strive to ensure the accuracy and reliability of our property listings. While we verify listings to the best of our ability, we recommend that users conduct their own due diligence before making any decisions.</p>
				</div>
			</details>
			<details className='text-[18px]'>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Is there a fee for using HeavenHome?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>No, HeavenHome is completely free for property seekers. There are no subscription fees or hidden charges. However, fees may apply for certain premium services or listing enhancements for property sellers.</p>
				</div>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;