import React from 'react';
import { Pagination } from 'react-bootstrap';

const MyPagination = ({ total, currentPage, onChangePage }) => {
    const pages = [];

    const startPages = [];
    const endPages = [];
    const middlePages = [];

    for (let i = 1; i <= Math.min(3, total); i++) {
        startPages.push(i);
    }

    for (let i = total; i > total - 3 && i > 3; i--) {
        endPages.unshift(i);
    }

    if (currentPage > 3 && currentPage < total - 2) {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            middlePages.push(i);
        }
    }

    const shouldShowStartEllipsis = startPages[startPages.length - 1] + 1 < middlePages[0];
    const shouldShowEndEllipsis = middlePages[middlePages.length - 1] + 1 < endPages[0];

    pages.push(...startPages);

    if (shouldShowStartEllipsis) {
        pages.push('...');
    }

    pages.push(...middlePages);

    if (shouldShowEndEllipsis) {
        pages.push('...');
    }

    pages.push(...endPages);

    return (
        <Pagination className='justify-content-center'>
            {currentPage > 1 && (
                <Pagination.Prev onClick={() => onChangePage(currentPage - 1)} />
            )}

            {pages.map((page, index) => (
                typeof page === 'number' ? (
                    <Pagination.Item
                        key={index}
                        active={page === currentPage}
                        onClick={() => onChangePage(page)}
                    >
                        {page}
                    </Pagination.Item>
                ) : (
                    <Pagination.Ellipsis key={index} />
                )
            ))}

            {currentPage < total && (
                <Pagination.Next onClick={() => onChangePage(currentPage + 1)} />
            )}
        </Pagination>
    );
};

export default MyPagination;
