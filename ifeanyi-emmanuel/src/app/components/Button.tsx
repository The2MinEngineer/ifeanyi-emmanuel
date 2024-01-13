import Link from "next/link";

const Button = ({
	label,
	className,
	link,
}: {
	label: string;
	className?: string;
	link: string;
}) => {
	return (
		<Link
			href={link}
			className={className}
		>
			{label}
		</Link>
	);
};

export default Button;
