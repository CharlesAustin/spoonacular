import React from 'react';
import Home from './Home';
import Details from './Details';
import { Route, Routes } from 'react-router-dom';

export default function Pages() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/details/:id"
				element={<Details />}
			/>
		</Routes>
	);
}
