import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit{
  employees : Employee[] = [];
  constructor(private empService: EmployeesService){
empService.getAllEmployees().subscribe((res:Employee[])=>{
  this.employees = res;
})
  }
  ngOnInit(): void {
      
  }
}
