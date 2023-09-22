import React from "react";
import Logo from "../assets/leafLogo.png";

const LandingPage = () => {
	return (
		<div className="flex items-start">
			{/* ------------------------------ Text content------------------------------ */}
			<div className="flex flex-col justify-center items-center mt-40  ml-36">
				<div className="flex flex-col md:flex-row justify-center items-center space-x-4">
					<h1 className="text-[#6d7f7f] font-popp text-7xl font-semibold">
						Luteus
					</h1>
					<h1 className="text-white font-popp text-7xl font-semibold">
						Greens
					</h1>
				</div>
				<p className="text-slate-500 text-lg font-popp mt-10 text-center ">
					Join us in our mission to make a clean and better India.
				</p>
				<p className="text-slate-300 text-lg font-popp mt-4 text-center">
					Champion Sustainability, Win Rewards. Rise to the Top for
					Thrilling Prizes!
				</p>
			</div>

			{/* ----------------------------- Logo and Button ---------------------------- */}
			<div className="flex flex-col justify-center items-center  ml-12">
				{/* ---------------------------------- Image --------------------------------- */}
				<img src={Logo} alt="Logo" className="w-7/12 h-7/12" />
				<button className="btn_landing_page text-white hover:text-[#002726] bg-gradient-to-t border border-slate-500 from-mainGreen to-black  py-4 px-10 text-lg font-semibold rounded-xl transition duration-300 ease-in-out">
					Register with us
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
