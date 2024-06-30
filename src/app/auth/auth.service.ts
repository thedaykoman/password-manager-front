import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface AuthResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    const body = { email, password };
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, body).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
