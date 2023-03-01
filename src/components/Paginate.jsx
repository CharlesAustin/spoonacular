import React from 'react';
import ReactPaginate from 'react-paginate';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Paginate({ pageCount, onPageChange }) {
	return (
		<ReactPaginate
			previousLabel={<BiLeftArrow />}
			nextLabel={<BiRightArrow />}
			breakLabel={'...'}
			breakClassName={'break-me'}
			pageCount={pageCount}
			marginPagesDisplayed={2}
			pageRangeDisplayed={5}
			onPageChange={onPageChange}
			containerClassName={'pagination'}
			previousClassName={'pagination__previous'}
			pageLinkClassName={'pagination__link'}
			nextClassName={'pagination__next'}
			disabledClassName={'pagination--disabled'}
			activeClassName={'pagination--active'}
		/>
	);
}
