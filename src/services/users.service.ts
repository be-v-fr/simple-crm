import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private firestore = inject(Firestore);
  usersRef = collection(this.firestore, 'users');

  constructor() { }

  async addUser(user: User) {
    await addDoc(this.usersRef, user);
  }
}
