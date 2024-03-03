import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EditEmployeeComponent } from '../components/employees/edit-employee/edit-employee.component';

@Injectable({
  providedIn: 'any'
})
export class EmployeesService {
  baseApiUrl : string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseApiUrl}/Employees/GetAllEmployees`);
  }


  addEmployee(addEmployeeRequest: Employee) : Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Employee>(this.baseApiUrl + '/Employees/AddEmployee',addEmployeeRequest);
  }

  getEmployee(id:string) : Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/Employees/' + id);
  }

  updateEmployee(id:string, updateEmployee : Employee) :Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/Employees/' + id, updateEmployee);
  }

  deleteEmployee(id:string):  Observable<Employee>{
   return this.http.delete<Employee>(this.baseApiUrl + '/Employees/' + id);
  }
}
