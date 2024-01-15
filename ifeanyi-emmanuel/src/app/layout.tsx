import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "the2MinEngineer",
	description:
		"Building Tomorrow's Digital Dreams: Ifeanyi Emmanuel, Fullstack Developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${poppins.variable}`}>
			<body>{children}</body>
		</html>
	);
}
