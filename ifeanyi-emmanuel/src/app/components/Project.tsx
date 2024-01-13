import Image from "next/image";
import Button from "./Button";

const Project = ({
	imageSrc,
	title,
	primaryLink,
	secondaryLink,
	primaryLabel,
	secondaryLabel,
	primaryClassName,
	secondaryClassName,
}: {
	imageSrc: string;
	title: string;
	primaryLink: string;
	secondaryLink: string;
	primaryClassName: string;
	secondaryClassName: string;
	primaryLabel: string;
	secondaryLabel: string;
}) => {
	return (
		<div className="flex flex-col justify-start">
			<div className="mb-4">
				<img
					className="object-cover object-top  w-full h-full transition-all duration-300 group-hover:scale-125"
					src={imageSrc}
					alt={title}
				/>
			</div>
			<div className="">
				<h2 className="text-lg font-bold mb-2">{title}</h2>
				<div className="flex gap-4 justify-between">
					<Button
						label={primaryLabel}
						link={primaryLink}
						className={primaryClassName}
					/>
					<Button
						label={secondaryLabel}
						link={secondaryLink}
						className={secondaryClassName}
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
