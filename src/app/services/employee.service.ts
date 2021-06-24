import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map, catchError } from "rxjs/operators";

import { Employee } from "../models/employee";


const api_url = 'https://randomuser.me/api/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private router:Router) { }

  getEmployees(results:number = 10){
    return this.http.get(`${api_url}?results=${results}`)
            .pipe(
              map((resp:any) =>{

                const employees = resp.results.map( employee =>{

                  const {id,name, email, phone, location, picture} = employee;
                  return new Employee(
                              id.value || '---',
                              name.first +' '+name.last,
                              email,
                              phone,
                              location.city+', '+location.country,
                              picture.thumbnail
                                );
                });

                return {
                  employees: employees
                };
              })
            )

  }
}
