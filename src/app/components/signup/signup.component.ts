import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  input_type:string = 'password';
  password_visibility: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  constructor(){}

  ngOnInit(): void {
      
  }

  update_visibility():void{
    this.password_visibility = !this.password_visibility;
    this.password_visibility ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.password_visibility ? this.input_type = "text" : this.input_type = "password"
    }
  }

