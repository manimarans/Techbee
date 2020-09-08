import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
navigation = [
  {
    displayName: 'Dashboard',
    url: 'dashboard'
  },
  {
    displayName: 'User Management',
    url: 'user-management'
  }
];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive(nav) {
    if (this.router.url.indexOf(nav.url) > -1) {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    this.router.navigateByUrl('login');
  }

}
