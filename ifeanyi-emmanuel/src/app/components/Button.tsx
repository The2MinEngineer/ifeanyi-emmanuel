import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
	label: string;
	className: string;
	href: string;
	download?: string;
	target?: string;
	icon?: ReactNode;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	label,
	className,
	href,
	download,
	target,
	icon,
	onClick,
}) => {
	return (
		<Link
			href={href}
			className={className}
			download={download}
			target={target}
			onClick={onClick}
		>
			{label}
			{icon && icon}
		</Link>
	);
};

export default Button;
