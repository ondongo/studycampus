import ReactPaginate from "react-paginate";
import { NextArrowThree, PrevArrowThree } from "../svg";

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  isCenter?: boolean;
};

export default function Pagination({ handlePageClick, pageCount,isCenter}: IProps) {
  return (
    <nav>
      <ReactPaginate
        className={isCenter?'justify-content-center':''}
        breakLabel="..."
        activeClassName="current"
        nextLabel={<NextArrowThree />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<PrevArrowThree />}
        renderOnZeroPageCount={null}
      />
    </nav>
  );
}
