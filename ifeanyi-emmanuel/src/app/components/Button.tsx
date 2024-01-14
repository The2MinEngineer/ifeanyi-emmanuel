import Link from "next/link";
import React from "react";

const Button = ({
	label,
	className,
	href,
}: {
	label: string;
	className: string;
	href: string;
}) => {
	return (
		<Link
			href={href}
			className={className}
		>
			{label}
		</Link>
	);
};

export default Button;
