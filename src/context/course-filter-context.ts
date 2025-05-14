import { FilterActions, FilterState } from "@/types/course-filter-type";
import React, { createContext } from "react";

interface FilterContextProps {
  state: FilterState;
  dispatch: React.Dispatch<FilterActions>;
}

export const CourseFilterContext = createContext<FilterContextProps | undefined>(
  undefined
);
