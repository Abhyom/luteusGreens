import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<div className="bg-gradient-to-b from-mainGreen to-black h-screen w-screen">
			<div className="flex flex-col justify-center items-center">
				<Navbar />
			</div>
			<div className="">
				<Outlet />
			</div>
		</div>
	);
};

export default HomeLayout;
