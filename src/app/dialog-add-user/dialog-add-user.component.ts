import { Component, Inject, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  private usersService = inject(UsersService);

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    @Inject(MAT_DIALOG_DATA) public birthDate: Date,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveNewUser(): void {
    this.user.birthDate = this.birthDate.getTime();
    this.usersService.addUser(this.user);
  }
}
