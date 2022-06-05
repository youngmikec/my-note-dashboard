import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { USER, USER_RESPONSE } from '../../models';
import { Users } from '../../providers';

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
        console.log(error);
      }
    })
  }

  trackByFunction(index: number, item: USER): number {
    return item.id
  }



}
