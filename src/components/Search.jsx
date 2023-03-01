import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Paginate from './Paginate';

export default function Search() {
	const [query, setQuery] = useState('');
	const [searchedFor, setSearchedFor] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [cuisine, setCuisine] = useState('');

	const queryHandler = (e) => {
		setQuery(e.target.value);
	};

	const cuisineHandler = (e) => {
		setCuisine(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		getSearchResults(query, cuisine);
	};

	const getSearchResults = async (searchTerm, cuisineFilter) => {
		setSearchedFor(searchTerm);
		const response = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${
				import.meta.env.VITE_API_KEY
			}&query=${searchTerm}&cuisine=${cuisineFilter}&number=20`
		);
		const dishes = await response.json();
		setRecipes(dishes.results);
	};

	const resultsPerPage = 5;
	const pagesVisited = pageNumber * resultsPerPage;

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<div className="search">
			<form
				className="search__query"
				onSubmit={searchHandler}
			>
				<div className="search__query--container">
					<input
						className="search__input"
						onChange={queryHandler}
						type="text"
						value={query}
						placeholder="Enter a recipe name..."
					/>
					<button
						className="search__button"
						type="submit"
					>
						Search
					</button>
				</div>
				<div className="cuisine-filter">
					<p>Filter by cuisine: </p>
					<select onChange={cuisineHandler}>
						<option value="">All Cuisines</option>
						<option value="Italian">Italian</option>
						<option value="Greek">Greek</option>
						<option value="Mexican">Mexican</option>
						<option value="French">French</option>
						<option value="Indian">Indian</option>
						<option value="Thai">Thai</option>
						<option value="Mediterranean">Mediterranean</option>
					</select>
				</div>
			</form>

			<div className="search-results">
				{recipes.length > 0 && (
					<p className="search-results__indicator">
						Showing results for: {searchedFor}
					</p>
				)}
				{!recipes.length > 0 && searchedFor && <p>No results found!</p>}
				<div className="search-results__grid">
					{recipes &&
						recipes
							.slice(pagesVisited, pagesVisited + resultsPerPage)
							.map((item) => {
								return (
									<div
										key={item.id}
										className="search-results__item"
									>
										<Link to={`/details/${item.id}`}>
											<img
												className="search-results__img"
												src={item.image}
												alt={item.title}
											/>
										</Link>
										<p className="search-results__title">
											{item.title}
										</p>
									</div>
								);
							})}
				</div>
			</div>
			{recipes.length > 0 && (
				<Paginate
					pageCount={Math.ceil(recipes.length / resultsPerPage)}
					onPageChange={changePage}
				/>
			)}
		</div>
	);
}
