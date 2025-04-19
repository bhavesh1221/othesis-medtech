import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  notificationCount = 3;
  userName = 'John Doe';
  
  notifications = [
    { title: 'New template added', time: '10 min ago' },
    { title: 'System update available', time: '1 hour ago' },
    { title: 'New message received', time: '2 days ago' }
  ];

  logout() {
    console.log('User logged out');
  }
}
