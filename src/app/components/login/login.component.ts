import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  input_type:string = 'password';
  password_visibility: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  loginForm! : FormGroup;
constructor(private fb: FormBuilder){

}
ngOnInit(): void {
    
}

  update_visibility():void{
    this.password_visibility = !this.password_visibility;
    this.password_visibility ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.password_visibility ? this.input_type = "text" : this.input_type = "password"
    }
  }
