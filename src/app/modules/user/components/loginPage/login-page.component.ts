import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '@modules/user/services/user.service';
import { StatesService } from '@modules/states/services/states.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private stateService: StatesService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        nit: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        password: new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)])
      }
    )
  }

  sendCredentials(): void {
    const body = this.loginForm.value;
    this.userService.submitLogin(body)
    .subscribe((res) => {
        this.router.navigate(['/', 'user', 'yyy'])
        console.log({ res });
      })

    this.stateService.getStates().subscribe((res) => {
      console.log({ estados: res });
    })
  }
}
