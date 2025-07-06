import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-comparative-analysis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="comparative-analysis-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-balance-scale mr-3 text-lavender-600"></i>
              Comparative Analysis
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Structured evaluation across six key metrics
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <i class="fas fa-chart-bar text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 1: Evaluation Framework -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-ruler text-blue-600 dark:text-blue-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Six Key Evaluation Metrics
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Comprehensive framework for evaluating LLM agent architectures
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Metric 1: Performance -->
            <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 border-l-4 border-green-500">
              <div class="flex items-center mb-4">
                <i class="fas fa-trophy text-green-600 text-2xl mr-3"></i>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Task Performance & Efficacy</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Effectiveness at achieving intended outcomes across different domains and benchmarks.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Accuracy on standard benchmarks</li>
                <li>• Success rate in complex tasks</li>
                <li>• Quality of generated outputs</li>
              </ul>
            </div>

            <!-- Metric 2: Learning Efficiency -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border-l-4 border-blue-500">
              <div class="flex items-center mb-4">
                <i class="fas fa-tachometer-alt text-blue-600 text-2xl mr-3"></i>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Learning & Computational Efficiency</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Speed of learning and computational resources required for training and inference.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Training time and data requirements</li>
                <li>• Inference speed and latency</li>
                <li>• Memory consumption patterns</li>
              </ul>
            </div>

            <!-- Metric 3: Operational Cost -->
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border-l-4 border-purple-500">
              <div class="flex items-center mb-4">
                <i class="fas fa-dollar-sign text-purple-600 text-2xl mr-3"></i>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Operational Cost</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Financial and resource implications for real-world deployment and scaling.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Infrastructure requirements</li>
                <li>• API usage costs</li>
                <li>• Development complexity</li>
              </ul>
            </div>

            <!-- Metric 4: Interpretability -->
            <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-6 border-l-4 border-yellow-500">
              <div class="flex items-center mb-4">
                <i class="fas fa-eye text-yellow-600 text-2xl mr-3"></i>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Interpretability & Diagnosability</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Transparency of decision-making processes and ease of debugging failures.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Reasoning transparency</li>
                <li>• Error diagnosis capabilities</li>
                <li>• Human-readable explanations</li>
              </ul>
            </div>

            <!-- Metric 5: Architectural Complexity -->
            <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-6 border-l-4 border-red-500">
              <div class="flex items-center mb-4">
                <i class="fas fa-cogs text-red-600 text-2xl mr-3"></i>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Architectural Complexity</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Ease of deployment, integration complexity, and dependency management.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Implementation difficulty</li>
                <li>• External dependencies</li>
                <li>• Maintenance overhead</li>
              </ul>
            </div>

            <!-- Metric 6: Generalization -->
            <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg p-6 border-l-4 border-indigo-500">
              <div class="flex items-center mb-4">
                <i class="fas fa-expand-arrows-alt text-indigo-600 text-2xl mr-3"></i>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Generalization & Adaptability</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Flexibility and applicability across varied, unseen tasks and domains.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Cross-domain performance</li>
                <li>• Adaptation to new tasks</li>
                <li>• Robustness to distribution shift</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Comparative Results Table -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-table text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Framework Comparison Matrix
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Structured evaluation across all key metrics and frameworks
              </p>
            </div>
          </div>

          <!-- Comparison Table -->
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-gray-50 dark:bg-dark-secondary">
                  <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Framework</th>
                  <th class="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Performance</th>
                  <th class="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Efficiency</th>
                  <th class="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Cost</th>
                  <th class="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Interpretability</th>
                  <th class="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Complexity</th>
                  <th class="px-4 py-3 text-center font-semibold text-gray-900 dark:text-white">Generalization</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <!-- Reflexion -->
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-secondary/50">
                  <td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-sync-alt text-purple-600"></i>
                      <span>Reflexion</span>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                </tr>

                <!-- Self-Refine -->
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-secondary/50">
                  <td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-edit text-blue-600"></i>
                      <span>Self-Refine</span>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      Low
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      Low
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                </tr>

                <!-- ReAct -->
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-secondary/50">
                  <td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-bolt text-orange-600"></i>
                      <span>ReAct</span>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                </tr>

                <!-- Toolformer -->
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-secondary/50">
                  <td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-tools text-purple-600"></i>
                      <span>Toolformer</span>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      Low
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                </tr>

                <!-- Voyager -->
                <tr class="hover:bg-gray-50 dark:hover:bg-dark-secondary/50">
                  <td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-rocket text-indigo-600"></i>
                      <span>Voyager</span>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      Low
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      Medium
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      High
                    </span>
                  </td>
                  <td class="px-4 py-4 text-center">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      High
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Section 3: Key Insights -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-lightbulb text-yellow-600 dark:text-yellow-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Key Insights & Trade-offs
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Critical findings from the comparative analysis
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Synthesis -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <i class="fas fa-balance-scale mr-2 text-blue-600"></i>
                Synthesis of Results
              </h3>
              
              <div class="space-y-4">
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Interpretability Leaders</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Reflexion and Self-Refine</strong> excel in transparency with explicit reasoning traces and self-critique processes.
                  </p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Performance Champions</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <strong>ReAct, Toolformer, and Voyager</strong> achieve high task performance but at significant complexity and cost.
                  </p>
                </div>

                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Efficiency Winners</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Self-Refine and Reflexion</strong> offer the best balance of performance improvement with operational efficiency.
                  </p>
                </div>
              </div>
            </div>

            <!-- No Universal Solution -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <i class="fas fa-exclamation-triangle mr-2 text-orange-600"></i>
                No Universal Solution
              </h3>
              
              <div class="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>There is no universally optimal choice.</strong> The decision depends heavily on specific application requirements, resource constraints, and organizational priorities.
                </p>
                
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-dot-circle text-orange-500 mt-1"></i>
                    <div>
                      <strong class="text-gray-900 dark:text-white">Simple Applications:</strong>
                      <span class="text-sm text-gray-600 dark:text-gray-400"> Self-Refine for quick implementations</span>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-dot-circle text-orange-500 mt-1"></i>
                    <div>
                      <strong class="text-gray-900 dark:text-white">Complex Reasoning:</strong>
                      <span class="text-sm text-gray-600 dark:text-gray-400"> ReAct for multi-step workflows</span>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-dot-circle text-orange-500 mt-1"></i>
                    <div>
                      <strong class="text-gray-900 dark:text-white">Iterative Improvement:</strong>
                      <span class="text-sm text-gray-600 dark:text-gray-400"> Reflexion for balanced performance</span>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-dot-circle text-orange-500 mt-1"></i>
                    <div>
                      <strong class="text-gray-900 dark:text-white">Specialized Tools:</strong>
                      <span class="text-sm text-gray-600 dark:text-gray-400"> Toolformer for domain expertise</span>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-dot-circle text-orange-500 mt-1"></i>
                    <div>
                      <strong class="text-gray-900 dark:text-white">Open-ended Exploration:</strong>
                      <span class="text-sm text-gray-600 dark:text-gray-400"> Voyager for dynamic environments</span>
                    </div>
                  </div>
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
            routerLink="/comparative-taxonomy"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Previous: Comparative Taxonomy
          </button>
          
          <button 
            routerLink="/limitations"
            class="btn-primary"
            (click)="markCompleted()">
            Next: Limitations
            <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./comparative-analysis.component.scss']
})
export class ComparativeAnalysisComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('comparative-analysis');
  }

  markCompleted(): void {
    this.navigationService.markSectionCompleted('comparative-analysis');
  }
} 