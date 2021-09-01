import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.state";
import {AppState} from "../app.state";

export const userStateSelector = createFeatureSelector<AppState, UserState>('user');

export const userSelectorById = (id: String) => createSelector(
    userStateSelector,
    (state) => state.data.filter(record => record.id === id)[0]
);

//userSelectorById is var that uses ngrx createSelector function
//to get userStateSelector and get one user from the array