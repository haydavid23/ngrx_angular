import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { finalize, first, mapTo, switchMap, tap } from "rxjs/operators";
import { AppState } from "../reducers";
import { coursesActions } from "./courses.actionsType";

@Injectable()
export class CoursesResolver implements Resolve<any>
{
    constructor(private store:Store<AppState>){}

    loading = false

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>
    {
        return this.store.pipe(tap((state)=>{
            console.log(state)
            if(!this.loading)
            {
                this.loading = true
                this.store.dispatch(coursesActions.loadedAllCourses())

            }
        }), first(), finalize(()=>{this.loading = false}))
    }
}