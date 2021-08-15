import { Component, Input, OnInit } from '@angular/core';
import { userStateSelector } from 'src/app/core/store/user/user.selector';
import {User, UserState} from "../../core/store/user/user.state";

@Component({
  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() 
    selectedUser = 


  constructor(   ) { }

  ngOnInit(): void { };
  
  }


