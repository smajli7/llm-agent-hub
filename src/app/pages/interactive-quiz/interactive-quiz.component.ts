import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-interactive-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="interactive-quiz-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-question-circle mr-3 text-lavender-600"></i>
              Interactive Quiz
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Test your understanding of LLM agents and frameworks
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <i class="fas fa-brain text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Quiz Interface -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-question-circle text-blue-600 dark:text-blue-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Interactive Knowledge Assessment
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Test your understanding of LLM agent frameworks and verbal self-reflection
              </p>
            </div>
          </div>

          <!-- Quiz Progress -->
          <div class="mb-8">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{currentQuestion + 1}} of {{questions.length}}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                [style.width.%]="((currentQuestion + 1) / questions.length) * 100">
              </div>
            </div>
          </div>

          <!-- Quiz Question -->
          <div class="quiz-question-container mb-8">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {{questions[currentQuestion]?.question}}
              </h3>
              
              <div class="space-y-3">
                <div *ngFor="let option of questions[currentQuestion]?.options; let i = index"
                     class="quiz-option cursor-pointer p-4 rounded-lg border transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
                     [ngClass]="{
                       'bg-blue-50 border-blue-300 dark:bg-blue-900/20': selectedAnswer === i && !showFeedback,
                       'bg-green-50 border-green-300 dark:bg-green-900/20': showFeedback && i === questions[currentQuestion]?.correctAnswer,
                       'bg-red-50 border-red-300 dark:bg-red-900/20': showFeedback && selectedAnswer === i && i !== questions[currentQuestion]?.correctAnswer
                     }"
                     (click)="selectAnswer(i)">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                      <div class="w-3 h-3 rounded-full bg-blue-500 transition-opacity duration-200"
                           [class.opacity-100]="selectedAnswer === i"
                           [class.opacity-0]="selectedAnswer !== i"></div>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">{{option}}</span>
                  </div>
                </div>
              </div>

              <!-- Feedback -->
              <div *ngIf="showFeedback" 
                   class="mt-6 p-4 rounded-lg"
                   [ngClass]="{
                     'bg-green-100 dark:bg-green-900/20': selectedAnswer === questions[currentQuestion]?.correctAnswer,
                     'bg-red-100 dark:bg-red-900/20': selectedAnswer !== questions[currentQuestion]?.correctAnswer
                   }">
                <div class="flex items-start space-x-2">
                  <i class="fas fa-check-circle text-green-600 mt-1" *ngIf="selectedAnswer === questions[currentQuestion]?.correctAnswer"></i>
                  <i class="fas fa-times-circle text-red-600 mt-1" *ngIf="selectedAnswer !== questions[currentQuestion]?.correctAnswer"></i>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white mb-2">
                      {{selectedAnswer === questions[currentQuestion]?.correctAnswer ? 'Correct!' : 'Incorrect'}}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{questions[currentQuestion]?.explanation}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quiz Controls -->
          <div class="flex justify-between items-center">
            <button 
              (click)="previousQuestion()"
              [disabled]="currentQuestion === 0"
              class="btn-secondary"
              [class.opacity-50]="currentQuestion === 0"
              [class.cursor-not-allowed]="currentQuestion === 0">
              <i class="fas fa-arrow-left mr-2"></i>
              Previous
            </button>

            <div class="flex space-x-3">
              <button 
                *ngIf="!showFeedback && selectedAnswer !== null"
                (click)="checkAnswer()"
                class="btn-primary">
                Check Answer
              </button>

              <button 
                *ngIf="showFeedback && currentQuestion < questions.length - 1"
                (click)="nextQuestion()"
                class="btn-primary">
                Next Question
                <i class="fas fa-arrow-right ml-2"></i>
              </button>

              <button 
                *ngIf="showFeedback && currentQuestion === questions.length - 1"
                (click)="showResults()"
                class="btn-primary">
                Show Results
                <i class="fas fa-trophy ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Quiz Results -->
      <section *ngIf="quizCompleted" class="content-section mb-12">
        <div class="card">
          <div class="text-center py-12">
            <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                 [ngClass]="{
                   'bg-gradient-to-br from-green-500 to-green-600': score >= 80,
                   'bg-gradient-to-br from-yellow-500 to-yellow-600': score >= 60 && score < 80,
                   'bg-gradient-to-br from-red-500 to-red-600': score < 60
                 }">
              <i class="fas fa-trophy text-white text-3xl" *ngIf="score >= 80"></i>
              <i class="fas fa-medal text-white text-3xl" *ngIf="score >= 60 && score < 80"></i>
              <i class="fas fa-redo text-white text-3xl" *ngIf="score < 60"></i>
            </div>
            
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz Complete!
            </h2>
            
            <div class="text-6xl font-bold mb-4"
                 [ngClass]="{
                   'text-green-600': score >= 80,
                   'text-yellow-600': score >= 60 && score < 80,
                   'text-red-600': score < 60
                 }">
              {{score}}%
            </div>
            
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
              You scored {{correctAnswers}} out of {{questions.length}} questions correctly
            </p>
            
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 max-w-md mx-auto mb-8">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                {{getPerformanceMessage()}}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{getRecommendation()}}
              </p>
            </div>
            
            <div class="flex justify-center space-x-4">
              <button (click)="restartQuiz()" class="btn-primary">
                <i class="fas fa-redo mr-2"></i>
                Retake Quiz
              </button>
              <button routerLink="/flashcards" class="btn-secondary">
                <i class="fas fa-layer-group mr-2"></i>
                Try Flashcards
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/future-directions"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Future Directions
          </button>
          
          <button 
            routerLink="/flashcards"
            class="btn-primary">
            Study Flashcards
            <i class="fas fa-cards-blank ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./interactive-quiz.component.scss']
})
export class InteractiveQuizComponent implements OnInit {
  
  currentQuestion: number = 0;
  selectedAnswer: number | null = null;
  showFeedback: boolean = false;
  correctAnswers: number = 0;
  quizCompleted: boolean = false;
  score: number = 0;

  questions = [
    {
      question: "What is the primary innovation of the Reflexion framework?",
      options: [
        "Using numerical rewards for optimization",
        "Transforming sparse feedback into detailed textual critiques",
        "Implementing traditional reinforcement learning",
        "Creating fixed behavior patterns"
      ],
      correctAnswer: 1,
      explanation: "Reflexion's key innovation is converting sparse environmental feedback into rich, detailed textual critiques that enable transparent self-improvement without retraining."
    },
    {
      question: "Which three components make up the Reflexion architecture?",
      options: [
        "Input, Processing, Output",
        "Model, Data, Training",
        "Actor, Evaluator, Self-Reflection",
        "Planning, Execution, Verification"
      ],
      correctAnswer: 2,
      explanation: "The Reflexion framework consists of three core components: the Actor (generates responses), Evaluator (identifies errors), and Self-Reflection (converts feedback to textual critiques)."
    },
    {
      question: "What is the main advantage of Self-Refine over more complex frameworks?",
      options: [
        "Higher accuracy on all tasks",
        "Simplicity and ease of implementation",
        "Better long-term memory",
        "Lower computational cost"
      ],
      correctAnswer: 1,
      explanation: "Self-Refine's main strength is its simplicity - it operates through single-turn internal feedback, making it easy to implement and understand, though this also limits its capabilities."
    },
    {
      question: "Which framework demonstrated significant improvements on ALFWorld tasks?",
      options: [
        "Self-Refine",
        "ReAct",
        "Toolformer",
        "Reflexion"
      ],
      correctAnswer: 3,
      explanation: "Reflexion achieved remarkable improvements on ALFWorld sequential decision-making tasks through its iterative self-reflection mechanism."
    },
    {
      question: "What is the primary limitation of ReAct in long-term applications?",
      options: [
        "Poor reasoning capabilities",
        "No episodic memory for learning from past episodes",
        "Inability to use tools",
        "Complex implementation requirements"
      ],
      correctAnswer: 1,
      explanation: "ReAct's main limitation is the lack of episodic memory - it cannot learn from past episodes, meaning each session starts fresh without accumulated knowledge."
    },
    {
      question: "Which evaluation metric focuses on transparency of decision-making processes?",
      options: [
        "Task Performance",
        "Computational Efficiency",
        "Interpretability & Diagnosability",
        "Operational Cost"
      ],
      correctAnswer: 2,
      explanation: "Interpretability & Diagnosability measures how transparent and explainable the system's decision-making process is, including reasoning transparency and error diagnosis capabilities."
    },
    {
      question: "What is a key ethical concern with self-reflective AI systems?",
      options: [
        "High computational costs",
        "Slow inference speed",
        "Potential for recursive self-improvement leading to uncontrolled capability enhancement",
        "Difficulty in implementation"
      ],
      correctAnswer: 2,
      explanation: "A major ethical concern is that self-reflection could lead to recursive improvement cycles where AI systems continuously enhance their own capabilities in potentially uncontrolled ways."
    },
    {
      question: "Which framework requires the most computational resources during training?",
      options: [
        "Self-Refine",
        "ReAct",
        "Toolformer",
        "Reflexion"
      ],
      correctAnswer: 2,
      explanation: "Toolformer requires extensive self-supervised fine-tuning to learn when and how to invoke external tools, making it the most computationally expensive during training."
    },
    {
      question: "What is the relationship between Reflexion and traditional reinforcement learning?",
      options: [
        "Reflexion replaces reinforcement learning entirely",
        "Reflexion mirrors policy/value iteration but operates in the linguistic domain",
        "Reflexion is identical to traditional RL",
        "Reflexion has no connection to reinforcement learning"
      ],
      correctAnswer: 1,
      explanation: "Reflexion mirrors the iterative improvement cycles of traditional RL (like policy/value iteration) but operates in the linguistic domain using textual critiques instead of numerical rewards."
    },
    {
      question: "According to the comparative analysis, what is the main conclusion about choosing between frameworks?",
      options: [
        "Reflexion is always the best choice",
        "Self-Refine should be used for all applications",
        "There is no universally optimal choice - it depends on specific requirements",
        "Voyager outperforms all other frameworks"
      ],
      correctAnswer: 2,
      explanation: "The key insight is that there is no universally optimal framework. The choice depends heavily on specific application requirements, resource constraints, and organizational priorities."
    }
  ];

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('interactive-quiz');
  }

  selectAnswer(answerIndex: number): void {
    if (!this.showFeedback) {
      this.selectedAnswer = answerIndex;
    }
  }

  checkAnswer(): void {
    if (this.selectedAnswer !== null) {
      this.showFeedback = true;
      if (this.selectedAnswer === this.questions[this.currentQuestion].correctAnswer) {
        this.correctAnswers++;
      }
    }
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.selectedAnswer = null;
      this.showFeedback = false;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.selectedAnswer = null;
      this.showFeedback = false;
    }
  }

  showResults(): void {
    this.score = Math.round((this.correctAnswers / this.questions.length) * 100);
    this.quizCompleted = true;
  }

  restartQuiz(): void {
    this.currentQuestion = 0;
    this.selectedAnswer = null;
    this.showFeedback = false;
    this.correctAnswers = 0;
    this.quizCompleted = false;
    this.score = 0;
  }

  getPerformanceMessage(): string {
    if (this.score >= 80) {
      return 'Excellent Work!';
    } else if (this.score >= 60) {
      return 'Good Progress!';
    } else {
      return 'Keep Learning!';
    }
  }

  getRecommendation(): string {
    if (this.score >= 80) {
      return 'You have a strong understanding of LLM agent frameworks. Consider exploring the practical implementation details.';
    } else if (this.score >= 60) {
      return 'You have a solid foundation. Review the framework comparison and key technical details to improve further.';
    } else {
      return 'Consider reviewing the core concepts and framework architectures. The flashcards might help reinforce key ideas.';
    }
  }
} 