import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-primary/95 backdrop-blur-sm border-b border-lavender-300 dark:border-dark-secondary transition-colors duration-300">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <!-- Left side: Menu button and logo -->
        <div class="flex items-center space-x-4">
          <button 
            (click)="navigationService.toggleSidebar()"
            class="p-2 rounded-lg hover:bg-lavender-100 dark:hover:bg-dark-secondary transition-colors duration-200 lg:hidden"
            aria-label="Toggle menu">
            <i class="fas fa-bars text-xl text-gray-700 dark:text-gray-300"></i>
          </button>
          
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center">
              <i class="fas fa-brain text-white text-lg"></i>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl font-bold text-gray-900 dark:text-white">
                LLM Agent Hub
              </h1>
              <p class="text-sm text-gray-600 dark:text-gray-400 -mt-1">
                Interactive Learning Platform
              </p>
            </div>
          </div>
        </div>

        <!-- Center: Progress indicator (desktop only) -->
        <div class="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div class="progress-bar flex-1">
            <div 
              class="progress-fill"
              [style.width.%]="navigationService.getProgressPercentage()">
            </div>
          </div>
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
            {{ navigationService.getProgressPercentage() }}% Complete
          </span>
        </div>

        <!-- Right side: Theme toggle and actions -->
        <div class="flex items-center space-x-3">
          
          <!-- Current section indicator -->
          <div class="hidden lg:block text-right">
            <p class="text-sm font-medium text-gray-900 dark:text-white">
              {{ getCurrentSectionTitle() }}
            </p>
            <p class="text-xs text-gray-600 dark:text-gray-400 -mt-1">
              Current Section
            </p>
          </div>

          <!-- Theme toggle -->
          <button 
            (click)="themeService.toggleTheme()"
            class="p-2 rounded-lg hover:bg-lavender-100 dark:hover:bg-dark-secondary transition-all duration-200 hover:animate-pulse-hover"
            [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
            <i [class]="themeService.isDarkMode() ? 'fas fa-sun text-yellow-500' : 'fas fa-moon text-gray-600'"
               class="text-xl transition-colors duration-200"></i>
          </button>

          <!-- Quick actions menu -->
          <div class="relative">
            <button 
              (click)="showQuickActions = !showQuickActions"
              class="p-2 rounded-lg hover:bg-lavender-100 dark:hover:bg-dark-secondary transition-colors duration-200"
              aria-label="Quick actions">
              <i class="fas fa-ellipsis-v text-gray-600 dark:text-gray-400"></i>
            </button>

            <!-- Quick actions dropdown -->
            <div *ngIf="showQuickActions"
                 class="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark-tertiary rounded-lg shadow-xl border border-gray-200 dark:border-dark-secondary py-2 animate-fade-in">
              
              <button 
                routerLink="/interactive-quiz"
                (click)="showQuickActions = false"
                class="w-full px-4 py-2 text-left hover:bg-lavender-50 dark:hover:bg-dark-secondary transition-colors duration-200 flex items-center space-x-3">
                <i class="fas fa-question-circle text-lavender-600"></i>
                <span class="text-gray-700 dark:text-gray-300">Take Quiz</span>
              </button>
              
              <button 
                routerLink="/flashcards"
                (click)="showQuickActions = false"
                class="w-full px-4 py-2 text-left hover:bg-lavender-50 dark:hover:bg-dark-secondary transition-colors duration-200 flex items-center space-x-3">
                <i class="fas fa-cards-blank text-lavender-600"></i>
                <span class="text-gray-700 dark:text-gray-300">Study Cards</span>
              </button>
              
              <button 
                routerLink="/progress"
                (click)="showQuickActions = false"
                class="w-full px-4 py-2 text-left hover:bg-lavender-50 dark:hover:bg-dark-secondary transition-colors duration-200 flex items-center space-x-3">
                <i class="fas fa-chart-pie text-lavender-600"></i>
                <span class="text-gray-700 dark:text-gray-300">Progress</span>
              </button>
              
              <hr class="my-2 border-gray-200 dark:border-dark-secondary">
              
              <button 
                (click)="viewOriginalPaper(); showQuickActions = false"
                class="w-full px-4 py-2 text-left hover:bg-lavender-50 dark:hover:bg-dark-secondary transition-colors duration-200 flex items-center space-x-3">
                <i class="fas fa-file-pdf text-blue-600"></i>
                <span class="text-gray-700 dark:text-gray-300">View Paper</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile progress bar -->
      <div class="md:hidden px-4 pb-2">
        <div class="flex items-center space-x-3">
          <div class="progress-bar flex-1">
            <div 
              class="progress-fill"
              [style.width.%]="navigationService.getProgressPercentage()">
            </div>
          </div>
          <span class="text-xs font-medium text-gray-600 dark:text-gray-400">
            {{ navigationService.getProgressPercentage() }}%
          </span>
        </div>
      </div>
    </header>

    <!-- Click outside to close quick actions -->
    <div *ngIf="showQuickActions"
         class="fixed inset-0 z-40"
         (click)="showQuickActions = false">
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showQuickActions = false;

  constructor(
    public themeService: ThemeService,
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    // Close quick actions when clicking outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        this.showQuickActions = false;
      }
    });
  }

  getCurrentSectionTitle(): string {
    const currentSection = this.navigationService.getSectionById(
      this.navigationService.currentSection()
    );
    return currentSection?.title || 'LLM Agent Hub';
  }

  viewOriginalPaper(): void {
    // Open PDF in new tab for viewing
    const pdfPath = 'assets/documents/Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    window.open(pdfPath, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  }
} 