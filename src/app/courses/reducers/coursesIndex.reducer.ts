import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { coursesActions } from "../courses.actionsType";
import { CoursesState, CoursesAdapter, coursesReducer } from "./courses.reducer";




export interface additionalPropsInterface 
{
    firstProp:string;
    secondProp:string;
}

export const globalCoursesInitState:additionalPropsInterface=
{
   firstProp:"",
   secondProp:""
}

export const courseIndexReducers = createReducer(
    globalCoursesInitState,
    on(coursesActions.testCoursesLoaded, (state,action)=>{
        return {...state,firstProp:"changed", secondProp:"changed2"}
    })

) 

export interface test
{
    courseIndex:additionalPropsInterface;
    courses:CoursesState;
}

export const coursesReducerMap: ActionReducerMap<test> = {
    courseIndex: courseIndexReducers,
    courses: coursesReducer
    
};


