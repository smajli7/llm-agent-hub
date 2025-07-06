import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { NavigationService, NavigationItem } from '../../services/navigation.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside 
      class="sidebar"
      [class.sidebar-closed]="!isOpen"
      [class.translate-x-0]="isOpen">
      
      <!-- Sidebar Header -->
      <div class="p-6 border-b border-lavender-300 dark:border-dark-secondary">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-br from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center">
              <i class="fas fa-brain text-white text-sm"></i>
            </div>
            <div>
              <h2 class="font-bold text-gray-900 dark:text-white">LLM Agent Hub</h2>
              <p class="text-xs text-gray-600 dark:text-gray-400">Navigation</p>
            </div>
          </div>
          <button 
            (click)="closeClicked.emit()"
            class="p-1 rounded hover:bg-lavender-100 dark:hover:bg-dark-secondary transition-colors duration-200 lg:hidden"
            aria-label="Close sidebar">
            <i class="fas fa-times text-gray-600 dark:text-gray-400"></i>
          </button>
        </div>
        
        <!-- Overall Progress -->
        <div class="mt-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
            <span class="text-sm text-gray-600 dark:text-gray-400">{{ navigationService.getProgressPercentage() }}%</span>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-fill"
              [style.width.%]="navigationService.getProgressPercentage()">
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Items -->
      <nav class="flex-1 overflow-y-auto py-4">
        <ul class="space-y-1 px-3">
          <li *ngFor="let item of navigationService.navigationItems; trackBy: trackByItemId">
            
            <!-- Main navigation item -->
            <div class="navigation-item"
                 [class.active]="isActive(item.route)"
                 [class.completed]="item.completed">
              
              <a [routerLink]="item.route"
                 class="nav-link group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:animate-lift"
                 [class.active-link]="isActive(item.route)"
                 (click)="onNavItemClick(item)">
                
                <div class="flex items-center space-x-3 flex-1">
                  <i [class]="item.icon" 
                     class="text-base transition-colors duration-200"
                     [class.text-lavender-600]="isActive(item.route)"
                     [class.text-gray-600]="!isActive(item.route) && !item.completed"
                     [class.text-green-600]="item.completed && !isActive(item.route)"
                     [class.dark:text-lavender-400]="isActive(item.route)"
                     [class.dark:text-gray-400]="!isActive(item.route) && !item.completed"
                     [class.dark:text-green-400]="item.completed && !isActive(item.route)"></i>
                  
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span [class.text-lavender-600]="isActive(item.route)"
                            [class.text-gray-900]="!isActive(item.route)"
                            [class.dark:text-lavender-400]="isActive(item.route)"
                            [class.dark:text-white]="!isActive(item.route)">
                        {{ item.title }}
                      </span>
                      
                      <!-- Completion indicator -->
                      <div class="flex items-center space-x-1">
                        <i *ngIf="item.completed" 
                           class="fas fa-check-circle text-green-500 text-xs"></i>
                        <i *ngIf="item.subsections && item.subsections.length > 0"
                           class="fas fa-chevron-down text-xs text-gray-400 transition-transform duration-200"
                           [class.rotate-180]="expandedSections.has(item.id)"></i>
                      </div>
                    </div>
                    
                    <p *ngIf="item.description" 
                       class="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </a>

              <!-- Subsections (collapsible) -->
              <div *ngIf="item.subsections && item.subsections.length > 0 && expandedSections.has(item.id)"
                   class="mt-2 ml-6 space-y-1 animate-fade-in">
                <a *ngFor="let subsection of item.subsections"
                   [routerLink]="subsection.route"
                   class="sub-nav-link flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-lavender-50 dark:hover:bg-dark-secondary group"
                   [class.active-sub-link]="isActive(subsection.route)">
                  
                  <i [class]="subsection.icon" 
                     class="text-sm mr-3 transition-colors duration-200"
                     [class.text-lavender-500]="isActive(subsection.route)"
                     [class.text-gray-500]="!isActive(subsection.route)"></i>
                  
                  <span [class.text-lavender-600]="isActive(subsection.route)"
                        [class.text-gray-700]="!isActive(subsection.route)"
                        [class.dark:text-lavender-400]="isActive(subsection.route)"
                        [class.dark:text-gray-300]="!isActive(subsection.route)">
                    {{ subsection.title }}
                  </span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Sidebar Footer -->
      <div class="border-t border-lavender-300 dark:border-dark-secondary p-4">
        <div class="space-y-2">
          
          <!-- Quick stats -->
          <div class="bg-lavender-50 dark:bg-dark-secondary rounded-lg p-3">
            <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">Learning Stats</div>
            <div class="grid grid-cols-2 gap-2 text-center">
              <div>
                <div class="text-lg font-bold text-lavender-600 dark:text-lavender-400">
                  {{ navigationService.getCompletedSections().length }}
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div>
                <div class="text-lg font-bold text-lavender-600 dark:text-lavender-400">
                  {{ getTotalSections() }}
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">Total</div>
              </div>
            </div>
          </div>

          <!-- Quick actions -->
          <div class="grid grid-cols-2 gap-2">
            <button 
              routerLink="/interactive-quiz"
              class="btn-secondary text-xs py-2 px-3 text-center">
              <i class="fas fa-question-circle mb-1"></i>
              <div>Quiz</div>
            </button>
            <button 
              routerLink="/flashcards"
              class="btn-secondary text-xs py-2 px-3 text-center">
              <i class="fas fa-cards-blank mb-1"></i>
              <div>Cards</div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeClicked = new EventEmitter<void>();

  expandedSections = new Set<string>();
  currentRoute = '';

  constructor(
    public navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Track current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.urlAfterRedirects;
          this.updateCurrentSection();
          this.autoExpandCurrentSection();
        }
      });

    // Initialize current route
    this.currentRoute = this.router.url;
    this.updateCurrentSection();
    this.autoExpandCurrentSection();
  }

  trackByItemId(index: number, item: NavigationItem): string {
    return item.id;
  }

  isActive(route: string): boolean {
    if (route === '/home') {
      return this.currentRoute === '/' || this.currentRoute === '/home';
    }
    return this.currentRoute.startsWith(route);
  }

  onNavItemClick(item: NavigationItem): void {
    // Toggle subsections
    if (item.subsections && item.subsections.length > 0) {
      if (this.expandedSections.has(item.id)) {
        this.expandedSections.delete(item.id);
      } else {
        this.expandedSections.add(item.id);
      }
    }

    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        this.closeClicked.emit();
      }, 200);
    }
  }

  getTotalSections(): number {
    return this.navigationService.navigationItems.filter(item => 
      !['home', 'progress'].includes(item.id)
    ).length;
  }

  private updateCurrentSection(): void {
    const currentItem = this.navigationService.navigationItems.find(item => 
      this.isActive(item.route)
    );
    
    if (currentItem) {
      this.navigationService.setCurrentSection(currentItem.id);
    }
  }

  private autoExpandCurrentSection(): void {
    // Auto-expand section containing current route
    this.navigationService.navigationItems.forEach(item => {
      if (item.subsections) {
        const hasActiveSubsection = item.subsections.some(sub => 
          this.isActive(sub.route)
        );
        
        if (hasActiveSubsection || this.isActive(item.route)) {
          this.expandedSections.add(item.id);
        }
      }
    });
  }
} 