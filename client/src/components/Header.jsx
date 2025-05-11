export default function Header() {
	const handleScroll = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-white shadow z-50">
			<div className="mx-auto  px-4 py-3 md:py-4  flex justify-between">
				<img
					src="/yustudy_logo.svg"
					alt="Logo"
					className="h-12 md:h-15  w-auto"
				/>
				<div className="flex items-center">
					<button
						onClick={handleScroll}
						className="cursor-pointer hover:bg-[#31302e] bg-black text-white p-3 px-5 rounded-xl md:text-lg"
					>
						Bize Katıl
					</button>
				</div>
			</div>
		</header>
	);
}
