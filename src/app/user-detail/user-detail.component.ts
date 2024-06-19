import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.class';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserMainComponent } from '../dialog-edit-user-main/dialog-edit-user-main.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    DialogEditAddressComponent,
    DialogEditUserMainComponent
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit, OnDestroy {
  usersService = inject(UsersService);
  user = new User();
  usersSub = new Subscription();

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const uid = this.route.snapshot.params['id'];
    if (this.usersService.getUsers().length > 0) { this.setUser(uid) }
    else {
      this.usersSub = this.usersService.users$.subscribe(() => this.setUser(uid));
    }
  }

  setUser(uid: string) {
    this.user = this.usersService.getUserByUid(uid);
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

  editUserMain() {
    const dialogRef = this.dialog.open(DialogEditUserMainComponent, {
      data: {},
    });
    dialogRef.componentInstance.user = new User(this.user.toJson());
    dialogRef.componentInstance.uid = this.usersService.getUid(this.user);
    dialogRef.componentInstance.birthDate = new Date(this.user.birthDate);
  }

  editAddress() {
    const dialogRef = this.dialog.open(DialogEditAddressComponent, {
      data: {},
    });
    dialogRef.componentInstance.user = new User(this.user.toJson());
  }
}
