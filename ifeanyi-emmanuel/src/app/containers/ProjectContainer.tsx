// ProjectContainer.js
import React from "react";
import Project from "../components/Project";
import Spotify from "../../../public/Spotify.jpeg";
import Bank from "../../../public/Bank.jpeg";
import Fintech from "../../../public/Fintech.jpeg";

const ProjectContainer = () => {
	return (
		<div
			className="mt-10 lg:mt-20"
			id="projects"
		>
			<h2 className="text-[20px] lg:text-[28px] mb-5 lg:mb-6 text-[#000] font-semibold">
				Projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
				<div className="w-full mb-5 md:mb-6">
					<Project
						imageSrc={Spotify}
						width={100}
						imageClassName="object-cover w-full max-h-[384px] h-full mb-[12px] lg:mb[14px] rounded-2xl"
						title="Spotify Redesign with NextJs and TailwindCSS"
						titleClassName="text-[#000] text-[18px] font-bold mb-[12px] lg:mb[14px]"
						label1="Visit Site"
						label2="Code"
						buttonClassName1="text-[14px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg"
						buttonClassName2="text-[14px] bg-white text-[#3547EE] px-6 py-2 items-center rounded-lg"
						link1=""
						link2=""
					/>
				</div>

				<div className="w-full mb-5 md:mb-6">
					<Project
						imageSrc={Bank}
						width={100}
						imageClassName="object-cover w-full h-full max-h-[384px] mb-3 rounded-2xl"
						title="Spotify Redesign with NextJs and TailwindCSS"
						titleClassName="text-[#000] text-[18px] font-bold mb-[12px] lg:mb[14px]"
						label1="Visit Site"
						label2="Code"
						buttonClassName1="text-[14px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg"
						buttonClassName2="text-[14px] bg-white text-[#3547EE] px-6 py-2 items-center rounded-lg"
						link1=""
						link2=""
					/>
				</div>

				<div className="w-full mb-5 md:mb-6">
					<Project
						imageSrc={Fintech}
						width="100%"
						imageClassName="object-cover w-full h-full max-h-[384px] mb-3 rounded-2xl"
						title="Spotify Redesign with NextJs and TailwindCSS"
						titleClassName="text-[#000] text-[18px] font-bold mb-[12px] lg:mb[14px]"
						label1="Visit Site"
						label2="Code"
						buttonClassName1="text-[14px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg"
						buttonClassName2="text-[14px] bg-white text-[#3547EE] px-6 py-2 items-center rounded-lg"
						link1=""
						link2=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
