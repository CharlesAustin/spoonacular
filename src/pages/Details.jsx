import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	BsFillCheckCircleFill,
	BsFillExclamationTriangleFill,
} from 'react-icons/bs';
// DETAILS PAGE req
// Recipe name
// Recipe image
// Health info
// list of ingredients
// cooking instructions
// For each ingredient: display ingredient name and measure

export default function Details() {
	let params = useParams();
	const [details, setDetails] = useState(false);

	const getDetails = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=ed473cbc57b2497681c87b11c775f61d`
		);
		const detailResult = await response.json();
		setDetails(detailResult);
	};

	useEffect(() => {
		getDetails();
	}, [params.id]);

	const RenderIngredients = () => {
		for (let i = 0; i < details.extendedIngredients.length; i++) {
			if (details && details.extendedIngredients[i]) {
				return details.extendedIngredients.map((item) => (
					<p
						className="ingredient__item"
						key={item.id}
					>
						{item.original}
					</p>
				));
			}
		}
	};

	return (
		<div className="recipe">
			{details && (
				<>
					<h1 className="recipe__title">{details.title}</h1>
					<img
						className="recipe__image"
						src={details.image}
						alt={details.title}
					/>
					<div className="recipe__details">
						<div className="recipe__details-container">
							<div className="recipe__ingredient-list">
								<h2 className="recipe__subheader">
									Ingredients
								</h2>
								<RenderIngredients />
							</div>
							<div className="recipe__health-facts">
								<h2 className="recipe__subheader">
									Health Facts
								</h2>
								<div class="recipe__factoid-grid">
									<p className="recipe__factoid">
										Vegan:{' '}
										{details.vegan ? (
											<BsFillCheckCircleFill />
										) : (
											<BsFillExclamationTriangleFill />
										)}
									</p>
									<p className="recipe__factoid">
										Dairy Free:{' '}
										{details.dairyFree ? (
											<BsFillCheckCircleFill />
										) : (
											<BsFillExclamationTriangleFill />
										)}
									</p>
									<p className="recipe__factoid">
										Gluten Free:{' '}
										{details.glutenFree ? (
											<BsFillCheckCircleFill />
										) : (
											<BsFillExclamationTriangleFill />
										)}
									</p>
									<p className="recipe__factoid">
										Vegetarian:{' '}
										{details.vegetarian ? (
											<BsFillCheckCircleFill />
										) : (
											<BsFillExclamationTriangleFill />
										)}
									</p>
									<p className="recipe__factoid">
										Very Healthy:{' '}
										{details.veryHealthy ? (
											<BsFillCheckCircleFill />
										) : (
											<BsFillExclamationTriangleFill />
										)}
									</p>
									<p className="recipe__factoid">
										Health Score: {details.healthScore}
									</p>
								</div>
							</div>
						</div>
						<div className="recipe__instructions">
							<h2 className="recipe__subheader">Preparation</h2>
							{details.instructions &&
								details.instructions.replace(
									/(<([^>]+)>)/gi,
									''
								)}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
