/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '.';

test('On initial render, Navbar is active', () => {
	render(
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	);

	screen.debug();
});
