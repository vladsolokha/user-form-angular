import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserSearchComponent} from './user/user-search/user-search.component';
import {RouterModule} from "@angular/router";
import {CardComponent} from './card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserComponent,
    UserFormComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'user', component: UserComponent},
      {path: 'user/form', component: UserFormComponent},
      {path: 'user/search', component: UserSearchComponent},
      {path: '', component: CardComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'},
    ]),
    SharedModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
