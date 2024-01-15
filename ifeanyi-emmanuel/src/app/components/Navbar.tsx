"use client";

import React, { useState } from "react";
import Button from "./Button";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			{/* Desktop */}
			<div className="hidden lg:flex justify-between items-center py-10">
				<div className="text-[#3547EE] text-[24px] font-semibold">
					<p>the2MinEngineer</p>
				</div>
				<div className="flex items-center gap-6">
					<div className="flex justify-end items-center gap-6">
						<div className="flex items-center gap-6">
							<p>Projects</p>
							<p>About me</p>
							<p>Blog</p>
							<p>Podcast</p>
						</div>
					</div>
					<div className="flex items-center gap-6">
						<div className="flex justify-center items-center">
							<Button
								label="Contact"
								className="text-[14px] lg:text-[18px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg flex justify-center gap-1"
								href="#"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className="lg:hidden block relative">
				<div className="flex justify-between items-center py-10">
					<div className="text-[#3547EE] text-[24px] font-semibold">
						<p>the2MinEngineer</p>
					</div>

					{isMenuOpen ? (
						<CgClose
							className="text-3xl"
							onClick={toggleMenu}
						/>
					) : (
						<CgMenuRight
							className="text-3xl"
							onClick={toggleMenu}
						/>
					)}

					{isMenuOpen && (
						<div className="bg-white rounded-xl shadow-lg min-w-[200px] w-[300px] p-8 right-3 top-10 z-40 absolute">
							<div className="flex flex-col gap-3 items-end">
								<p>Projects</p>
								<p>About me</p>
								<p>Blog</p>
								<p>Podcast</p>
							</div>
							<Button
								label="Contact"
								className="text-[14px] mt-7 bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg flex justify-center gap-1"
								href="#"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
