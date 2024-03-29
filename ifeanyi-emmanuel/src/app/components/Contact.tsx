import Link from "next/link";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { BsMedium } from "react-icons/bs";
import Form from "./Form";

const Contact = () => {
	return (
		<div id="contact">
			<h1 className="text-[20px] lg:text-[28px] mb-5 lg:mb-6 text-[#000] font-semibold">
				Contact Me
			</h1>

			<div className="flex flex-col lg:flex-row gap-10">
				<div className="">
					<div className="flex items-center gap-[16px] mt-[14px]">
						<Link
							href="mailto:ifeanyiemmanueljoseph@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdMail className="cursor-pointer text-2xl lg:text-3xl hover:text-[#3547EE] transition duration-300" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/ifeanyi-emmanuel/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<RiLinkedinFill className="cursor-pointer text-2xl lg:text-3xl hover:text-[#3547EE] transition duration-300" />
						</Link>
						<Link
							href="https://github.com/the2MinEngineer"
							target="_blank"
							rel="noopener noreferrer"
						>
							<RiGithubFill className="cursor-pointer text-2xl lg:text-3xl hover:text-[#3547EE] transition duration-300" />
						</Link>
						<Link
							href="https://medium.com/@The2MinEngineer/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsMedium className="cursor-pointer text-2xl lg:text-3xl hover:text-[#3547EE] transition duration-300" />
						</Link>
					</div>
				</div>
				<div className="w-full">
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Contact;
