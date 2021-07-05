import {Injectable} from "@angular/core";
import {UserService} from "../../service/user/user.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {UserActionType, UserRetrieveSuccessAction} from "./user.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {ErrorAction} from "../error/error.actions";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private service: UserService) {}

  retrieve$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionType.Retrieve),
      switchMap(() => {
        return this.service.retrieve().pipe(
          map(response => new UserRetrieveSuccessAction(response)),
          catchError(error => of(new ErrorAction(error)))
        );
      })
    );
  });
}
