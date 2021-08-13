import React, { Component } from 'react';
// import Pagination from "react-bootstrap/Pagination";

type Props = {
    userPerpage: any;
    totalUser: any;

    paginate: any;
    prevPage: any;
    nextPage: any;
}

const Paginations : React.FC<Props> = ({ userPerpage, totalUser, paginate, prevPage, nextPage }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.floor(totalUser / userPerpage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={pageNumbers <= [1] ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#" onClick={() => prevPage()}>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(num => (
                    <li className={pageNumbers <= num ? 'page-item active' : 'page-item'} key={num}>
                        <a className="page-link" href="#" onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))}
                <li className={pageNumbers <= [1] ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#" onClick={() => nextPage()}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginations