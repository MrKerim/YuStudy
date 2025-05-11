import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 container mx-auto px-4 pt-10 md:pt-20">
				{children}
			</main>{" "}
			{/* <- pt-20 added */}
			<Footer />
		</div>
	);
}
