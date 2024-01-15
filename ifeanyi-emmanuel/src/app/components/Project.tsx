import Image from "next/image";
import Button from "./Button";

const Project = ({
	imageSrc,
	width,
	height,
	imageClassName,
	title,
	titleClassName,
	label1,
	label2,
	buttonClassName1,
	buttonClassName2,
	link1,
	link2,
}: {
	imageSrc: any;
	width: any;
	height?: number;
	imageClassName: string;
	title: string;
	titleClassName: string;
	label1: string;
	label2: string;
	buttonClassName1: string;
	buttonClassName2: string;
	link1: string;
	link2: string;
}) => {
	return (
		<div>
			<div>
				<Image
					src={imageSrc}
					alt={title}
					width={width}
					height={height}
					className={imageClassName}
					layout="responsive"
				/>
			</div>
			<div>
				<h2 className={titleClassName}>{title}</h2>
				<div className="flex justify-between items-center">
					<Button
						label={label1}
						className={buttonClassName1}
						href={link1}
					/>
					<Button
						label={label2}
						className={buttonClassName2}
						href={link2}
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
