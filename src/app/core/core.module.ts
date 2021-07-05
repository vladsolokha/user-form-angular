import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {environment} from "../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {NgModule} from "@angular/core";
import {UserEffects} from "./store/user/user.effects";
import {userReducer} from "./store/user/user.reducer";

@NgModule({
  imports: [
    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreModule.forRoot({
      user: userReducer,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreModule {}
