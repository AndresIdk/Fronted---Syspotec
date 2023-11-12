import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm:FormGroup = new FormGroup({});

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
          nit: new FormControl('',[Validators.required ,Validators.pattern('^[0-9]*$')]),
          password: new FormControl('',[Validators.required,
             Validators.minLength(3),
             Validators.maxLength(12)])
      }
    )
  }

  sendCredentials():void{
    console.log('Hola')
    const body = this.loginForm.value;
    this.userService.submitLogin(body).subscribe((res) => {
      console.log(res)
    })
    console.log(body)
  }
}
