import React from "react";
import PropTypes from "prop-types";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="counter">
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>1</p>
				<p>{props.numTwo}</p>
				<p>{props.numOne}</p>
			</div>
		</div>
	);
};



SecondsCounter.propTypes = {
	numOne: PropTypes.number,
	numTwo: PropTypes.number,
}



export default SecondsCounter;
