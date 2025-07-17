import {Routes, Route} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Error from "@/pages/Error";

import MainLayout from "@/layout";
import '@/App.css'

const AppContainer = ({children}: {children: React.ReactNode}) => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
			{children}
		</div>
	);
};

const App = () => {
	return (
		<AppContainer>
			<ErrorBoundary fallback={<Error />}>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</MainLayout>
			</ErrorBoundary>
		</AppContainer>
	);
};

export default App;
