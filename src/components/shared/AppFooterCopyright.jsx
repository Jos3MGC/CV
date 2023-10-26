function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<span
					className="dark:hover:text-indigo-300 ml-1 duration-500"
				>
					React & Tailwind CSS Portfolio
				</span>
				.
				<a
					href="https://www.linkedin.com/in/gonzalezcruzjosem"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					JoséMGC.
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
