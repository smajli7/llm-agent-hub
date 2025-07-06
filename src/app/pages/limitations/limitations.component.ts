import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-limitations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="limitations-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-shield-alt mr-3 text-lavender-600"></i>
              Limitations & Ethics
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Real-world implications and ethical considerations
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <i class="fas fa-exclamation-triangle text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 1: Technical Limitations -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-exclamation-triangle text-red-600 dark:text-red-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Technical Limitations
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Current constraints and challenges in verbal self-reflection approaches
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Computational Constraints -->
            <div class="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border-l-4 border-red-500">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i class="fas fa-microchip mr-2 text-red-600"></i>
                Computational Constraints
              </h3>
              <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-red-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Context Window Limits:</strong> Long reflection chains exceed model memory capacity</span>
                </li>
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-red-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Inference Costs:</strong> Multiple reflection cycles increase computational overhead</span>
                </li>
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-red-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Latency Issues:</strong> Real-time applications suffer from iterative processing delays</span>
                </li>
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-red-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Scalability Challenges:</strong> Resource requirements scale poorly with problem complexity</span>
                </li>
              </ul>
            </div>

            <!-- Quality & Reliability -->
            <div class="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i class="fas fa-question-circle mr-2 text-orange-600"></i>
                Quality & Reliability Issues
              </h3>
              <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-orange-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Self-Critique Limitations:</strong> Models struggle with accurate self-evaluation</span>
                </li>
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-orange-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Hallucination Persistence:</strong> Incorrect reflections can reinforce false beliefs</span>
                </li>
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-orange-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Inconsistent Performance:</strong> Results vary significantly across different domains</span>
                </li>
                <li class="flex items-start space-x-2">
                  <i class="fas fa-dot-circle text-orange-500 mt-1 flex-shrink-0"></i>
                  <span><strong>Feedback Quality Dependency:</strong> Poor initial feedback leads to degraded outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Ethical Considerations -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-balance-scale text-purple-600 dark:text-purple-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Ethical Considerations & Safety
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Moral implications and safety concerns in self-reflective AI systems
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Ethical Concerns -->
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <i class="fas fa-user-shield mr-2 text-purple-600"></i>
                  Transparency & Accountability
                </h3>
                <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-purple-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Decision Attribution:</strong> Who is responsible when self-reflective systems make harmful decisions?</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-purple-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Reasoning Opacity:</strong> Complex reflection chains may obscure true decision-making processes</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-purple-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Audit Trail Quality:</strong> Ensuring reflection processes are genuinely interpretable</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <i class="fas fa-exclamation-triangle mr-2 text-red-600"></i>
                  Safety & Alignment Risks
                </h3>
                <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-red-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Recursive Improvement:</strong> Self-reflection could lead to uncontrolled capability enhancement</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-red-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Goal Misalignment:</strong> Reflective processes may optimize for unintended objectives</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-red-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Deception Capabilities:</strong> Advanced reflection might enable sophisticated manipulation</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Mitigation Strategies -->
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <i class="fas fa-shield-alt mr-2 text-green-600"></i>
                  Mitigation Strategies
                </h3>
                <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Human Oversight:</strong> Mandatory human review of critical reflection outcomes</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Bounded Reflection:</strong> Limiting the scope and depth of self-reflection processes</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Diverse Evaluation:</strong> Multiple independent assessments of reflection quality</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Gradual Deployment:</strong> Phased rollout with continuous monitoring</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <i class="fas fa-users mr-2 text-blue-600"></i>
                  Societal Impact
                </h3>
                <ul class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-blue-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Labor Displacement:</strong> Advanced reasoning capabilities may affect knowledge work</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-blue-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Epistemic Dependence:</strong> Over-reliance on AI reasoning may reduce human critical thinking</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <i class="fas fa-chevron-right text-blue-500 mt-1 flex-shrink-0"></i>
                    <span><strong>Access Inequality:</strong> Advanced reflection capabilities may exacerbate existing disparities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/comparative-analysis"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Previous: Comparative Analysis
          </button>
          
          <button 
            routerLink="/future-directions"
            class="btn-primary"
            (click)="markCompleted()">
            Next: Future Directions
            <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./limitations.component.scss']
})
export class LimitationsComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('limitations');
  }

  markCompleted(): void {
    this.navigationService.markSectionCompleted('limitations');
  }
} 