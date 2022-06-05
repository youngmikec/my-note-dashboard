import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DB_USERS, USER, USER_RESPONSE } from 'src/app/models';
import { Users } from 'src/app/providers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loading: boolean = false;
  user: USER | undefined;
  sub: Subscription | null = null;

  constructor(
    private users: Users,
  ) { }

  ngOnInit(): void {
    this.getNotesRecords();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  getNotesRecords(): void {
    this.loading = true;
    this.sub = this.users.retrieveUsers().subscribe({
      next: (res: USER_RESPONSE) => {
        if(res.status === 'success'){
          this.user = res.data;
        }
      },
      error: (error: any) => {
        this.loading = false;
        // an alternative if the request is blocked by CORS policy
        this.user = DB_USERS[0]
        console.log('error => ', error);
      }
    })
  }

  trackByFunction(index: number, item: USER): number {
    return item.id
  }



}
