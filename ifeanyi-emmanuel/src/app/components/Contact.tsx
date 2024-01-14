import Link from "next/link";
import React from "react";

const Contact = () => {
	return (
		<div>
			<h1 className="text-[#000] text-[14px] lg:text-[20px] font-bold mb-[14px] lg:mb-5">
				Contact Me
			</h1>

			<div className="flex flex-col lg:flex-row gap-7">
				<div className="">
					<Link
						href="mailto:ifeanyiemmanueljoseph@gmail.com"
						className="text-[14px] text-[#3547EE] cursor-pointer hover:underline"
					>
						Ifeanyiemmanueljoseph@gmail.com
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
