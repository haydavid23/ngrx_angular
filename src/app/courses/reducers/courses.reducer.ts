import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { coursesActions } from "../courses.actionsType";
import { compareCourses, Course } from "../model/course";



export interface CoursesState extends EntityState<Course>{}

export const CoursesAdapter:EntityAdapter<Course> = createEntityAdapter<Course>({
    sortComparer:compareCourses
})

export const coursesinitState = CoursesAdapter.getInitialState()

export const coursesReducer = createReducer(
    coursesinitState,
    on(coursesActions.AllCoursesLoaded,(state, action)=>{
        return CoursesAdapter.addMany(action.courses, state)
    })
)

export const {selectAll} = CoursesAdapter.getSelectors()