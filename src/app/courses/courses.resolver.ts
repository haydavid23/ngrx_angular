import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { filter, finalize, first, mapTo, switchMap, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { coursesActions } from "./courses.actionsType";
import { selectAllCourses } from "./courses.selectors";
import { Course } from "./model/course";

@Injectable()
export class CoursesResolver implements Resolve<any>
{
    constructor(private store:Store<AppState>){}

    loading = false

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>
    {
        return this.store.pipe(
            select(selectAllCourses),
            tap((course:Course[])=>{
            const courseLength = course.length
            if(!this.loading && courseLength == 0 )
            {
                this.loading = true
                this.store.dispatch(coursesActions.loadedAllCourses())
            }
        }),
        filter((course:Course[])=>{return course.length > 0}),
        first(), 
        finalize(()=>{this.loading = false}))
    }
}