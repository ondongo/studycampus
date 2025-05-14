'use client';
import React from "react";
import { CourseContext } from "@/context/course-context";
import { ICourseDT } from "@/types/course-d-t";
import { online_courses_data } from "@/data/course-data";

type IPropType = {
  children: React.ReactNode;
};

export default function CourseProvider({ children }: IPropType) {
  const [activeTab, setActiveTab] = React.useState<string>("All Courses");
  const [filterCourse, setFilterCourse] = React.useState<ICourseDT[]>([...online_courses_data]);

  React.useEffect(() => {
    if (activeTab === "All Courses") {
      setFilterCourse([...online_courses_data]);
    } else if (activeTab === "Trending") {
      setFilterCourse(online_courses_data.slice(2, 4));
    } else if (activeTab === "Popularity") {
      setFilterCourse(online_courses_data.slice(4, 6));
    } else if (activeTab === "Featured") {
      setFilterCourse(online_courses_data.slice(0, 2));
    }
  }, [activeTab]);

  return (
    <CourseContext.Provider value={{ activeTab, setActiveTab,filterCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
