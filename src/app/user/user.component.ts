import { Component, inject, OnDestroy } from '@angular/core';
import { User } from '../../models/user.class';
import { UsersService } from '../../services/users.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnDestroy {
  private usersService = inject(UsersService);
  user = new User();
  users: User[] = [];


  /**
    * Create subscription
    */
  constructor(public dialog: MatDialog) {
    this.usersService.users$.subscribe(users => this.users = users);
  }


  /**
   * Unsubscribe
   */
  ngOnDestroy(): void {
    this.usersService.users$.unsubscribe();
  }
  

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(
      // result => console.log(result)
    );
  }
}
