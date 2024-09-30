import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/e/v1/login'; // URL của API
  user: any = null;

  constructor(private http: HttpClient) {}

  // Hàm đăng nhập
  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post(this.apiUrl, body);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.user = null;
  }

  getUser() {
    if (!this.user) {
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      if (token) {
        // Decode the token using jwt-decode
        const decodedToken: any = jwtDecode(token);

        // Extract the fullName from the decoded token
        this.user = {
          fullName: decodedToken.user_fullname
        };
      }
    }
    
    return this.user;
  }
}
