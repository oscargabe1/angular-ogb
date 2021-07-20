import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activeUrl:string;
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
      icon: 'fa fa-table',
      children:[
        {
          title: 'Regular Table',
          link: 'tables/data',
          icon: 'fa fa-table'
        },
        {
          title: 'AngularMat Table',
          link: 'tables/material',
          icon: 'fab fa-angular'
        },
    ]
    }
  ]

  constructor(public router:Router, private activatedRoute: ActivatedRoute) {
   }
  

  ngOnInit() {
    this.activeUrl = this.router.url;
    this.getCurrent();
  }

  getCurrent(){
    console.log(this.router.url);
  }

  activateParent(child){
    console.log(child);
    this.activateParent = child;
  }

}
