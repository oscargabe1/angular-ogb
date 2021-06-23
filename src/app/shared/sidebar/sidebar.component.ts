import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tabs = [
    {
      title: 'Forms',
      link: 'forms',
      icon: 'far fa-check-square'
    },
    {
      title: 'Pipes',
      link: 'pipes',
      icon: 'fab fa-pied-piper-alt'
    },
    {
      title: 'Tables',
      link: 'tables',
      icon: 'fa fa-table'
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
