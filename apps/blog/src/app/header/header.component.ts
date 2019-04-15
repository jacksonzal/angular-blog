import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logged = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.logged = isAuthenticated;
    });
  }

  logout() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
