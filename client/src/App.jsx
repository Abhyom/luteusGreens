import React from "react";
import HomeLayout from "./Pages/HomeLayout";
import LandingPage from "./Pages/LandingPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{},
		],
	},
]);

const App = () => {
	return <div className="app"></div>;
};

export default App;
