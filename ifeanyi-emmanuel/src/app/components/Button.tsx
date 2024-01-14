import Link from "next/link";
import React from "react";

const Button = ({
	label,
	className,
	href,
	download,
	target,
}: {
	label: string;
	className: string;
	href: string;
		download?: string;
		target?: string;
}) => {
	return (
		<Link
			href={href}
			className={className}
			download={download}
			target={target}
		>
			{label}
		</Link>
	);
};

export default Button;
