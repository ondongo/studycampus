import { useContext } from "react";
import { CourseFilterContext } from "@/context/course-filter-context";

export default function useCourseFilter() {
  const context = useContext(CourseFilterContext);

  if (!context) {
    return {
      state: {
        courses: [],
        filteredCourses: [],
        sortBy: "",
        category: "",
        instructor: "",
        priceFilter: "all",
        language: "",
      },
      dispatch: () => {},
    };
  }

  return context;
}
