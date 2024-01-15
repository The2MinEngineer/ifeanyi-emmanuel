import React from "react";
import Button from "./Button";
import { FiDownloadCloud } from "react-icons/fi";

const Header = () => {
	return (
		<div className="mt-10 lg:mt-20 flex flex-col items-center">
			<h1 className="text-[#000] text-center text-[24px] lg:text-[48px] font-bold w-full md:max-w-[790px] leading-tight">
				Building Tomorrow's Digital Dreams:{" "}
				<span className="text-[#3547EE]">Ifeanyi Emmanuel,</span> Fullstack
				Developer
			</h1>
			<p className="mt-4 lg:mt-5 text-[14px] lg:text-[18px] text-[#000] opacity-70 w-full md:max-w-[790px] text-center">
				With over 2 years of experience, specializing in JavaScript, TypeScript,
				React, Next.js, and more. I transform ideas into digital wonders,
				constantly expanding my tech toolkit.
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
	);
};

export default Header;
