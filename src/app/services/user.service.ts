import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  private users$: Subject<User[]>;

  constructor() {
    this.users = [];
    this.users$ = new Subject();
   }

   addUser(user:User){
     //Add new user to array
      this.users.push(user);
      //Update observable to other components using it
      this.users$.next(this.users);
      console.log(this.users);
   }

   getUsers$(): Observable<User[]>{
     return this.users$.asObservable();
   }
}
