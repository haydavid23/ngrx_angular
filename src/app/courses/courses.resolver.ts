import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { filter, finalize, first, mapTo, switchMap, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { coursesActions } from "./courses.actionsType";
import { areCoursesLoaded, selectAllCourses } from "./courses.selectors";
import { Course } from "./model/course";

@Injectable()
export class CoursesResolver implements Resolve<any>
{
    constructor(private store:Store<AppState>){}

    loading = false

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>
    {
        return this.store.pipe(
            select(areCoursesLoaded),
            tap((coursesLoaded:boolean)=>{
           
            if(!this.loading && !coursesLoaded )
            {
                this.loading = true
                setTimeout(() => {
                this.store.dispatch(coursesActions.loadedAllCourses())

                }, 4000);
            }
        }),
        filter((coursesLoaded)=>{return coursesLoaded}),
        first(), 
        finalize(()=>{this.loading = false})
        
        )
    }
}