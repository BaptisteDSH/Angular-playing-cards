import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './services/login/login.service';
import { Component, inject, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MatIconModule, MatToolbarModule, MatButtonModule],
})
export class AppComponent implements OnDestroy {
  private router = inject(Router);
  LoginService = inject(LoginService);

  private logoutSubscription: Subscription | null = null;

  logout() {
    this.logoutSubscription = this.LoginService.logout().subscribe({
      next: (_) => {
        this.navigateToLogin();
      },
      error: (_) => {
        this.navigateToLogin();
      },
    });
  }

  private navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }
}
