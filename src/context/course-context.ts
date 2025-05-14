import React from "react";
import { ICourseDT } from "@/types/course-d-t";

type InitialContext = {
    activeTab:string;
    setActiveTab:React.Dispatch<React.SetStateAction<string>>;
    filterCourse: ICourseDT[];
}

export const CourseContext = React.createContext<InitialContext | null>(null)