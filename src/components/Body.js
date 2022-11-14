import React, { useState } from "react";
import jokes from "../datasets/jokes";

const Body = () => {
	const [index, setIndex] = useState(0);

	const nextJoke = () => {
		var tempIndex = index + 1;

		if (tempIndex >= jokes.length) {
			tempIndex = 0;
		}

		setIndex(tempIndex);
	};

	const prevJoke = () => {
		var tempIndex = index - 1;

		if (tempIndex < 0) {
			tempIndex = jokes.length - 1;
		}

		setIndex(tempIndex);
	};

	return (
		<div className='body'>
			<button type='button' onClick={prevJoke}>
				Prev
			</button>
			<section>
				<p>{jokes[index]}</p>
			</section>
			<button type='button' onClick={nextJoke}>
				Next
			</button>
		</div>
	);
};

export default Body;
