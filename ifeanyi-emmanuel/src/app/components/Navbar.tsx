"use client";

import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Button from "./Button";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="sticky top-0 bg-white z-40">
			{/* Desktop */}
			<div className="hidden lg:flex justify-between items-center py-10">
				<div className="text-[#3547EE] text-[24px] font-semibold">
					<p>the2MinEngineer</p>
				</div>
				<div className="flex items-center gap-6">
					<div className="flex justify-end items-center gap-6">
						<div className="flex items-center gap-6">
							<ScrollLink
								to="projects"
								offset={-130}
								spy={true}
								smooth={true}
								duration={500}
								className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
							>
								Projects
							</ScrollLink>
							<ScrollLink
								to="about"
								spy={true}
								offset={-130}
								smooth={true}
								duration={500}
								className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
							>
								About me
							</ScrollLink>
							<ScrollLink
								to="https://medium.com/@The2MinEngineer"
								target="_blank"
								className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
							>
								Blog
							</ScrollLink>
							<ScrollLink
								to="https://medium.com/@The2MinEngineer"
								target="_blank"
								className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
							>
								Podcast
							</ScrollLink>
						</div>
					</div>
					<div className="flex items-center gap-6">
						<div className="flex justify-center items-center">
							<Button
								label="Contact"
								className="text-[14px] lg:text-[18px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg flex justify-center gap-1"
								href="#contact"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className="lg:hidden block relative">
				<div className="flex justify-between items-center py-5">
					<div className="text-[#3547EE] text-[20px] font-semibold">
						<p>the2MinEngineer</p>
					</div>

					{isMenuOpen ? (
						<CgClose
							className="text-2xl"
							onClick={toggleMenu}
						/>
					) : (
						<CgMenuRight
							className="text-2xl"
							onClick={toggleMenu}
						/>
					)}

					{isMenuOpen && (
						<div className="bg-white rounded-xl shadow-lg min-w-[200px] w-[300px] p-8 right-3 top-10 z-40 absolute">
							<div className="flex flex-col gap-3 items-end text">
								<ScrollLink
									to="projects"
									offset={-130}
									spy={true}
									smooth={true}
									duration={500}
									className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
								>
									Projects
								</ScrollLink>
								<ScrollLink
									to="about"
									spy={true}
									offset={-130}
									smooth={true}
									duration={500}
									className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
								>
									About me
								</ScrollLink>
								<ScrollLink
									to="https://medium.com/@The2MinEngineer"
									target="_blank"
									className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
								>
									Blog
								</ScrollLink>
								<ScrollLink
									to="https://medium.com/@The2MinEngineer"
									target="_blank"
									className="text-[20px] text-black opacity-70 hover:opacity-100 cursor-pointer"
								>
									Podcast
								</ScrollLink>
							</div>
							<Button
								label="Contact"
								className="text-[14px] mt-7 bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg flex justify-center gap-1"
								href="#contact"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
