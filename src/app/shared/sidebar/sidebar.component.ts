import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isExpanded = true; // Start in expanded state

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
