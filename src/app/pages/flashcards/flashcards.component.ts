import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flashcards-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-cards-blank mr-3 text-lavender-600"></i>
              Flashcards
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Master key concepts and terminology
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <i class="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Category Selection -->
      <section class="content-section mb-8">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-layer-group text-purple-600 dark:text-purple-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Study Categories
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Choose a topic to study with interactive flashcards
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button 
              *ngFor="let category of categories; let i = index"
              (click)="selectCategory(i)"
              class="category-card p-4 rounded-lg border-2 transition-all duration-200 text-left"
              [ngClass]="{
                'border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600': selectedCategory === i,
                'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600': selectedCategory !== i
              }">
              <div class="flex items-center space-x-3 mb-2">
                <i [class]="category.icon + ' text-lg'" [ngClass]="{
                  'text-blue-600': selectedCategory === i,
                  'text-gray-600 dark:text-gray-400': selectedCategory !== i
                }"></i>
                <h3 class="font-semibold text-gray-900 dark:text-white">{{category.name}}</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{category.description}}</p>
              <div class="text-xs text-blue-600 dark:text-blue-400 font-medium">
                {{category.cardCount}} cards
              </div>
            </button>
          </div>
        </div>
      </section>

      <!-- Flashcard Interface -->
      <section *ngIf="selectedCategory !== null" class="content-section mb-12">
        <div class="card">
          <!-- Progress -->
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center space-x-4">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{categories[selectedCategory].name}}
              </h3>
              <span class="text-sm text-gray-600 dark:text-gray-400">
                Card {{currentCardIndex + 1}} of {{getCurrentCategoryCards().length}}
              </span>
            </div>
            <div class="flex space-x-2">
              <button (click)="shuffleCards()" class="btn-secondary text-sm">
                <i class="fas fa-random mr-1"></i>
                Shuffle
              </button>
              <button (click)="resetProgress()" class="btn-secondary text-sm">
                <i class="fas fa-redo mr-1"></i>
                Reset
              </button>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="mb-8">
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                class="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                [style.width.%]="getProgressPercentage()">
              </div>
            </div>
            <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
              <span>Progress</span>
              <span>{{getProgressPercentage()}}% complete</span>
            </div>
          </div>

          <!-- Flashcard -->
          <div class="flashcard-container mb-8" *ngIf="getCurrentCard()">
            <div 
              class="flashcard"
              [class.flipped]="isCardFlipped"
              (click)="flipCard()">
              
              <!-- Front of card -->
              <div class="flashcard-front">
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 min-h-[300px] flex flex-col justify-center cursor-pointer">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i class="fas fa-question text-white text-xl"></i>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {{getCurrentCard()?.term}}
                    </h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic">
                      Click to reveal definition
                    </p>
                  </div>
                </div>
              </div>

              <!-- Back of card -->
              <div class="flashcard-back">
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800 min-h-[300px] flex flex-col justify-center cursor-pointer">
                  <div>
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-lightbulb text-white"></i>
                      </div>
                      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{getCurrentCard()?.term}}
                      </h4>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {{getCurrentCard()?.definition}}
                    </p>
                    <div *ngIf="getCurrentCard()?.example" class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <p class="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">Example:</p>
                      <p class="text-sm text-gray-700 dark:text-gray-300">{{getCurrentCard()?.example}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Controls -->
          <div class="flex justify-between items-center">
            <button 
              (click)="previousCard()"
              [disabled]="currentCardIndex === 0"
              class="btn-secondary"
              [class.opacity-50]="currentCardIndex === 0"
              [class.cursor-not-allowed]="currentCardIndex === 0">
              <i class="fas fa-arrow-left mr-2"></i>
              Previous
            </button>

            <div class="flex space-x-3">
              <button 
                *ngIf="isCardFlipped"
                (click)="markDifficult()"
                class="px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors">
                <i class="fas fa-times mr-2"></i>
                Difficult
              </button>

              <button 
                *ngIf="isCardFlipped"
                (click)="markEasy()"
                class="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors">
                <i class="fas fa-check mr-2"></i>
                Easy
              </button>
            </div>

            <button 
              (click)="nextCard()"
              [disabled]="currentCardIndex >= getCurrentCategoryCards().length - 1"
              class="btn-primary"
              [class.opacity-50]="currentCardIndex >= getCurrentCategoryCards().length - 1"
              [class.cursor-not-allowed]="currentCardIndex >= getCurrentCategoryCards().length - 1">
              Next
              <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      <!-- Study Stats -->
      <section *ngIf="selectedCategory !== null" class="content-section mb-12">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            <i class="fas fa-chart-bar mr-2 text-blue-600"></i>
            Study Statistics
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Cards Studied</p>
                  <p class="text-2xl font-bold text-blue-600">{{studyStats.cardsStudied}}</p>
                </div>
                <i class="fas fa-cards-blank text-blue-500 text-2xl"></i>
              </div>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Easy Cards</p>
                  <p class="text-2xl font-bold text-green-600">{{studyStats.easyCards}}</p>
                </div>
                <i class="fas fa-check-circle text-green-500 text-2xl"></i>
              </div>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Difficult Cards</p>
                  <p class="text-2xl font-bold text-red-600">{{studyStats.difficultCards}}</p>
                </div>
                <i class="fas fa-times-circle text-red-500 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/interactive-quiz"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Quiz
          </button>
          
          <button 
            routerLink="/progress"
            class="btn-primary">
            View Progress
            <i class="fas fa-chart-pie ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {
  
  selectedCategory: number | null = null;
  currentCardIndex: number = 0;
  isCardFlipped: boolean = false;
  
  studyStats = {
    cardsStudied: 0,
    easyCards: 0,
    difficultCards: 0
  };

  categories = [
    {
      name: 'Core Concepts',
      description: 'Fundamental terms and definitions',
      icon: 'fas fa-brain',
      cardCount: 8
    },
    {
      name: 'Frameworks',
      description: 'Different agent architectures',
      icon: 'fas fa-sitemap',
      cardCount: 6
    },
    {
      name: 'Evaluation',
      description: 'Metrics and assessment methods',
      icon: 'fas fa-chart-line',
      cardCount: 6
    },
    {
      name: 'Technical',
      description: 'Implementation details',
      icon: 'fas fa-cogs',
      cardCount: 5
    }
  ];

  flashcards = {
    0: [ // Core Concepts
      {
        term: 'Verbal Self-Reflection',
        definition: 'The process by which language models generate textual critiques of their own behavior to guide future decision-making and improvement.',
        example: 'After failing a coding task, an agent reflects: "My approach was too simplistic. I should break down complex problems into smaller subtasks and verify each step."'
      },
      {
        term: 'Reflexion Framework',
        definition: 'A novel approach that uses verbal self-reflection to enhance language agent performance through iterative refinement based on linguistic feedback.',
        example: 'An agent completes a task, receives environmental feedback, generates a self-critique, and uses that reflection to improve on the next attempt.'
      },
      {
        term: 'Actor-Evaluator-Self-Reflection',
        definition: 'The three-component architecture of Reflexion: Actor generates responses, Evaluator assesses performance, Self-Reflection converts feedback to textual insights.',
        example: 'Actor writes code → Evaluator checks if tests pass → Self-Reflection analyzes: "The logic was correct but I missed edge cases for empty inputs."'
      },
      {
        term: 'Sparse Reward Problem',
        definition: 'Challenge in reinforcement learning where environmental feedback is infrequent or uninformative, making it difficult for agents to learn effectively.',
        example: 'In a complex reasoning task, an agent only receives a final "correct" or "incorrect" signal without understanding which steps were problematic.'
      },
      {
        term: 'Episodic Memory',
        definition: 'The ability of agents to remember and learn from past experiences across different episodes or tasks.',
        example: 'An agent remembers that rushing through code review led to bugs in previous projects and allocates more time for careful analysis.'
      },
      {
        term: 'Meta-Cognitive Reasoning',
        definition: 'Higher-order thinking that involves awareness and understanding of one\'s own thought processes and learning strategies.',
        example: 'An agent recognizes its tendency to make assumptions and develops a strategy to explicitly verify information before proceeding.'
      },
      {
        term: 'Trajectory Generation',
        definition: 'The process of creating a sequence of actions or decisions that leads from an initial state to a goal state.',
        example: 'In a planning task, generating the sequence: [gather requirements → design system → implement features → test functionality → deploy]'
      },
      {
        term: 'Dynamic Programming Analogy',
        definition: 'Reflexion mirrors policy/value iteration in RL but operates in the linguistic domain using textual critiques instead of numerical updates.',
        example: 'Like value iteration updates state values, Reflexion updates behavioral strategies through accumulated textual insights.'
      }
    ],
    1: [ // Frameworks
      {
        term: 'Self-Refine',
        definition: 'A single-turn framework where models generate initial responses, internally critique them, and produce refined outputs.',
        example: 'Write essay → Self-critique: "Argument lacks evidence" → Rewrite with supporting data and sources.'
      },
      {
        term: 'ReAct (Reasoning + Acting)',
        definition: 'Framework that interleaves explicit reasoning traces with action execution, combining thought processes with concrete steps.',
        example: 'Thought: "I need sales data" → Action: query_database("sales_2023") → Observation: [results] → Thought: "Now analyze trends"'
      },
      {
        term: 'Toolformer',
        definition: 'Self-supervised approach that learns when and how to invoke external tools through fine-tuning on tool-augmented datasets.',
        example: 'Model learns to call Calculator(157 * 23) for math problems or Translate("hello", "spanish") for language tasks.'
      },
      {
        term: 'Voyager',
        definition: 'Lifelong learning agent designed for open-ended exploration in interactive environments, maintaining a growing skill library.',
        example: 'In Minecraft, develops skills like "craft_pickaxe", "mine_diamond", "build_shelter" and combines them for complex objectives.'
      },
      {
        term: 'Constitutional AI',
        definition: 'Approach that trains AI systems to follow a set of principles or constitution, ensuring aligned and ethical behavior.',
        example: 'Before responding, agent checks: "Does this violate privacy? Could this cause harm? Am I being truthful and helpful?"'
      },
      {
        term: 'Multi-Agent Reflection',
        definition: 'Systems where multiple agents collaborate to provide diverse perspectives and cross-validation of reasoning processes.',
        example: 'Agent A proposes solution → Agent B critiques approach → Agent C suggests improvements → Consensus emerges through discussion.'
      }
    ],
    2: [ // Evaluation
      {
        term: 'Task Performance & Efficacy',
        definition: 'Measures how effectively an agent achieves intended outcomes across different domains and benchmark tasks.',
        example: 'Improvements on multi-hop reasoning tasks, sequential decision-making benchmarks, and code generation challenges.'
      },
      {
        term: 'Learning & Computational Efficiency',
        definition: 'Assessment of training time, inference speed, memory usage, and resource requirements for agent deployment.',
        example: 'Reflexion achieves improvements with minimal additional compute compared to Toolformer\'s expensive fine-tuning requirements.'
      },
      {
        term: 'Interpretability & Diagnosability',
        definition: 'Degree to which agent decision-making processes are transparent, explainable, and debuggable.',
        example: 'ReAct provides explicit reasoning traces, while Reflexion offers detailed self-critiques explaining decision rationale.'
      },
      {
        term: 'Architectural Complexity',
        definition: 'Evaluation of implementation difficulty, deployment challenges, and maintenance overhead for agent systems.',
        example: 'Self-Refine: Low complexity (single model) vs. Voyager: High complexity (multiple interacting components).'
      },
      {
        term: 'Generalization & Adaptability',
        definition: 'Ability to transfer learned skills across domains and adapt to novel tasks without specific training.',
        example: 'Agent trained on math problems successfully applies reflection strategies to creative writing and code debugging.'
      },
      {
        term: 'Operational Cost',
        definition: 'Financial and resource implications including infrastructure needs, API usage costs, and scaling expenses.',
        example: 'Multiple reflection cycles increase inference costs but may reduce need for expensive model retraining.'
      }
    ],
    3: [ // Technical
      {
        term: 'Context Window Limitations',
        definition: 'The maximum sequence length that language models can process, which constrains long reflection chains.',
        example: 'After 10 reflection cycles, the accumulated text exceeds the 4K token limit, requiring summarization or truncation.'
      },
      {
        term: 'Hallucination in Reflection',
        definition: 'When self-generated critiques contain factual errors or false reasoning that can compound across iterations.',
        example: 'Agent incorrectly reflects: "My math was wrong" when the calculation was actually correct, leading to unnecessary changes.'
      },
      {
        term: 'Prompt Engineering',
        definition: 'The practice of carefully designing input prompts to elicit desired behaviors from language models.',
        example: 'Using structured prompts like "Thought: [reasoning] Action: [step] Reflection: [self-critique]" to guide agent behavior.'
      },
      {
        term: 'Fine-tuning vs. Prompting',
        definition: 'Trade-off between updating model weights (fine-tuning) versus using carefully crafted inputs (prompting) for behavioral change.',
        example: 'Reflexion uses prompting for flexibility, while Toolformer requires fine-tuning for tool integration.'
      },
      {
        term: 'Benchmarking Protocols',
        definition: 'Standardized evaluation procedures for comparing agent performance across different tasks and metrics.',
        example: 'Using ALFWorld for sequential decision-making, HotpotQA for multi-hop reasoning, and HumanEval for code generation.'
      }
    ]
  };

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('flashcards');
  }

  selectCategory(index: number): void {
    this.selectedCategory = index;
    this.currentCardIndex = 0;
    this.isCardFlipped = false;
    this.resetProgress();
  }

  getCurrentCategoryCards(): any[] {
    if (this.selectedCategory === null) return [];
    return this.flashcards[this.selectedCategory as keyof typeof this.flashcards] || [];
  }

  getCurrentCard(): any {
    const cards = this.getCurrentCategoryCards();
    return cards[this.currentCardIndex] || null;
  }

  flipCard(): void {
    this.isCardFlipped = !this.isCardFlipped;
  }

  nextCard(): void {
    const cards = this.getCurrentCategoryCards();
    if (this.currentCardIndex < cards.length - 1) {
      this.currentCardIndex++;
      this.isCardFlipped = false;
    }
  }

  previousCard(): void {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
      this.isCardFlipped = false;
    }
  }

  markEasy(): void {
    this.studyStats.easyCards++;
    this.studyStats.cardsStudied++;
    this.nextCard();
  }

  markDifficult(): void {
    this.studyStats.difficultCards++;
    this.studyStats.cardsStudied++;
    // Keep the card for review by not auto-advancing
  }

  shuffleCards(): void {
    if (this.selectedCategory !== null) {
      const cards = this.flashcards[this.selectedCategory as keyof typeof this.flashcards];
      // Simple shuffle algorithm
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      this.currentCardIndex = 0;
      this.isCardFlipped = false;
    }
  }

  resetProgress(): void {
    this.studyStats = {
      cardsStudied: 0,
      easyCards: 0,
      difficultCards: 0
    };
    this.currentCardIndex = 0;
    this.isCardFlipped = false;
  }

  getProgressPercentage(): number {
    const cards = this.getCurrentCategoryCards();
    if (cards.length === 0) return 0;
    return Math.round(((this.currentCardIndex + 1) / cards.length) * 100);
  }
} 