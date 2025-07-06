import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="introduction-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-book-open mr-3 text-lavender-600"></i>
              Introduction & Context
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Understanding the challenges and opportunities in LLM agent learning
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <i class="fas fa-lightbulb text-white text-2xl"></i>
            </div>
          </div>
        </div>
        
        <!-- Progress indicator -->
        <div class="progress-bar mb-6">
          <div class="progress-fill" [style.width.%]="readingProgress"></div>
        </div>
      </section>

      <!-- Section 1: RL Challenges -->
      <section id="rl-challenges" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-exclamation-triangle text-red-600 dark:text-red-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                The Challenge of Efficient Learning in LLM Agents
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Traditional reinforcement learning approaches face significant obstacles in the LLM context
              </p>
            </div>
          </div>

          <!-- RL Definition -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <i class="fas fa-graduation-cap mr-2 text-blue-600"></i>
              Reinforcement Learning Fundamentals
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-cube text-blue-500 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">State Space:</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      All possible situations the agent can encounter
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fas fa-arrows-alt text-green-500 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">Action Space:</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Set of all possible actions the agent can take
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fas fa-trophy text-yellow-500 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">Rewards:</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Feedback signals that guide learning
                    </p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-route text-purple-500 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">Policies:</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Strategies for selecting actions in given states
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fas fa-calculator text-orange-500 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">Value Functions:</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Estimates of expected future rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Limitations -->
          <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <i class="fas fa-times-circle mr-2 text-red-600"></i>
              Limitations in Traditional RL
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-white dark:bg-dark-tertiary rounded-lg">
                <i class="fas fa-server text-red-500 text-2xl mb-3"></i>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">High Computational Cost</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Requires massive computational resources for training
                </p>
              </div>
              <div class="text-center p-4 bg-white dark:bg-dark-tertiary rounded-lg">
                <i class="fas fa-database text-orange-500 text-2xl mb-3"></i>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Extensive Training Data</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Needs millions of training samples and episodes
                </p>
              </div>
              <div class="text-center p-4 bg-white dark:bg-dark-tertiary rounded-lg">
                <i class="fas fa-eye-slash text-purple-500 text-2xl mb-3"></i>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Limited Interpretability</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Black-box nature makes debugging difficult
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Verbal Self-Reflection -->
      <section id="verbal-reflection" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-comments text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Research Focus: Verbal Self-Reflection
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                A revolutionary approach where models use explicit textual feedback to refine behavior
              </p>
            </div>
          </div>

          <!-- Definition -->
          <div class="bg-lavender-50 dark:bg-dark-secondary rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <i class="fas fa-lightbulb mr-2 text-lavender-600"></i>
              What is Verbal Self-Reflection?
            </h3>
            <blockquote class="border-l-4 border-lavender-500 pl-4 italic text-gray-700 dark:text-gray-300 mb-4">
              "A paradigm where language models use explicit textual feedback to refine their behavior 
              without requiring expensive model retraining."
            </blockquote>
            <p class="text-gray-600 dark:text-gray-400">
              Instead of learning through trial and error with numerical rewards, the model articulates 
              its mistakes in natural language and uses this self-critique to improve performance on subsequent attempts.
            </p>
          </div>

          <!-- Advantages -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="advantage-card bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <i class="fas fa-tachometer-alt text-white"></i>
              </div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Efficiency in Learning
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Rapid improvement without extensive retraining cycles or massive computational resources.
              </p>
            </div>

            <div class="advantage-card bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6">
              <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <i class="fas fa-search text-white"></i>
              </div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Enhanced Interpretability
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Clear textual explanations of reasoning and error identification make the process transparent.
              </p>
            </div>

            <div class="advantage-card bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6">
              <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i class="fas fa-sync-alt text-white"></i>
              </div>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Rapid Refinement
              </h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Explicit error identification enables immediate behavioral adjustments and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Paper Contributions -->
      <section class="content-section mb-12">
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            <i class="fas fa-star mr-3 text-yellow-500"></i>
            Key Contributions & Paper Structure
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Contributions -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Research Contributions
              </h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3 p-4 bg-lavender-50 dark:bg-dark-secondary rounded-lg">
                  <i class="fas fa-puzzle-piece text-lavender-600 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">In-depth Synthesis</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Comprehensive analysis of iterative improvement frameworks in LLM agents
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <i class="fas fa-ruler text-blue-600 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">Evaluation Rubric</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Structured framework for evaluating agent architectures across key metrics
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <i class="fas fa-balance-scale text-green-600 mt-1"></i>
                  <div>
                    <strong class="text-gray-900 dark:text-white">Comparative Analysis</strong>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Detailed trade-offs and performance comparisons across different frameworks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Paper Organization -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Learning Journey Ahead
              </h3>
              <div class="space-y-3">
                <div *ngFor="let item of getUpcomingSections(); let i = index"
                     class="flex items-center space-x-3 p-3 hover:bg-lavender-50 dark:hover:bg-dark-secondary rounded-lg transition-colors duration-200 cursor-pointer"
                     [routerLink]="item.route">
                  <div class="w-8 h-8 bg-lavender-200 dark:bg-lavender-800 rounded-full flex items-center justify-center text-sm font-bold text-lavender-800 dark:text-lavender-200">
                    {{ i + 2 }}
                  </div>
                  <div class="flex-1">
                    <div class="font-medium text-gray-900 dark:text-white">{{ item.title }}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">{{ item.description }}</div>
                  </div>
                  <i class="fas fa-arrow-right text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/home"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Home
          </button>
          
          <button 
            routerLink="/reflexion-framework"
            class="btn-primary"
            (click)="markCompleted()">
            Next: Reflexion Framework
            <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  readingProgress = 0;

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('introduction');
    this.trackScrollProgress();
  }

  getUpcomingSections() {
    return this.navigationService.navigationItems.filter(item => 
      ['reflexion-framework', 'comparative-taxonomy', 'comparative-analysis', 'limitations', 'future-directions'].includes(item.id)
    );
  }

  markCompleted(): void {
    this.navigationService.markSectionCompleted('introduction');
  }

  private trackScrollProgress(): void {
    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      this.readingProgress = Math.min(100, Math.max(0, scrolled));
    });
  }
} 