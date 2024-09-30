import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  user: any;
  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe (
      (response) => {
        console.log(response);
        if(response && response.data && response.data.token) {
          // Lưu token vào localStorage
          // console.log(response.data.token)
          localStorage.setItem('token', response.data.token);
          // Điều hướng đến dashboard
          this.router.navigate(['/dashboard']);
        }
      }, 
      (error) => {
        this.errorMessage = "Login failed";
        console.warn(error);
      }
    )
  }

  getUser() {
    return this.user ? this.user : JSON.parse(localStorage.getItem('user')!);
  }
}
