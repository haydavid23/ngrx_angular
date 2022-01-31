import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { coursesActions } from "./courses.actionsType";
import { Course } from "./model/course";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects
{
    constructor(private actions$:Actions, private coursesHttpService:CoursesHttpService){}

loadCurses$ = createEffect(()=> this.actions$.pipe(ofType(coursesActions.loadedAllCourses),
switchMap((action)=>{
    return this.coursesHttpService.findAllCourses()
}),
map((courses:Array<Course>)=>{
    return coursesActions.AllCoursesLoaded({courses})
})


),{dispatch:true})











}