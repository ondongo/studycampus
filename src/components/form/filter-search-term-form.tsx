'use client';
import { useEffect, useState } from 'react';
import { SearchSvg } from '@/components/svg';
import useDebounce from '@/hooks/use-debounce';
import useCourseFilter from '@/hooks/use-course-filter';
import { FilterActionTypes } from '@/types/course-filter-type';

type IProps = {
  btnCls?: string;
  svgClr?: string;
}
export default function FilterSearchTerm({btnCls='tp-course-filter-top-right-search-btn',svgClr='#8B8B8B'}: IProps) {
  const { dispatch } = useCourseFilter();
  const [searchTerm, setSearchTerm] = useState('');
  const debounceValue = useDebounce(searchTerm, 200);

  useEffect(() => {
    if (debounceValue) {
      dispatch({ type: FilterActionTypes.SET_SEARCH_TERM, payload: debounceValue });
    } else {
      dispatch({ type: FilterActionTypes.SET_SEARCH_TERM, payload: '' });
    }
  }, [debounceValue, dispatch]);

  return (
    <form>
      <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search for Courses..." />
      <button className={btnCls} type="button">
        <span>
          <SearchSvg clr={svgClr} />
        </span>
      </button>
    </form>
  )
}
