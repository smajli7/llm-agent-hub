import { Injectable, signal } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  route: string;
  icon: string;
  description?: string;
  completed?: boolean;
  subsections?: NavigationItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  // Signal for reactive sidebar state
  public sidebarOpen = signal<boolean>(false);
  public currentSection = signal<string>('home');
  public scrollProgress = signal<number>(0);

  // Navigation items based on the paper structure
  public navigationItems: NavigationItem[] = [
    {
      id: 'home',
      title: 'Home',
      route: '/home',
      icon: 'fas fa-home',
      description: 'Welcome to LLM Agent Hub'
    },
    {
      id: 'introduction',
      title: 'Introduction & Context',
      route: '/introduction',
      icon: 'fas fa-book-open',
      description: 'The challenge of efficient learning in LLM agents',
      subsections: [
        {
          id: 'rl-challenges',
          title: 'RL Limitations',
          route: '/introduction#rl-challenges',
          icon: 'fas fa-exclamation-triangle'
        },
        {
          id: 'verbal-reflection',
          title: 'Verbal Self-Reflection',
          route: '/introduction#verbal-reflection',
          icon: 'fas fa-comments'
        }
      ]
    },
    {
      id: 'reflexion-framework',
      title: 'Reflexion Framework',
      route: '/reflexion-framework',
      icon: 'fas fa-cogs',
      description: 'Core Actor-Evaluator-Self-Reflection architecture',
      subsections: [
        {
          id: 'architecture',
          title: 'Architecture',
          route: '/reflexion-framework#architecture',
          icon: 'fas fa-sitemap'
        },
        {
          id: 'iterative-cycle',
          title: 'Iterative Cycle',
          route: '/reflexion-framework#iterative-cycle',
          icon: 'fas fa-sync-alt'
        },
        {
          id: 'performance',
          title: 'Performance Results',
          route: '/reflexion-framework#performance',
          icon: 'fas fa-chart-line'
        }
      ]
    },
    {
      id: 'comparative-taxonomy',
      title: 'Comparative Taxonomy',
      route: '/comparative-taxonomy',
      icon: 'fas fa-layer-group',
      description: 'Alternative iterative improvement frameworks',
      subsections: [
        {
          id: 'self-refine',
          title: 'Self-Refine',
          route: '/comparative-taxonomy#self-refine',
          icon: 'fas fa-edit'
        },
        {
          id: 'react',
          title: 'ReAct',
          route: '/comparative-taxonomy#react',
          icon: 'fas fa-bolt'
        },
        {
          id: 'toolformer',
          title: 'Toolformer',
          route: '/comparative-taxonomy#toolformer',
          icon: 'fas fa-tools'
        },
        {
          id: 'voyager',
          title: 'Voyager',
          route: '/comparative-taxonomy#voyager',
          icon: 'fas fa-rocket'
        }
      ]
    },
    {
      id: 'comparative-analysis',
      title: 'Comparative Analysis',
      route: '/comparative-analysis',
      icon: 'fas fa-balance-scale',
      description: 'Structured evaluation across six key metrics'
    },
    {
      id: 'limitations',
      title: 'Limitations & Ethics',
      route: '/limitations',
      icon: 'fas fa-shield-alt',
      description: 'Real-world implications and ethical considerations'
    },
    {
      id: 'future-directions',
      title: 'Future Directions',
      route: '/future-directions',
      icon: 'fas fa-telescope',
      description: 'Recent developments and research opportunities'
    },
    {
      id: 'bibliography',
      title: 'Bibliography',
      route: '/bibliography',
      icon: 'fas fa-book',
      description: 'Academic sources and references'
    },
    {
      id: 'interactive-quiz',
      title: 'Interactive Quiz',
      route: '/interactive-quiz',
      icon: 'fas fa-question-circle',
      description: 'Test your understanding'
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      route: '/flashcards',
      icon: 'fas fa-cards-blank',
      description: 'Key terms and concepts'
    },
    {
      id: 'progress',
      title: 'Progress',
      route: '/progress',
      icon: 'fas fa-chart-pie',
      description: 'Track your learning journey'
    }
  ];

  constructor() {}

  toggleSidebar(): void {
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  openSidebar(): void {
    this.sidebarOpen.set(true);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  setCurrentSection(sectionId: string): void {
    this.currentSection.set(sectionId);
  }

  updateScrollProgress(progress: number): void {
    this.scrollProgress.set(Math.max(0, Math.min(100, progress)));
  }

  markSectionCompleted(sectionId: string): void {
    const item = this.navigationItems.find(item => item.id === sectionId);
    if (item) {
      item.completed = true;
    }
  }

  getSectionById(id: string): NavigationItem | undefined {
    return this.navigationItems.find(item => item.id === id);
  }

  getCompletedSections(): NavigationItem[] {
    return this.navigationItems.filter(item => item.completed);
  }

  getProgressPercentage(): number {
    const totalSections = this.navigationItems.filter(item => 
      !['home', 'progress'].includes(item.id)
    ).length;
    const completedSections = this.getCompletedSections().filter(item => 
      !['home', 'progress'].includes(item.id)
    ).length;
    
    return Math.round((completedSections / totalSections) * 100);
  }
} 