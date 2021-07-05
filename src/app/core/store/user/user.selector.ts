import {createFeatureSelector} from "@ngrx/store";
import {UserState} from "./user.state";
import {AppState} from "../app.state";

export const userStateSelector = createFeatureSelector<AppState, UserState>('user');
