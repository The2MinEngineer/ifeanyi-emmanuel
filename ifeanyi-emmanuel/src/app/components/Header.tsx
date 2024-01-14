import React from 'react'
import Button from './Button';

const Header = () => {
  return (
		<div className="mt-10 lg:mt-20 flex flex-col items-center">
			<h1 className="text-[#000] text-center text-[24px] lg:text-[48px] font-bold w-full md:max-w-[790px] leading-tight">
				Hi, I’m Ifeanyi Emmanuel - a software engineer with almost{" "}
				<span className="text-[#3547EE]">3 years</span> of experience
			</h1>
			<Button
				label="Resume"
				className="mt-5 lg:mt-6 text-[20px] bg-[#3547EE] text-white px-6 py-2 items-center"
				href="/resume"
			/>
		</div>
	);
}

export default Header