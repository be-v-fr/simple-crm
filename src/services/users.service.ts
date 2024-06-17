import { Injectable, inject, OnDestroy } from '@angular/core';
import { Firestore, collection, onSnapshot, collectionData, doc, addDoc } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnDestroy {
  private firestore = inject(Firestore);
  usersRef = collection(this.firestore, 'users');
  users$ = new Subject<User[]>();
  unsubUsers;


  /**
    * Create subscription
    */
  constructor() {
    this.unsubUsers = this.subUsers();
  }


  /**
   * Unsubscribe
   */
  ngOnDestroy(): void {
    this.unsubUsers();
  }


  /**
   * Subscribe to Firestore "users" collection to synchronize "users" array.
   * Also trigger "users$" observable on snapshot.
   * @returns subscription
   */
  subUsers() {
    return onSnapshot(this.usersRef, (list: any) => {
      let users: User[] = [];
      list.forEach((element: any) => users.push(new User(element.data())));
      this.users$.next(users);
    });
  }

  
  async addUser(user: User): Promise<void> {
    await addDoc(this.usersRef, user);
  }
}
