import Link from "next/link";
import { RiLinkedinFill, RiGithubFill, RiSpotifyFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import Form from "./Form";

const Contact = () => {
	return (
		<div>
			<h1 className="text-[#000] text-[14px] lg:text-[20px] font-bold mb-[14px] lg:mb-5">
				Contact Me
			</h1>

			<div className="flex flex-col lg:flex-row gap-10">
				<div className="">
					<Link
						href="mailto:ifeanyiemmanueljoseph@gmail.com"
						className="lg:mb-[14px] text-[14px] text-[#3547EE] cursor-pointer hover:underline"
					>
						Ifeanyiemmanueljoseph@gmail.com
					</Link>

					<div className="flex items-center gap-[16px] mt-[14px]">
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
						<Link
							href="https://medium.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<RiSpotifyFill className="cursor-pointer text-2xl lg:text-3xl hover:text-[#3547EE] transition duration-300" />
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
