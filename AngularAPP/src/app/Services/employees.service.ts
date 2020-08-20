import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  products: Employee[] = [];
  gnome: Employee;

  constructor() {}

  public getProducts(): Observable<Employee[]> {
    const EMPLOYEES = require('./employees.json');
    return of(EMPLOYEES).pipe(tap((data) => console.log('service ', data)));
  }
}
