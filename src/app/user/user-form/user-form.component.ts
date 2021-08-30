import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User, UserState } from 'src/app/core/store/user/user.state';
import { Observable } from 'rxjs';


@Component({
  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
  ) { }
  
  userId = this.route.snapshot.paramMap.get("id");

  firstNameUrl= `api/user/retrieve/${this.userId}`;
  middleNameUrl= `api/user/getMiddlename/${this.userId}`;
  lastNameUrl= `api/user/getLastname/${this.userId}`;


  firstName(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.firstNameUrl);
  }

  firstNameDisplay = JSON.stringify(this.firstName());
  middleName = 'judy';
  lastName = 'hello';
  
  ngOnInit(): void {
    
    
  }
  }


