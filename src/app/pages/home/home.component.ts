import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container animate-fade-in">
      
      <!-- Hero Section -->
      <section class="hero-section bg-gradient-to-br from-lavender-100 to-lavender-200 dark:from-dark-primary dark:to-dark-secondary rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="relative z-10">
          <div class="text-center max-w-4xl mx-auto">
            <div class="w-20 h-20 bg-gradient-to-br from-lavender-500 to-lavender-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
              <i class="fas fa-brain text-white text-3xl"></i>
            </div>
            
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-lavender-800">
                LLM Agent Hub
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Master the world of <strong>Large Language Model Agents</strong> through an interactive journey exploring the 
              <em>Reflexion framework</em> and beyond.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                routerLink="/introduction"
                class="btn-primary text-lg px-8 py-4 animate-pulse-hover">
                <i class="fas fa-rocket mr-3"></i>
                Start Learning Journey
              </button>
              
              <button 
                routerLink="/interactive-quiz"
                class="btn-secondary text-lg px-8 py-4">
                <i class="fas fa-question-circle mr-3"></i>
                Test Your Knowledge
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Original Paper Section -->
      <section class="paper-section mb-8">
        <div class="card bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
          <div class="flex flex-col lg:flex-row items-center justify-between p-6">
            <div class="flex items-center space-x-4 mb-4 lg:mb-0">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-file-pdf text-white text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Original Research Paper
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  "Reflexion and Beyond: Verbal Self-Reflection in Large Language Models"
                </p>
                <div class="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-500">
                  <span><i class="fas fa-users mr-1"></i>Bahr et al.</span>
                  <span><i class="fas fa-calendar mr-1"></i>2023</span>
                  <span><i class="fas fa-file-alt mr-1"></i>PDF</span>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3">
              <button 
                (click)="viewPaper()"
                class="btn-primary flex items-center">
                <i class="fas fa-eye mr-2"></i>
                View Paper
              </button>
              <button 
                (click)="downloadPaper()"
                class="btn-secondary flex items-center">
                <i class="fas fa-download mr-2"></i>
                Download
              </button>
            </div>
          </div>
          
          <!-- Paper Preview -->
          <div class="border-t border-blue-200 dark:border-blue-800 px-6 py-4 bg-white/50 dark:bg-gray-800/50">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-lg font-bold text-blue-600 dark:text-blue-400">35</div>
                <div class="text-xs text-gray-600 dark:text-gray-400">References</div>
              </div>
              <div>
                <div class="text-lg font-bold text-green-600 dark:text-green-400">3</div>
                <div class="text-xs text-gray-600 dark:text-gray-400">Key Frameworks</div>
              </div>
              <div>
                <div class="text-lg font-bold text-purple-600 dark:text-purple-400">4</div>
                <div class="text-xs text-gray-600 dark:text-gray-400">Core Concepts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Stats -->
      <section class="stats-section mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="card text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-book-open text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ getTotalSections() }}</h3>
            <p class="text-gray-600 dark:text-gray-400">Learning Sections</p>
          </div>
          
          <div class="card text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ getCompletedSections() }}</h3>
            <p class="text-gray-600 dark:text-gray-400">Completed</p>
          </div>
          
          <div class="card text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-chart-line text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ getProgressPercentage() }}%</h3>
            <p class="text-gray-600 dark:text-gray-400">Progress</p>
          </div>
          
          <div class="card text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-cards-blank text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
            <p class="text-gray-600 dark:text-gray-400">Flashcards</p>
          </div>
        </div>
      </section>

      <!-- Learning Path Overview -->
      <section class="learning-path-section mb-8">
        <div class="card">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <i class="fas fa-map-marked-alt mr-3 text-lavender-600"></i>
            Your Learning Journey
          </h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Learning Path Steps -->
            <div class="space-y-4">
              <div *ngFor="let item of getMainSections(); let i = index"
                   class="learning-step flex items-start space-x-4 p-4 rounded-lg hover:bg-lavender-50 dark:hover:bg-dark-secondary transition-colors duration-200"
                   [class.completed]="item.completed">
                
                <div class="step-number w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                     [class.bg-green-500]="item.completed"
                     [class.text-white]="item.completed"
                     [class.bg-lavender-200]="!item.completed"
                     [class.text-lavender-800]="!item.completed">
                  <i *ngIf="item.completed" class="fas fa-check"></i>
                  <span *ngIf="!item.completed">{{ i + 1 }}</span>
                </div>
                
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {{ item.description }}
                  </p>
                  <button 
                    [routerLink]="item.route"
                    class="text-lavender-600 dark:text-lavender-400 hover:underline text-sm font-medium">
                    {{ item.completed ? 'Review' : 'Start' }} →
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Interactive Elements -->
            <div class="space-y-6">
              <div class="bg-gradient-to-br from-lavender-50 to-lavender-100 dark:from-dark-secondary dark:to-dark-tertiary rounded-lg p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  <i class="fas fa-gamepad mr-2 text-lavender-600"></i>
                  Interactive Features
                </h3>
                
                <div class="space-y-4">
                  <div class="feature-item flex items-center space-x-3">
                    <i class="fas fa-question-circle text-blue-500"></i>
                    <span class="text-gray-700 dark:text-gray-300">Interactive Quizzes</span>
                  </div>
                  <div class="feature-item flex items-center space-x-3">
                    <i class="fas fa-cards-blank text-green-500"></i>
                    <span class="text-gray-700 dark:text-gray-300">Flashcard System</span>
                  </div>
                  <div class="feature-item flex items-center space-x-3">
                    <i class="fas fa-arrows-alt text-purple-500"></i>
                    <span class="text-gray-700 dark:text-gray-300">Drag & Drop Exercises</span>
                  </div>
                  <div class="feature-item flex items-center space-x-3">
                    <i class="fas fa-chart-pie text-orange-500"></i>
                    <span class="text-gray-700 dark:text-gray-300">Progress Tracking</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-dark-secondary dark:to-dark-tertiary rounded-lg p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  <i class="fas fa-lightbulb mr-2 text-yellow-500"></i>
                  Did You Know?
                </h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  The Reflexion framework demonstrates how <strong>verbal self-reflection</strong> enables LLMs to 
                  iteratively improve their performance through self-evaluation and learning from mistakes, 
                  creating more robust and adaptable AI agents!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Actions -->
      <section class="quick-actions-section">
        <div class="bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-2xl p-8 text-center text-white">
          <h2 class="text-2xl font-bold mb-4">Ready to Dive Deeper?</h2>
          <p class="text-lavender-100 mb-6">
            Explore advanced concepts, take assessments, or review your progress
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              routerLink="/reflexion-framework"
              class="bg-white text-lavender-600 hover:bg-lavender-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              <i class="fas fa-cogs mr-2"></i>
              Explore Reflexion
            </button>
            
            <button 
              routerLink="/comparative-analysis"
              class="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              <i class="fas fa-balance-scale mr-2"></i>
              Compare Frameworks
            </button>
            
            <button 
              routerLink="/progress"
              class="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              <i class="fas fa-chart-pie mr-2"></i>
              View Progress
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private animationInterval?: number;

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    // Set current section
    this.navigationService.setCurrentSection('home');
    
    // Add some entrance animations
    this.startFloatingAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  getTotalSections(): number {
    return this.navigationService.navigationItems.filter(item => 
      !['home', 'progress', 'interactive-quiz', 'flashcards'].includes(item.id)
    ).length;
  }

  getCompletedSections(): number {
    return this.navigationService.getCompletedSections().filter(item => 
      !['home', 'progress', 'interactive-quiz', 'flashcards'].includes(item.id)
    ).length;
  }

  getProgressPercentage(): number {
    return this.navigationService.getProgressPercentage();
  }

  getMainSections() {
    return this.navigationService.navigationItems.filter(item => 
      !['home', 'progress', 'interactive-quiz', 'flashcards'].includes(item.id)
    ).slice(0, 6); // Show first 6 main sections
  }

  viewPaper(): void {
    // Open PDF in new tab for viewing
    const pdfPath = 'assets/documents/Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    window.open(pdfPath, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  }

  downloadPaper(): void {
    // Trigger download of the PDF
    const pdfPath = 'assets/documents/Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private startFloatingAnimation(): void {
    // Add subtle floating animation to hero elements
    const heroElements = document.querySelectorAll('.animate-bounce-in');
    
    this.animationInterval = window.setInterval(() => {
      heroElements.forEach((el, index) => {
        if (el instanceof HTMLElement) {
          el.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index) * 3}px)`;
        }
      });
    }, 16);
  }
} 