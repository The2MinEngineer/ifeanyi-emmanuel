import React from "react";
import Header from "./components/Header";
import ProjectContainer from "./containers/ProjectContainer";
import About from "./components/About";
import Contact from "./components/Contact";

const page = () => {
	return (
		<div className="px-5 md:px-20 lg:px-40 max-w-screen-2xl">
			<Header />

			<div className="mt-10 lg:mt-20">
				<h2 className="text-[20px] lg:text-[28px] mb-5 lg:mb-6 text-[#000] font-semibold">
					Projects
				</h2>
				<ProjectContainer />
			</div>

			<About
				text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod turpis nec mi vehicula, nec ullamcorper sapien imperdiet. Nulla facilisi. Ut vel justo vitae elit congue fermentum. Vestibulum non odio a lectus commodo laoreet. Suspendisse vel quam vel risus sagittis tincidunt. Phasellus bibendum justo eget erat accumsan, vel volutpat mauris tristique. Quisque vel odio at turpis accumsan vulputate. Integer volutpat tellus nec justo tincidunt, eget venenatis tortor condimentum."
				text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod turpis nec mi vehicula, nec ullamcorper sapien imperdiet. Nulla facilisi. Ut vel justo vitae elit congue fermentum. Vestibulum non odio a lectus commodo laoreet. Suspendisse vel quam vel risus sagittis tincidunt. Phasellus bibendum justo eget erat accumsan, vel volutpat mauris tristique. Quisque vel odio at turpis accumsan vulputate. Integer volutpat tellus nec justo tincidunt, eget venenatis tortor condimentum."
			/>

			<Contact />

			<div className="mx-auto mt-10 lg:mt-20 mb-5 flex items-center justify-center">
				<p className="text-black text-[14px] opacity-40"> &#169;Ifeanyi-emmanuel</p>
			</div>
		</div>
	);
};

export default page;
