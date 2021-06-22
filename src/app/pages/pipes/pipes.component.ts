import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  jsonObj = {'name':'Oscar','last_name':'Gaytan'};
  dateVal = new Date();

  constructor() { }

  ngOnInit() {
  }

}
