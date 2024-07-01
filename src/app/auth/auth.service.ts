import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface authResponse {
  success: boolean;
  data: {
    user: {
      username: string;
      password: string;
    }
    token: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:5255/password-manager/api/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<authResponse> {
    const body = { email, password };
    return this.http.post<authResponse>(`${this.apiUrl}/login`, body).pipe(
      tap((response) => {
        localStorage.setItem('token', response.data.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  register(username: string, email: string, password: string): Observable<authResponse> {
    const body = { username, email, password };
    return this.http.post<authResponse>(`${this.apiUrl}/register`, body).pipe(
      tap((response) => {
        localStorage.setItem('token', response.data.token)
      })
    )
  }
}
