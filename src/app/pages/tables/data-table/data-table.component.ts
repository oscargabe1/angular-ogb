import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  employees:Employee[] = [];
  loading = true

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe( resp =>{
        this.employees = resp.employees;
        this.loading = false;
      });
  }

}
