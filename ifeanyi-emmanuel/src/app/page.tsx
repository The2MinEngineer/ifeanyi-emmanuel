import Button from "./components/Button";
import Project from "./components/Project";
import projects from "./components/data.json";

export default function Home() {
	return (
		<>
			<div className="mx-auto w-full max-w-screen-xl px-5 md:px-20">
				<div className="pt-20 mx-auto text-center flex flex-col items-center max-w-3xl">
					<h1 className="font-bold text-2xl tracking-tight text-black sm:text-5xl">
						Hi, I’m Ifeanyi Emmanuel - a software engineer with almost{" "}
						<span className="text-blue-600">3 years</span> of experience
					</h1>
					<div className="mt-10">
						<Button
							link="/resume"
							label="Download Resume"
							className="py-4 px-8 text-white bg-blue-600 text-[16px] sm:text-xl cursor-pointer rounded-lg"
						/>
					</div>
				</div>

				<div className="w-full max-w-screen-xl px-5 md:px-20 pt-10 sm:pt-20 ">
					<div className="flex flex-col justify-start">
						<h3 className="text-xl sm:text-3xl font-bold text-black">
							Projects
						</h3>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
							{projects.projects.map((project) => (
								<Project
									key={project.id}
									title={project.title}
									imageSrc={project.image}
									primaryLink={project.links.website}
									secondaryLink={project.links.github}
									primaryLabel="Visit Site"
									secondaryLabel="Code"
									primaryClassName="py-4 px-8 text-white bg-blue-600 text-[16px] sm:text-xl cursor-pointer rounded-lg"
									secondaryClassName="py-4 px-8 text-blue-600 bg-white text-[16px] sm:text-xl cursor-pointer rounded-lg"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
