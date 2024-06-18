import { Component, Inject, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';


import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  usersService = inject(UsersService);
  user = new User();

  constructor(private route: ActivatedRoute) {
    const uid = this.route.snapshot.params['id'];
    this.user = this.usersService.getUserByUid(uid);
  }
}
