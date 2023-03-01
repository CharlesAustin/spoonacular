import React from 'react';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</div>
	);
}
