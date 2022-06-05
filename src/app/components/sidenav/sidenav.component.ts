import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links: {title: string, urlPath: string, icon: string }[] = [
    {
      title: "Users",
      urlPath: "/users",
      icon: "group"
    },
    {
      title: "Notes",
      urlPath: "/notes",
      icon: "library_books"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
