import React from "react";
import { outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<div>
			<nav>navbar</nav>
			<Outlet />
		</div>
	);
};

export default HomeLayout;
