import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/courses.reducer";
import * as fromCourses from "./reducers/courses.reducer"
import { Course } from "./model/course";

export const selectCoursesState = createFeatureSelector<CoursesState>("courses")

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
)

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    (courses:Course[])=>{return courses.filter((course:Course)=>{return course.category == "BEGINNER"})}
)

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    (courses:Course[])=>{return courses.filter((course:Course)=>{return course.category == "ADVANCED"})}
)

export const selectPromoTotal = createSelector(
    selectAllCourses,
    (courses:Course[])=>{return courses.filter((course:Course)=>{return course.promo}).length}
)
