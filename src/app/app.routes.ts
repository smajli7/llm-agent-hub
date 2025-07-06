import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'LLM Agent Hub - Home'
  },
  {
    path: 'introduction',
    loadComponent: () => import('./pages/introduction/introduction.component').then(m => m.IntroductionComponent),
    title: 'Introduction and Context'
  },
  {
    path: 'reflexion-framework',
    loadComponent: () => import('./pages/reflexion-framework/reflexion-framework.component').then(m => m.ReflexionFrameworkComponent),
    title: 'Reflexion Framework'
  },
  {
    path: 'comparative-taxonomy',
    loadComponent: () => import('./pages/comparative-taxonomy/comparative-taxonomy.component').then(m => m.ComparativeTaxonomyComponent),
    title: 'Comparative Taxonomy'
  },
  {
    path: 'comparative-analysis',
    loadComponent: () => import('./pages/comparative-analysis/comparative-analysis.component').then(m => m.ComparativeAnalysisComponent),
    title: 'Comparative Analysis'
  },
  {
    path: 'limitations',
    loadComponent: () => import('./pages/limitations/limitations.component').then(m => m.LimitationsComponent),
    title: 'Limitations and Implications'
  },
  {
    path: 'future-directions',
    loadComponent: () => import('./pages/future-directions/future-directions.component').then(m => m.FutureDirectionsComponent),
    title: 'Future Directions'
  },
  {
    path: 'interactive-quiz',
    loadComponent: () => import('./pages/interactive-quiz/interactive-quiz.component').then(m => m.InteractiveQuizComponent),
    title: 'Interactive Quiz'
  },
  {
    path: 'flashcards',
    loadComponent: () => import('./pages/flashcards/flashcards.component').then(m => m.FlashcardsComponent),
    title: 'Flashcards'
  },
  {
    path: 'progress',
    loadComponent: () => import('./pages/progress/progress.component').then(m => m.ProgressComponent),
    title: 'Learning Progress'
  },
  {
    path: 'bibliography',
    loadComponent: () => import('./pages/bibliography/bibliography.component').then(m => m.BibliographyComponent),
    title: 'Bibliography'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]; 