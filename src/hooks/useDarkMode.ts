import { getLocalTheme, setLocalTheme, getDataTheme, setDataTheme } from "@/utils/getLocalTheme";
import {useState, useEffect} from "react";

export const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		const currentTheme = getDataTheme() || "light";
		const newTheme = currentTheme === "dark" ? "light" : "dark";

		// Add no-transition class to prevent flash during toggle
		document.documentElement.classList.add('no-transition');

		setDataTheme(newTheme);
		setLocalTheme(newTheme);

		// Remove no-transition class after a short delay to enable animations
		setTimeout(() => {
			document.documentElement.classList.remove('no-transition');
		}, 50);

		setIsDarkMode(newTheme === "dark");
	};

	useEffect(() => {
		const savedTheme = getLocalTheme() || "light";

		// Add no-transition class to prevent flash on initial load
		document.documentElement.classList.add('no-transition');

		setDataTheme(savedTheme);
		setIsDarkMode(savedTheme === "dark");

		// Remove no-transition class after a short delay to enable animations
		setTimeout(() => {
			document.documentElement.classList.remove('no-transition');
		}, 100);
	}, []);

	return {isDarkMode, toggleDarkMode};
};
