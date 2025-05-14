import { ICourseDT } from "./course-d-t";

  export interface FilterState {
    courses: ICourseDT[];
    filteredCourses: ICourseDT[];
    sortBy: string;
    category: string;
    instructor: string;
    priceFilter: 'free' | 'paid' | 'all' | '';
    language: string;
    searchTerm: string;
  }
  
  export enum FilterActionTypes {
    SET_SORT_BY = 'SET_SORT_BY',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_INSTRUCTOR = 'SET_INSTRUCTOR',
    SET_PRICE = 'SET_PRICE',
    SET_LANGUAGE = 'SET_LANGUAGE',
    RESET_FILTER = 'RESET_FILTER',
    SET_SEARCH_TERM = 'SEARCH_TERM',
  }
  
  interface SetSortByAction {
    type: FilterActionTypes.SET_SORT_BY;
    payload: string;
  }
  
  interface SetCategoryAction {
    type: FilterActionTypes.SET_CATEGORY;
    payload: string;
  }
  
  interface SetInstructorAction {
    type: FilterActionTypes.SET_INSTRUCTOR;
    payload: string;
  }
  
  interface SetPriceAction {
    type: FilterActionTypes.SET_PRICE;
    payload: 'free' | 'paid' | 'all';
  }
  
  interface SetLanguageAction {
    type: FilterActionTypes.SET_LANGUAGE;
    payload: string;
  }

  interface SearchTermAction {
    type: FilterActionTypes.SET_SEARCH_TERM;
    payload: string;
  }

  interface ResetFilterAction {
    type: FilterActionTypes.RESET_FILTER;
  }
  
  export type FilterActions =
    | SetSortByAction
    | SetCategoryAction
    | SetInstructorAction
    | SetPriceAction
    | SetLanguageAction
    | ResetFilterAction
    | SearchTermAction;
  