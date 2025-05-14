import { ICourseDT } from "@/types/course-d-t";
import {
  FilterState,
  FilterActions,
  FilterActionTypes,
} from "@/types/course-filter-type";

const filterCourses = (state: FilterState): ICourseDT[] => {
  let courses = state.courses;

  // Apply filters
  if (state.category) {
    courses = courses.filter((course) => {
      if (state.category.includes("All Courses")) {
        return true;
      } else if (state.category.includes(course.category)) {
        return true;
      }
      return false;
    });
    
  }

  //   Apply instructor filter
  if (state.instructor) {
    courses = courses.filter(
      (course) => course.author_name === state.instructor
    );
  }

  //   Apply language filter
  if (state.language) {
    courses = courses.filter((course) => course.language === state.language);
  }

  //   Apply search term
  if (state.searchTerm) {
    courses = courses.filter((course) =>
      course.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }

  //   Apply price filter
  if (state.priceFilter === "free") {
    courses = courses.filter((course) => course.price === 0);
  } else if (state.priceFilter === "paid") {
    courses = courses.filter((course) => course.price > 0);
  } else if (state.priceFilter === "all") {
    courses = [...courses];
  }

  // Apply sorting
  if (state.sortBy === "low") {
    courses = [...courses].sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "rating") {
    courses = [...courses].sort((a, b) => b.avg_rating - a.avg_rating);
  } else if (state.sortBy === "high") {
    courses = [...courses].sort((a, b) => b.price - a.price);
  }

  return courses;
};

export const courseFilterReducer = (
  state: FilterState,
  action: FilterActions
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        filteredCourses: filterCourses({ ...state, sortBy: action.payload }),
      };

    case FilterActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        filteredCourses: filterCourses({ ...state, category: action.payload }),
      };

    case FilterActionTypes.SET_INSTRUCTOR:
      return {
        ...state,
        instructor: action.payload,
        filteredCourses: filterCourses({
          ...state,
          instructor: action.payload,
        }),
      };

    case FilterActionTypes.SET_PRICE:
      return {
        ...state,
        priceFilter: action.payload,
        filteredCourses: filterCourses({
          ...state,
          priceFilter: action.payload,
        }),
      };

    case FilterActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
        filteredCourses: filterCourses({ ...state, language: action.payload }),
      };

    case FilterActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
        filteredCourses: filterCourses({
          ...state,
          searchTerm: action.payload,
        }),
      };

    case FilterActionTypes.RESET_FILTER:
      return {
        ...state,
        category: "",
        instructor: "",
        priceFilter: "",
        language: "",
        filteredCourses: state.courses,
      };

    default:
      return state;
  }
};
