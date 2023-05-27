import { LoginCredentials } from './model/login-credentials.model';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  show = false;
  hide: boolean = true;
  autorisations_user: any;
  showError = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      mot_de_passe: ['', Validators.required],
    });
  }

  get controlsForm() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    let login: LoginCredentials = {
      username: this.loginForm.get('login').value,
      password: this.loginForm.get('mot_de_passe').value,
    };
    this.loginService.login(login).subscribe({
      next: (res) => {
        localStorage.setItem('jwt', JSON.stringify(res.jwttoken));
        alert('Bienvenue');
        this.router.navigate(['/menu']);
      },
      error: (e) => {
        this.showError = true;
      },
      complete: () => console.info('complete'),
    });
  }

  setShowError() {
    this.showError = !this.showError;
  }
}
