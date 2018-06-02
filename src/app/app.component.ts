import { Component } from '@angular/core';
import { UserService } from './user.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any[];
  selectUsers: any[];
  pluckEmailUsers: any[];
  findUsers: any[];
  rejectUsers: any[];
  sortByUsers: any[];
  groupByUsers: any[];
  constructor(private userService: UserService){}
  ngOnInit(){
    this.userService.getUser().subscribe(
      res => {
        this.users = res['users'];
        this.assignValue();
      },
      error => {}
    )
  }
  assignValue(): void{
    this.selectUsers = _.select(this.users, function(user){
      if (user.role == 'Admin')
        return true;
    });
    this.pluckEmailUsers = _.pluck(this.users, 'email');
    this.findUsers = _.find(this.users, function(user){
      return user.email == 'mayurkambariya@gmail.com';
    });
    this.rejectUsers =_.reject(this.users, function(user){
      if (user.id > 3){
        return true;
      }
    })
    this.sortByUsers = _.sortBy(this.users, 'role');
    this.groupByUsers = _.groupBy(this.users, 'role');
  }
}
