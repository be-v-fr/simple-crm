import { Injectable, inject, OnDestroy } from '@angular/core';
import { Firestore, collection, onSnapshot, collectionData, doc, getDocs, addDoc } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { User } from '../models/user.class';


@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnDestroy {
  private firestore = inject(Firestore);
  private usersRef = collection(this.firestore, 'users');
  private users$ = new Subject<User[]>();
  private users: User[] = [];
  private uids: string[] = [];
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
      this.users = [];
      this.uids = [];
      list.forEach((element: any) => {
        this.users.push(new User(element.data()));
        this.uids.push(element.id);
      });
      this.users$.next(this.users);
    });
  }


  getUsers(): User[] {
    return this.users;
  }


  getUid(user: User): string | null {
    const index = this.users.indexOf(user);
    if(index >= 0) {return this.uids[index]}
    else {
      console.error('User not found', user);
      return null;
    }
  }

  
  async addUser(user: User): Promise<void> {
    await addDoc(this.usersRef, user);
  }
}
