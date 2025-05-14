'use client';
import { CourseFilterContext } from "@/context/course-filter-context";
import { courseFilterReducer } from "@/reducers/courseFilterReducer";
import { ICourseDT } from "@/types/course-d-t";
import { FilterState } from "@/types/course-filter-type";
import { ReactNode, useReducer } from "react";

const initialState: FilterState = {
    courses: [],
    filteredCourses: [],
    sortBy: '',
    category: '',
    instructor: '',
    priceFilter: '',
    language: '',
    searchTerm: ""
};

interface FilterProviderProps {
    children: ReactNode;
    initialCourses: ICourseDT[];
}

const CourseFilterProvider: React.FC<FilterProviderProps> = ({ children, initialCourses }) => {
    const [state, dispatch] = useReducer(courseFilterReducer, {
        ...initialState,
        courses: initialCourses,
        filteredCourses: initialCourses,
    });

    return (
        <CourseFilterContext.Provider value={{ state, dispatch }}>
            {children}
        </CourseFilterContext.Provider>
    );
};

export default CourseFilterProvider;