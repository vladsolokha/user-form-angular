import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import {RouterModule} from "@angular/router";
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    UserSearchComponent,
    CardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'user', component: UserComponent },
      { path: '', component: CardComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
