import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../models/user.model';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:8000';

  user = signal<User | null>(null);

  constructor() {}

  login(credentials: Credentials): Observable<User | null | undefined> {
    return this.http.post(this.BASE_URL + '/sessions/login/', credentials).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result['token']);
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);
      }),
      map((result: any) => {
        return this.user();
      })
    );
  }

  getUsers(): Observable<User | null> {
    return this.http.get<User>(`${this.BASE_URL}/sessions/me/`).pipe(
      tap((result) => {
        const user = Object.assign(new User(), result);
        this.user.set(user);
      }),
      map(() => this.user()), // Accès correct à la valeur du signal
      catchError((error) => {
        console.error('Get user error:', error);
        return of(null);
      })
    );
  }

  logout(): Observable<null> {
    return this.http.get(`${this.BASE_URL}/sessions/logout/`).pipe(
      tap(() => {
        localStorage.removeItem('token');
        this.user.set(null);
      }),
      map(() => null),
      catchError((error) => {
        console.error('Logout error:', error);
        return of(null);
      })
    );
  }
}
