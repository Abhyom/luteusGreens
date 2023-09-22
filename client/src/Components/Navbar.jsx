import React from "react";
import Logo from "../assets/leafLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		/* ----------------------------- Main container ----------------------------- */
		<div className="flex justify-between">
			{/* ---------------------------------- Logo ---------------------------------- */}
			<img
				src={Logo}
				alt=""
				className="object-fit rounded-full h-24 w-24 pt-6 pl-4 mr-4 mt-4"
			/>
			<hr />
			<ul className="text-white flex mr-8 space-x-10 mt-16 text-lg">
				<li>
					<Link>Home</Link>
				</li>
				<li>
					<Link to="/leaderboard">Leaderboard</Link>
				</li>
				<li>
					<Link>Sell</Link>
				</li>
				<li>
					<Link>Best Practisces</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
