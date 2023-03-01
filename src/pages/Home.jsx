import React from 'react';
import Search from '../components/Search';
import Paginate from '../components/Paginate';
import { GiChickenLeg } from 'react-icons/gi';
// HOMEPAGE reqs
// search input
// search button (execute on enter/button click)
// search results with pagination (5/page)
// each search result should display: recipe name, recipe image
// link to recipe detail page

export default function Home() {
	return (
		<div className="homepage">
			<h1 className="homepage__title">
				Recipe Finder
				<span className="homepage__icon">
					<GiChickenLeg />
				</span>
			</h1>
			<Search />
		</div>
	);
}
