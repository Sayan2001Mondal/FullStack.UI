import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit{
  employees : Employee[] = [];
  constructor(){

  }
  ngOnInit(): void {
      
  }
}
