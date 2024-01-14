// About.js
import React from "react";

const About = ({ text1, text2 }: { text1: string; text2: string }) => {
	return (
		<div className="my-10 lg:my-20 lg:w-4/6 text-[#000] opacity-80 lg:text-[18px] flex flex-col gap-5 lg:mx-auto">
			<p>{text1}</p>
			<p>{text2}</p>
		</div>
	);
};

export default About;
