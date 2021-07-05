import {initialUserState, UserState} from "./user.state";
import {UserActionType, UserRetrieveSuccessAction} from "./user.actions";
import {Action} from "@ngrx/store";

export function userReducer(
  state: UserState = initialUserState,
  action: Action
): UserState {
  switch(action.type){
    case UserActionType.Retrieve:
      return initialUserState;
    case UserActionType.RetrieveSuccess:
      return handleUserRetrieveSuccessAction(state, <UserRetrieveSuccessAction>action);
    default:
      return state;
  }
}

function handleUserRetrieveSuccessAction(
  state: UserState,
  action: UserRetrieveSuccessAction
): UserState {
  return {
    ...state,
    data: action.data
  }
}
