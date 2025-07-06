import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-reflexion-framework',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="reflexion-framework-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-cogs mr-3 text-lavender-600"></i>
              Reflexion Framework
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Core Actor-Evaluator-Self-Reflection Architecture
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <i class="fas fa-sync-alt text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 1: Architecture Overview -->
      <section id="architecture" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-sitemap text-purple-600 dark:text-purple-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Actor-Evaluator-Self-Reflection Architecture
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                The core three-component system that enables verbal self-reflection in LLM agents
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Actor Module -->
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-robot text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Actor Module</h3>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Generates initial responses/actions</li>
                <li>• Uses pretrained language models</li>
                <li>• Produces trajectory sequences</li>
                <li>• Operates without external retraining</li>
              </ul>
            </div>

            <!-- Evaluator Module -->
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-search text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Evaluator Module</h3>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Identifies errors or successes</li>
                <li>• Compares outputs against benchmarks</li>
                <li>• Provides detailed feedback analysis</li>
                <li>• Transforms sparse rewards to rich critiques</li>
              </ul>
            </div>

            <!-- Self-Reflection Module -->
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-500">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-comments text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Self-Reflection Module</h3>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Converts feedback to textual reflections</li>
                <li>• Articulates explicit critiques</li>
                <li>• Informs subsequent behavior</li>
                <li>• Enables transparent decision-making</li>
              </ul>
            </div>
          </div>

          <div class="bg-lavender-50 dark:bg-dark-secondary rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <i class="fas fa-lightbulb mr-2 text-lavender-600"></i>
              Key Innovation
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Unlike traditional RL approaches that rely on numerical rewards, Reflexion transforms sparse feedback into 
              detailed textual critiques. This enables <strong>rapid refinement without expensive retraining</strong>, 
              while maintaining full transparency through natural language explanations.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 2: Iterative Cycle -->
      <section id="iterative-cycle" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-sync-alt text-orange-600 dark:text-orange-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Algorithmic Cycle: Iterative Refinement
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                The continuous improvement loop that drives learning through verbal self-reflection
              </p>
            </div>
          </div>

          <!-- Process Flow -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-lg">1</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Trajectory Generation</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Actor generates sequence of actions</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Evaluation</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Compare outputs against benchmarks</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-lg">3</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Reflection</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Convert feedback to textual critique</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-lg">4</span>
              </div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Refinement</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Apply insights to next iteration</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Relation to Dynamic Programming
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              The Reflexion cycle mirrors <strong>policy/value iteration</strong> in reinforcement learning, but operates 
              in the linguistic domain rather than numerical space.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Traditional RL:</h4>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Numerical reward signals</li>
                  <li>• Weight updates through backpropagation</li>
                  <li>• Black-box optimization</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Reflexion:</h4>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Textual critique signals</li>
                  <li>• Prompt-based behavioral adjustment</li>
                  <li>• Transparent reasoning process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Performance Results -->
      <section id="performance" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-chart-line text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Empirical Performance Results
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Significant improvements across multiple challenging benchmarks
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- ALFWorld Results -->
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <div class="flex items-center mb-4">
                <i class="fas fa-home text-2xl mr-3"></i>
                <h3 class="text-xl font-bold">ALFWorld</h3>
              </div>
              <div class="mb-4">
                <div class="text-sm opacity-90 mb-1">Sequential Decision-Making</div>
                <div class="flex items-end space-x-2">
                  <span class="text-xl font-bold">Significant</span>
                  <span class="text-lg opacity-75">improvement</span>
                </div>
              </div>
              <div class="text-sm opacity-90">
                Remarkable enhancement in multi-step reasoning and planning tasks
              </div>
            </div>

            <!-- HotpotQA Results -->
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
              <div class="flex items-center mb-4">
                <i class="fas fa-question-circle text-2xl mr-3"></i>
                <h3 class="text-xl font-bold">HotpotQA</h3>
              </div>
              <div class="mb-4">
                <div class="text-sm opacity-90 mb-1">Multi-hop Reasoning</div>
                <div class="flex items-end space-x-2">
                  <span class="text-3xl font-bold">53%</span>
                  <span class="text-lg opacity-75">from 33%</span>
                </div>
              </div>
              <div class="text-sm opacity-90">
                Significant boost in complex reasoning across multiple information sources
              </div>
            </div>

            <!-- HumanEval Results -->
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
              <div class="flex items-center mb-4">
                <i class="fas fa-code text-2xl mr-3"></i>
                <h3 class="text-xl font-bold">HumanEval</h3>
              </div>
              <div class="mb-4">
                <div class="text-sm opacity-90 mb-1">Code Generation</div>
                <div class="flex items-end space-x-2">
                  <span class="text-xl font-bold">Notable</span>
                  <span class="text-lg opacity-75">gains</span>
                </div>
              </div>
              <div class="text-sm opacity-90">
                Enhanced accuracy in programming task completion and debugging
              </div>
            </div>
          </div>

          <div class="mt-8 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              <i class="fas fa-star mr-2 text-yellow-500"></i>
              Key Takeaway
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Reflexion demonstrates <strong>robust generalization across multiple challenging contexts</strong>, 
              from sequential decision-making to complex reasoning and code generation. The framework achieves 
              these improvements while maintaining interpretability and requiring no model retraining.
            </p>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/introduction"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Previous: Introduction
          </button>
          
          <button 
            routerLink="/comparative-taxonomy"
            class="btn-primary"
            (click)="markCompleted()">
            Next: Comparative Taxonomy
            <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./reflexion-framework.component.scss']
})
export class ReflexionFrameworkComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('reflexion-framework');
  }

  markCompleted(): void {
    this.navigationService.markSectionCompleted('reflexion-framework');
  }
} 