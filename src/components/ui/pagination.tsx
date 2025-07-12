import React from "react";
import ReactPaginate from "react-paginate";
import { NextArrowThree, PrevArrowThree } from "@/components/svg";

interface IProps {
  handlePageClick: (event: { selected: number }) => void;
  pageCount: number;
  isCenter?: boolean;
  currentPage?: number;
}

export default function Pagination({ handlePageClick, pageCount, isCenter, currentPage }: IProps) {
  return (
    <nav>
      <ReactPaginate
        className={isCenter ? 'justify-content-center' : ''}
        breakLabel="..."
        activeClassName="current"
        nextLabel={<NextArrowThree />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<PrevArrowThree />}
        renderOnZeroPageCount={null}
        forcePage={currentPage ? currentPage - 1 : undefined}
      />
    </nav>
  );
}
