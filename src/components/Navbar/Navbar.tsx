import DarkModeToggle from "../DarkModeToggle";

export default function Navbar() {
	return (
		<nav className="">
			<div className="container mx-auto flex justify-between items-center absolute top-0 left-0 right-0 z-100">
				<DarkModeToggle />
			</div>
		</nav>
	);
}
