import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface AuthResponse { token: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/auth`;

  login(credentials: { username: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => localStorage.setItem('token', response.token))
    );
  }

  getToken(): string | null { return localStorage.getItem('token'); }
  isLoggedIn(): boolean { return !!this.getToken(); }
  logout() { localStorage.removeItem('token'); }
}