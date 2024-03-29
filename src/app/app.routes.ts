import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path : '',
        component : EmployeesListComponent
    },
    {
        path : 'employees',
        component : EmployeesListComponent
    },
    {
        path : 'employees/add',
        component : AddEmployeeComponent
    },
    {
        path : 'employees/edit/:id',
        component : EditEmployeeComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'signup',
        component : SignupComponent
    }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}

