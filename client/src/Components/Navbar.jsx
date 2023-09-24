import React from "react";
import Logo from "../assets/leafLogo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { House, Crown, CurrencyInr, ThumbsUp } from "phosphor-react";

const Navbar = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		/* ----------------------------- Main container ----------------------------- */
		<div className="bg-transparent flex justify-between w-[100%] items-center mt-8">
			{/* ---------------------------------- Logo ---------------------------------- */}
			<img
				src={Logo}
				alt=""
				className="object-fit rounded-full h-24 w-24 pt-4 pl-4 ml-6 mb-2"
			/>
			<div className="bg-[hsl(0,0%,100%,0.1)] backdrop-blur flex w-[50%] h-[80px] items-center space-x-8 justify-around">
				<hr className="h-[2px] w-[70%] mr-0 border-0 bg-[#6d7f7f] absolute left-[-500px]" />
				<ul className="text-white flex mr- space-x-20 text-lg rel">
					<li className="group flex items-center h-[80px] hover:border-b-4 hover:border-[#25bdab]">
						<Link className="h-[100%] flex items-center">
							<span className="mr-2">
								<House
									size={21}
									color="#FFFFFF"
									weight="regular"
									className=""
								/>
							</span>
							Home
						</Link>
					</li>
					<li
						className={
							splitLocation[1] === "leaderboard"
								? "group flex items-center h-[80px] border-b-4 border-[#25bdab]"
								: "group flex items-center h-[80px] hover:border-b-4 hover:border-[#25bdab]"
						}
					>
						<Link
							to="/leaderboard"
							className="group h-[100%] flex items-center"
						>
							<span className="mr-2">
								<Crown
									size={21}
									color="#FFFFFF"
									weight="regular"
									className=""
								/>
							</span>
							Leaderboard
						</Link>
					</li>
					<li className="flex items-center group h-[80px] hover:border-b-4 hover:border-[#25bdab]">
						<Link className="h-[100%] flex items-center">
							<span className="mr-2">
								<CurrencyInr
									size={21}
									color="#FFFFFF"
									weight="regular"
									className=""
								/>
							</span>
							Sell Us
						</Link>
					</li>
					<li className="flex items-center group h-[80px] hover:border-b-4 hover:border-[#25bdab]">
						<Link
							className="h-[100%] flex items-center"
							to="/bestPractise"
						>
							<span className="mr-2">
								<ThumbsUp
									size={21}
									color="#FFFFFF"
									weight="regular"
									className=""
								/>
							</span>
							Best Practisces
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
