import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-comparative-taxonomy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="comparative-taxonomy-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-layer-group mr-3 text-lavender-600"></i>
              Comparative Taxonomy
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Alternative iterative improvement frameworks
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <i class="fas fa-sitemap text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 1: Self-Refine -->
      <section id="self-refine" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-edit text-blue-600 dark:text-blue-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Self-Refine
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Single-turn, internal feedback-driven refinement approach
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Description -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <i class="fas fa-lightbulb mr-2 text-blue-600"></i>
                How It Works
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Self-Refine operates through <strong>single-turn, internal feedback</strong> where the model generates 
                an initial response, critiques it internally, and then produces a refined version. This approach is 
                simpler than multi-step frameworks as it doesn't require external interaction or complex orchestration.
              </p>
              
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Process Flow:</h4>
                <ol class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><strong>1. Generate:</strong> Create initial response</li>
                  <li><strong>2. Critique:</strong> Self-evaluate the response</li>
                  <li><strong>3. Refine:</strong> Improve based on self-critique</li>
                  <li><strong>4. Output:</strong> Present refined result</li>
                </ol>
              </div>
            </div>

            <!-- Strengths & Weaknesses -->
            <div>
              <div class="grid grid-cols-1 gap-6">
                <!-- Strengths -->
                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-check text-green-600 mr-2"></i>
                    Strengths
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>High simplicity:</strong> Easy to implement</li>
                    <li>• <strong>Interpretability:</strong> Clear reasoning process</li>
                    <li>• <strong>No external dependencies:</strong> Self-contained</li>
                    <li>• <strong>Fast execution:</strong> Single refinement cycle</li>
                  </ul>
                </div>

                <!-- Weaknesses -->
                <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-times text-red-600 mr-2"></i>
                    Limitations
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>No long-term memory:</strong> Cannot learn across episodes</li>
                    <li>• <strong>Limited iterative improvement:</strong> Single refinement step</li>
                    <li>• <strong>No multi-step decision capability:</strong> Sequential tasks struggle</li>
                    <li>• <strong>Internal critique quality:</strong> Depends on model's self-awareness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: ReAct -->
      <section id="react" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-bolt text-orange-600 dark:text-orange-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ReAct (Reasoning + Acting)
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Interleaves explicit reasoning with actionable steps and API calls
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Description -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <i class="fas fa-brain mr-2 text-orange-600"></i>
                Core Concept
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                ReAct combines <strong>reasoning traces</strong> (thinking steps) with <strong>action execution</strong> 
                (API calls, tool usage). The model alternates between explicit reasoning about what to do next and 
                taking concrete actions in the environment.
              </p>

              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mb-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Example Pattern:</h4>
                <div class="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                  <div><strong>Thought:</strong> I need to find information about X</div>
                  <div><strong>Action:</strong> search("X")</div>
                  <div><strong>Observation:</strong> [Search results]</div>
                  <div><strong>Thought:</strong> Now I need to analyze Y</div>
                  <div><strong>Action:</strong> analyze("Y")</div>
                </div>
              </div>
            </div>

            <!-- Evaluation -->
            <div>
              <div class="grid grid-cols-1 gap-6">
                <!-- Strengths -->
                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-star text-green-600 mr-2"></i>
                    Key Advantages
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>Excels in complex reasoning:</strong> Multi-step problem solving</li>
                    <li>• <strong>High interpretability:</strong> Explicit thought traces</li>
                    <li>• <strong>Tool integration:</strong> Natural API interaction</li>
                    <li>• <strong>Sequential decision-making:</strong> Handles complex workflows</li>
                  </ul>
                </div>

                <!-- Challenges -->
                <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>
                    Challenges
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>No episodic memory:</strong> Cannot learn from past episodes</li>
                    <li>• <strong>Context window limits:</strong> Long reasoning chains get truncated</li>
                    <li>• <strong>No persistent improvement:</strong> Each session starts fresh</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Toolformer -->
      <section id="toolformer" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-tools text-purple-600 dark:text-purple-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Toolformer
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Self-supervised fine-tuning for autonomous tool invocation
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Approach -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <i class="fas fa-cog mr-2 text-purple-600"></i>
                Training Approach
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Toolformer uses <strong>self-supervised fine-tuning</strong> to teach language models when and how to 
                invoke external tools. The model learns to autonomously decide whether tool use would improve its response 
                and generates appropriate API calls.
              </p>

              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Tool Categories:</h4>
                <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <strong>Calculator:</strong> Mathematical computations</li>
                  <li>• <strong>Search APIs:</strong> Information retrieval</li>
                  <li>• <strong>Calendar:</strong> Date and time operations</li>
                  <li>• <strong>Translator:</strong> Language translation</li>
                  <li>• <strong>QA Systems:</strong> Question answering</li>
                </ul>
              </div>
            </div>

            <!-- Performance Impact -->
            <div>
              <div class="grid grid-cols-1 gap-6">
                <!-- Performance Gains -->
                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-chart-line text-green-600 mr-2"></i>
                    Performance Impact
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>Significant factual accuracy improvements</strong></li>
                    <li>• <strong>Enhanced computational capabilities</strong></li>
                    <li>• <strong>Reduced hallucination in numerical tasks</strong></li>
                    <li>• <strong>Better temporal reasoning</strong></li>
                  </ul>
                </div>

                <!-- Limitations -->
                <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-warning text-red-600 mr-2"></i>
                    Constraints
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>High complexity:</strong> Requires extensive fine-tuning</li>
                    <li>• <strong>Limited adaptability:</strong> Bound to training tools</li>
                    <li>• <strong>No runtime learning:</strong> Cannot adapt to new tools dynamically</li>
                    <li>• <strong>Fixed tool set:</strong> Pre-defined during training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Voyager -->
      <section id="voyager" class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-rocket text-indigo-600 dark:text-indigo-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Voyager
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Lifelong learning agent for open-ended, interactive environments
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Concept -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <i class="fas fa-globe mr-2 text-indigo-600"></i>
                Lifelong Learning Paradigm
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Voyager is designed for <strong>open-ended exploration</strong> in interactive environments like Minecraft. 
                It maintains a growing skill library and continuously learns new behaviors through autonomous exploration 
                and discovery.
              </p>

              <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Core Components:</h4>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <strong>Curriculum Agent:</strong> Proposes new goals</li>
                  <li>• <strong>Skill Library:</strong> Stores learned behaviors</li>
                  <li>• <strong>Iterative Prompting:</strong> Refines code through feedback</li>
                  <li>• <strong>Environment Interaction:</strong> Real-time exploration</li>
                </ul>
              </div>
            </div>

            <!-- Capabilities & Challenges -->
            <div>
              <div class="grid grid-cols-1 gap-6">
                <!-- Capabilities -->
                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-magic text-green-600 mr-2"></i>
                    Unique Capabilities
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>Strong generalization:</strong> Adapts to dynamic environments</li>
                    <li>• <strong>Continuous learning:</strong> Never stops improving</li>
                    <li>• <strong>Skill composition:</strong> Combines learned behaviors</li>
                    <li>• <strong>Open-ended exploration:</strong> Self-directed discovery</li>
                  </ul>
                </div>

                <!-- Complexity -->
                <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <i class="fas fa-complexity text-orange-600 mr-2"></i>
                    Implementation Challenges
                  </h4>
                  <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• <strong>Highly complex:</strong> Multiple interacting systems</li>
                    <li>• <strong>Computationally expensive:</strong> Continuous exploration</li>
                    <li>• <strong>Environment-specific:</strong> Designed for interactive worlds</li>
                    <li>• <strong>Difficult to replicate:</strong> Complex architecture</li>
                  </ul>
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
            routerLink="/reflexion-framework"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Previous: Reflexion Framework
          </button>
          
          <button 
            routerLink="/comparative-analysis"
            class="btn-primary"
            (click)="markCompleted()">
            Next: Comparative Analysis
            <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./comparative-taxonomy.component.scss']
})
export class ComparativeTaxonomyComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('comparative-taxonomy');
  }

  markCompleted(): void {
    this.navigationService.markSectionCompleted('comparative-taxonomy');
  }
} 