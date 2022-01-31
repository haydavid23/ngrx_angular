import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";



export const loadedAllCourses = createAction(
    "[Courses Resolver] Load All Courses"
)


export const AllCoursesLoaded = createAction(
    "[Load Courses Effect] All Courses Loaded",props<{courses:Course[]}>()
)