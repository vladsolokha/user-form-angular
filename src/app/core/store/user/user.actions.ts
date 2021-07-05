import {Action} from "@ngrx/store";
import {User} from "./user.state";

export enum UserActionType {
  Retrieve = '[User] Retrieve',
  RetrieveSuccess = '[User] Retrieve Success'
}

export class UserRetrieveAction implements Action {
  readonly type = UserActionType.Retrieve;
}

export class UserRetrieveSuccessAction implements Action {
  readonly type = UserActionType.RetrieveSuccess;
  constructor(public data: User[]){}
}
