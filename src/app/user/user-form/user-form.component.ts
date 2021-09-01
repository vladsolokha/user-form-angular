import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/core/store/user/user.state';
import { UserFacade } from 'src/app/core/store/user/user.facade';
import { ActivatedRoute } from '@angular/router';


@Component({
  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  userId = this.route.snapshot.paramMap.get("id");

  user: User | undefined;

  constructor(
    private userFacade: UserFacade,
    private route: ActivatedRoute
    ) { }
  
  
  ngOnInit(): void {
    this.userFacade
    .retrieveById(`${this.userId}`)
    .subscribe(user => this.user = user);
    
  }
  }


