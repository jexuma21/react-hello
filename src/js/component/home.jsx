import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedcolor, setSelectedColor ]= useState("")
	return (
		<div className="center">
			<div className="wire"></div>
			<div className="box">
			<div onClick={() => setSelectedColor('red')}
			className={"light red " + (selectedcolor === "red" ? "ambient" : "")} ></div>

			<div onClick={() => setSelectedColor('yellow')}
			className={"light yellow " + (selectedcolor === "yellow" ? "ambient" : "")} ></div>
			
			<div onClick={() => setSelectedColor('green')}
			className={"light green " + (selectedcolor === "green" ? "ambient" : "")} ></div>
			
			
			</div>
		</div>
	);
};

export default Home;
