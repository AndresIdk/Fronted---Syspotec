import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm:FormGroup = new FormGroup({});

  constructor(private userService:UserService) { }

  ngOnInit(): void{
    this.registerForm = new FormGroup(
      {
        firs_name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
        last_name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
        nit: new FormControl('',[Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(5), Validators.maxLength(12)]),
        email: new FormControl('',
        {
          validators: [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)],
          asyncValidators: this.userService.validateEmail(),
          updateOn: 'blur',

        }),
        password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
        password_confirmation: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(12)])
      },
      {
        validators: passwordMatchValidator
      }
    )
  }

  sendCredentials():void{
    const body = this.registerForm.value;
    console.log(body)
  }
}

function passwordMatchValidator(form:FormGroup | AbstractControl):any {

  const password = form.get('password');
  const password_confirmation = form.get('password_confirmation');
  return password?.value === password_confirmation?.value ? null : {mismatch: true};
}
