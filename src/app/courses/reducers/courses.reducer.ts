import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { coursesActions } from "../courses.actionsType";
import { Course } from "../model/course";



export interface Courses extends EntityState<Course>{}

export const CoursesAdapter:EntityAdapter<Course> = createEntityAdapter<Course>()

export const coursesinitState = CoursesAdapter.getInitialState()

// export interface CoursesState = 
// {

// }

export const coursesReducer = createReducer(
    coursesinitState,
    on(coursesActions.AllCoursesLoaded,(state, action)=>{
        return CoursesAdapter.addAll(action.courses, state)
    })
)
