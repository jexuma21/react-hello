import React from "react";
import PropTypes from "prop-types";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container">
			<div className="counter">
				<p>{props.numSix}</p>
				<p>{props.numFive}</p>
				<p>{props.numFour}</p>
				<p>{props.numThree}</p>
				<p>{props.numTwo}</p>
				<p>{props.numOne}</p>
			</div>
		</div>
	);
};



SecondsCounter.propTypes = {
	numOne: PropTypes.number,
	numTwo: PropTypes.number,
	numThree: PropTypes.number,
	numFour: PropTypes.number,
	numFive: PropTypes.number,
	numSix: PropTypes.number,
}



export default SecondsCounter;
