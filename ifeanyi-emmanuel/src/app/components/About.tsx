import Button from "./Button";
import { FiDownloadCloud } from "react-icons/fi";

const About = () => {
	return (
		<div className="my-10 lg:my-20 px-7 lg:px-14 py-12 bg-[#F2F4FF]">
			<div className="mb-7">
				<h2 className="text-[20px] lg:text-[28px] mb-3 lg:mb-4 text-[#000] font-semibold">
					About Me
				</h2>
				<div className="flex flex-col lg:flex-row gap-5 items-start lg:items-end justify-between">
					<p className="mt-4 lg:mt-5 text-[14px] lg:text-[18px] text-[#000] opacity-70 w-full md:max-w-[790px]">
						Greetings! I'm Ifeanyi Emmanuel, a passionate software engineer
						based in Lagos, Nigeria, infusing innovation into frontend
						development. With over 2 years of experience, my journey in
						technology is fueled by insatiable curiosity and a deep love for
						transforming ideas into tangible creations.
					</p>
					<Button
						label="Resume"
						download="Ifeanyi-Emmanuel-Resume.pdf"
						target="_blank"
						className="mt-5 lg:mt-6 text-[18px] lg:text-[20px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg flex justify-center gap-1"
						href="https://drive.google.com/file/d/1MNkzyMeeSI2_3Otk37vUt4u6j2UchcOL/view?usp=sharing"
						icon={<FiDownloadCloud />}
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-5">
				<div>
					<h1 className="text-[#000] text-[14px] lg:text-[18px] font-bold mb-[10px]">
						What I Do
					</h1>
					<p className="mt-4 lg:mt-5 text-[14px] lg:text-[18px] text-[#000] opacity-70 w-full md:max-w-[790px]">
						By day, I craft captivating user interfaces using a dynamic tech
						stack—JavaScript, TypeScript, React, Next.js, MongoDB, Node.js, and
						more. My work thrives on the magic that transforms code into
						immersive digital experiences.
					</p>
				</div>
				<div>
					<h1 className="text-[#000] text-[14px] lg:text-[18px] font-bold mb-[10px]">
						Beyond Code
					</h1>
					<p className="mt-4 lg:mt-5 text-[14px] lg:text-[18px] text-[#000] opacity-70 w-full md:max-w-[790px]">
						Beyond software engineering, I find joy in diverse pursuits. Chess
						is both a mental exercise and leisure, while the piano is my escape
						into a world where notes dance, and emotions harmonize.
					</p>
				</div>
				<div>
					<h1 className="text-[#000] text-[14px] lg:text-[18px] font-bold mb-[10px]">
						Core Values
					</h1>
					<p className="mt-4 lg:mt-5 text-[14px] lg:text-[18px] text-[#000] opacity-70 w-full md:max-w-[790px]">
						A strong advocate for deep work, I approach each project with
						dedicated focus, precision, and a commitment to continuous learning.
						In both professional and personal pursuits, my dedication to
						excellence remains unwavering.
					</p>
				</div>
				<div>
					<h1 className="text-[#000] text-[14px] lg:text-[18px] font-bold mb-[10px]">
						Aspirations
					</h1>
					<p className="mt-4 lg:mt-5 text-[14px] lg:text-[18px] text-[#000] opacity-70 w-full md:max-w-[790px]">
						Looking forward, I'm driven to pioneer advancements in technology,
						focusing on quantum computing. The vision is to build software that
						tackles today's impossible challenges, revolutionizing finance and
						healthcare.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
