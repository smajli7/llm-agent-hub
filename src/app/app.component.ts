import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { NavigationService } from './services/navigation.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SidebarComponent,
    HeaderComponent
  ],
  template: `
    <div class="min-h-screen bg-lavender-200 dark:bg-dark-gradient transition-colors duration-300">
      <!-- Header -->
      <app-header></app-header>
      
      <!-- Sidebar -->
      <app-sidebar 
        [isOpen]="navigationService.sidebarOpen()"
        (closeClicked)="navigationService.closeSidebar()">
      </app-sidebar>
      
      <!-- Main Content -->
      <main class="transition-all duration-300 min-h-screen pt-16"
            [class.pl-80]="navigationService.sidebarOpen() && !isMobile"
            [class.pl-0]="!navigationService.sidebarOpen() || isMobile">
        <div class="container mx-auto px-4 py-8 max-w-7xl">
          <router-outlet></router-outlet>
        </div>
      </main>
      
      <!-- Mobile Overlay -->
      <div *ngIf="navigationService.sidebarOpen() && isMobile"
           class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
           (click)="navigationService.closeSidebar()">
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LLM Agent Hub';
  isMobile = false;

  constructor(
    public themeService: ThemeService,
    public navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
    
    // Initialize theme
    this.themeService.initializeTheme();
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth < 1024;
    if (!this.isMobile && this.navigationService.sidebarOpen()) {
      // Auto-open sidebar on desktop
    } else if (this.isMobile) {
      // Auto-close sidebar on mobile
      this.navigationService.closeSidebar();
    }
  }
} 