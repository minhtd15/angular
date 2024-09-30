import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  fullName: string | null = '';
  showCategoryBar: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }  // Inject AuthService

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.fullName = user.fullName;
    }

    // Listen for route changes and toggle category bar based on route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCategoryBar = this.router.url === '/home';  // Show category bar only on /home route
      }
    });
  }


  logout() {
    this.authService.logout();  // Call the logout method from AuthService
    this.router.navigate(['/login']);
  }
}
