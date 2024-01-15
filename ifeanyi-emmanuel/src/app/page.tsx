import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectContainer from "./containers/ProjectContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
	return (
		<div className="px-5 md:px-20 mx-auto lg:px-40 max-w-screen-2xl">
			<Navbar />
			<Header />
			<ProjectContainer />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default page;
