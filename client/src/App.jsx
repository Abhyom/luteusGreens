import React from "react";
import HomeLayout from "./Pages/HomeLayout";
import LandingPage from "./Pages/LandingPage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import BestPage from "./Pages/BestPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "/leaderboard",
				element: <LeaderboardPage />,
			},
			{
				path: "/bestPractise",
				element: <BestPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
