import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

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
  imports: [RouterLink, MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  usersService = inject(UsersService);
  user = new User();


  /**
    * Create subscription
    */
  constructor(public dialog: MatDialog) {  }
  

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(
      // result => console.log(result)
    );
  }

  // openUserDetails(userIndex: number) {
  //   const uids = this.usersService.getUids();
  //   console.log(uids[userIndex]);
  // }
}
