import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="progress-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-chart-pie mr-3 text-lavender-600"></i>
              Learning Progress
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Track your learning journey and achievements
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <i class="fas fa-trophy text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Progress Overview -->
      <section class="content-section mb-12">
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            <i class="fas fa-chart-line mr-3 text-lavender-600"></i>
            Current Progress
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-lavender-50 dark:bg-dark-secondary rounded-lg">
              <div class="text-3xl font-bold text-lavender-600 dark:text-lavender-400 mb-2">
                {{ getProgressPercentage() }}%
              </div>
              <div class="text-gray-600 dark:text-gray-400">Overall Progress</div>
            </div>
            
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {{ getCompletedSections() }}
              </div>
              <div class="text-gray-600 dark:text-gray-400">Sections Completed</div>
            </div>
            
            <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {{ getTotalSections() }}
              </div>
              <div class="text-gray-600 dark:text-gray-400">Total Sections</div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Learning Progress</span>
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ getProgressPercentage() }}%</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill"
                [style.width.%]="getProgressPercentage()">
              </div>
            </div>
          </div>

          <!-- Section Progress -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Section Progress</h3>
            <div *ngFor="let section of getSections()" 
                 class="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-secondary rounded-lg">
              <div class="flex items-center space-x-3">
                <i [class]="section.icon" 
                   [class.text-green-500]="section.completed"
                   [class.text-gray-400]="!section.completed"></i>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">{{ section.title }}</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">{{ section.description }}</div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span *ngIf="section.completed" 
                      class="text-green-600 dark:text-green-400 text-sm font-medium">
                  <i class="fas fa-check-circle mr-1"></i>
                  Completed
                </span>
                <span *ngIf="!section.completed" 
                      class="text-gray-500 dark:text-gray-400 text-sm">
                  Not Started
                </span>
                <button 
                  [routerLink]="section.route"
                  class="btn-secondary text-sm px-3 py-1">
                  {{ section.completed ? 'Review' : 'Start' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/bibliography"
            class="btn-secondary">
            <i class="fas fa-book mr-2"></i>
            View Bibliography
          </button>
          
          <button 
            routerLink="/home"
            class="btn-primary">
            Return to Home
            <i class="fas fa-home ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('progress');
  }

  getProgressPercentage(): number {
    return this.navigationService.getProgressPercentage();
  }

  getCompletedSections(): number {
    return this.navigationService.getCompletedSections().filter(item => 
      !['home', 'progress', 'interactive-quiz', 'flashcards'].includes(item.id)
    ).length;
  }

  getTotalSections(): number {
    return this.navigationService.navigationItems.filter(item => 
      !['home', 'progress', 'interactive-quiz', 'flashcards'].includes(item.id)
    ).length;
  }

  getSections() {
    return this.navigationService.navigationItems.filter(item => 
      !['home', 'progress'].includes(item.id)
    );
  }
} 