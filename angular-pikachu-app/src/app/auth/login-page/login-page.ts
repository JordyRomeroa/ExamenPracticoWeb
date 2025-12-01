import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUtils } from '../../shared/form.utils';

const USER = {
  email: 'usuario@ups.edu.ec',
  password: '123456',
};

@Component({
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  imports: [ReactiveFormsModule],
})
export class LoginPage {
  error = signal('');
  form: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    const { email, password } = this.form.value;

    if (email === USER.email && password === USER.password) {
      this.router.navigate(['/home']);
    } else {
      this.error.set('Credenciales incorrectas');
    }
  }

  f = FormUtils;
}
