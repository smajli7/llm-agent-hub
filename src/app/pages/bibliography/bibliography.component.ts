import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-bibliography',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bibliography-container animate-fade-in">
      
      <!-- Page Header -->
      <section class="page-header mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-book mr-3 text-lavender-600"></i>
              Bibliography
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Academic sources and references for LLM agent research
            </p>
          </div>
          <div class="hidden md:block">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <i class="fas fa-quote-left text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Bibliography Introduction -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-info-circle text-blue-600 dark:text-blue-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Research Foundation
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                This learning hub is built upon cutting-edge research in LLM agents and verbal self-reflection
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The content presented in this educational platform draws from a comprehensive collection of 
              <strong>{{references.length}} peer-reviewed academic sources</strong>, spanning foundational reinforcement 
              learning theory to the latest developments in self-reflective AI systems.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div class="text-2xl font-bold text-blue-600 mb-1">{{getJournalCount()}}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Journal Articles</div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div class="text-2xl font-bold text-green-600 mb-1">{{getConferenceCount()}}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Conference Papers</div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div class="text-2xl font-bold text-purple-600 mb-1">{{getWebResourceCount()}}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Web Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Filter Categories -->
      <section class="content-section mb-8">
        <div class="card">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            <i class="fas fa-filter mr-2 text-gray-600"></i>
            Filter by Category
          </h3>
          <div class="flex flex-wrap gap-2">
            <button 
              *ngFor="let category of categories"
              (click)="selectCategory(category.key)"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              [ngClass]="{
                'bg-blue-600 text-white': selectedCategory === category.key,
                'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600': selectedCategory !== category.key
              }">
              <i [class]="category.icon + ' mr-2'"></i>
              {{category.name}} ({{category.count}})
            </button>
          </div>
        </div>
      </section>

      <!-- References List -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              References
              <span class="text-lg font-normal text-gray-600 dark:text-gray-400 ml-2">
                ({{getFilteredReferences().length}} of {{references.length}})
              </span>
            </h2>
            <button 
              (click)="selectCategory('all')"
              class="btn-secondary text-sm"
              *ngIf="selectedCategory !== 'all'">
              <i class="fas fa-times mr-2"></i>
              Clear Filter
            </button>
          </div>

          <div class="space-y-6">
            <div 
              *ngFor="let ref of getFilteredReferences(); let i = index"
              class="reference-item bg-gray-50 dark:bg-dark-secondary rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200">
              
              <!-- Reference Number and Category -->
              <div class="flex items-start justify-between mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  [{{ref.number}}]
                </span>
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                      [ngClass]="{
                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400': ref.type === 'journal',
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400': ref.type === 'conference',
                        'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400': ref.type === 'web',
                        'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400': ref.type === 'book'
                      }">
                  {{getCategoryName(ref.type)}}
                </span>
              </div>

              <!-- Authors -->
              <div class="mb-2">
                <span class="font-medium text-gray-900 dark:text-white">{{ref.authors}}</span>
              </div>

              <!-- Title -->
              <div class="mb-2">
                <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">"{{ref.title}}"</span>
              </div>

              <!-- Publication Details -->
              <div class="mb-3 text-gray-600 dark:text-gray-400">
                <span *ngIf="ref.venue" class="italic">{{ref.venue}}</span>
                <span *ngIf="ref.volume" class="ml-2">vol. {{ref.volume}}</span>
                <span *ngIf="ref.pages" class="ml-2">pp. {{ref.pages}}</span>
                <span *ngIf="ref.year" class="ml-2">{{ref.year}}</span>
                <span *ngIf="ref.doi" class="ml-2">DOI: {{ref.doi}}</span>
              </div>

              <!-- URL -->
              <div *ngIf="ref.url" class="mb-3">
                <a [href]="ref.url" 
                   target="_blank" 
                   class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  View Source
                </a>
              </div>

              <!-- Access Date -->
              <div *ngIf="ref.accessDate" class="text-xs text-gray-500 dark:text-gray-500">
                Accessed: {{ref.accessDate}}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Citation Guide -->
      <section class="content-section mb-12">
        <div class="card">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-graduation-cap text-green-600 dark:text-green-400"></i>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Citation Guidelines
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                Proper academic citation formats for referencing these sources
              </p>
            </div>
          </div>

          <!-- Original Paper Access -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 mb-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                  <i class="fas fa-file-pdf mr-2 text-blue-600"></i>
                  Access Original Research Paper
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  View the foundational paper that this learning hub is based on
                </p>
              </div>
              <div class="flex space-x-3">
                <button 
                  (click)="viewOriginalPaper()"
                  class="btn-primary text-sm">
                  <i class="fas fa-eye mr-2"></i>
                  View PDF
                </button>
                <button 
                  (click)="downloadOriginalPaper()"
                  class="btn-secondary text-sm">
                  <i class="fas fa-download mr-2"></i>
                  Download
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-4">IEEE Citation Format</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              The references in this bibliography follow the <strong>IEEE citation format</strong>, which is commonly 
              used in computer science and engineering research. This format provides a standardized way to cite 
              academic sources and enables proper attribution of research contributions.
            </p>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 class="font-medium text-gray-900 dark:text-white mb-2">Example Citation:</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 font-mono">
                [2] N. Shinn, F. Cassano, E. Berman, A. Gopinath, K. Narasimhan, and S. Yao, 
                "Reflexion: Language Agents with Verbal Reinforcement Learning," Mar. 2023. 
                [Online]. Available: http://arxiv.org/pdf/2303.11366v4
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="navigation-section">
        <div class="flex justify-between items-center">
          <button 
            routerLink="/progress"
            class="btn-secondary">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Progress
          </button>
          
          <button 
            routerLink="/home"
            class="btn-primary">
            Return to Home
            <i class="fas fa-home ml-2"></i>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./bibliography.component.scss']
})
export class BibliographyComponent implements OnInit {
  
  selectedCategory: string = 'all';

  categories = [
    { key: 'all', name: 'All References', icon: 'fas fa-list', count: 35 },
    { key: 'journal', name: 'Journal Articles', icon: 'fas fa-file-alt', count: 8 },
    { key: 'conference', name: 'Conference Papers', icon: 'fas fa-users', count: 12 },
    { key: 'web', name: 'Web Resources', icon: 'fas fa-globe', count: 10 },
    { key: 'book', name: 'Books', icon: 'fas fa-book', count: 5 }
  ];

  references = [
    {
      number: 1,
      authors: "R. S. Sutton and A. Barto",
      title: "Reinforcement learning: An introduction",
      venue: "The MIT Press",
      year: "2020",
      type: "book",
      url: ""
    },
    {
      number: 2,
      authors: "N. Shinn, F. Cassano, E. Berman, A. Gopinath, K. Narasimhan, and S. Yao",
      title: "Reflexion: Language Agents with Verbal Reinforcement Learning",
      year: "Mar. 2023",
      type: "conference",
      url: "http://arxiv.org/pdf/2303.11366v4"
    },
    {
      number: 3,
      authors: "Z. Yang et al.",
      title: "HotpotQA: A Dataset for Diverse, Explainable Multi-hop Question Answering",
      year: "Sep. 2018",
      type: "conference",
      url: "http://arxiv.org/pdf/1809.09600v1"
    },
    {
      number: 4,
      authors: "M. Shridhar, X. Yuan, M.-A. Côté, Y. Bisk, A. Trischler, and M. Hausknecht",
      title: "ALFWorld: Aligning Text and Embodied Environments for Interactive Learning",
      year: "Oct. 2020",
      type: "conference",
      url: "http://arxiv.org/pdf/2010.03768v2"
    },
    {
      number: 5,
      authors: "M. Renze and E. Guven",
      title: "Self-Reflection in LLM Agents: Effects on Problem-Solving Performance",
      venue: "vol. 35",
      pages: "476–483",
      year: "2024",
      doi: "10.1109/FLLM63129.2024.10852493",
      type: "journal"
    },
    {
      number: 6,
      authors: "K. Se",
      title: "How Do Agents Learn from Their Own Mistakes? The Role of Reflection in AI",
      url: "https://www.turingpost.com/p/reflection",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 7,
      authors: "A. Madaan et al.",
      title: "Self-Refine: Iterative Refinement with Self-Feedback",
      year: "Mar. 2023",
      type: "conference",
      url: "http://arxiv.org/pdf/2303.17651v2"
    },
    {
      number: 8,
      authors: "S. Yao et al.",
      title: "ReAct: Synergizing Reasoning and Acting in Language Models",
      year: "Oct. 2022",
      type: "conference",
      url: "http://arxiv.org/pdf/2210.03629v3"
    },
    {
      number: 9,
      authors: "T. Schick et al.",
      title: "Toolformer: Language Models Can Teach Themselves to Use Tools",
      venue: "Advances in Neural Information Processing Systems",
      volume: "36",
      year: "2023",
      type: "conference",
      url: "https://arxiv.org/abs/2302.04761",
      accessDate: "Jun. 17 2025"
    },
    {
      number: 10,
      authors: "G. Wang et al.",
      title: "Voyager: An Open-Ended Embodied Agent with Large Language Models",
      year: "May. 2023",
      type: "conference",
      url: "http://arxiv.org/pdf/2305.16291v2"
    },
    {
      number: 11,
      authors: "LangChain",
      title: "Reflection Agents",
      url: "https://blog.langchain.dev/reflection-agents/",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 12,
      authors: "DAIR.AI",
      title: "Reflexion",
      url: "https://www.promptingguide.ai/techniques/reflexion",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 13,
      authors: "S. Schulhoff et al.",
      title: "The Prompt Report: A Systematic Survey of Prompt Engineering Techniques",
      year: "Jun. 2024",
      type: "conference",
      url: "http://arxiv.org/pdf/2406.06608v6"
    },
    {
      number: 14,
      authors: "J. Kaur",
      title: "Reflection Agent Prompting: Strategies for More Efficient Performance",
      url: "https://www.akira.ai/blog/reflection-agent-prompting",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 15,
      authors: "DeepSeek-AI et al.",
      title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
      year: "Jan. 2025",
      type: "conference",
      url: "http://arxiv.org/pdf/2501.12948v1"
    },
    {
      number: 16,
      authors: "OpenAI",
      title: "GPT-4o System Card: Technical report",
      venue: "OpenAI, San Francisco, CA",
      year: "May. 2024",
      url: "https://openai.com/research/gpt-4o-system-card",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 17,
      authors: "Daniel Dominguez",
      title: "Minecraft Welcomes Its First LLM-Powered Agent",
      venue: "InfoQ",
      year: "2023",
      url: "https://www.infoq.com/news/2023/05/minecraft-voyager-llm-agent/",
      type: "web"
    },
    {
      number: 18,
      authors: "Ben Wang and Aran Komatsuzaki",
      title: "GPT-J-6B: A 6 Billion Parameter Autoregressive Language Model",
      year: "2021",
      url: "https://github.com/kingoflolz/mesh-transformer-jax",
      type: "web"
    },
    {
      number: 19,
      authors: "Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, et al.",
      title: "Language models are few-shot learners",
      venue: "Advances in Neural Information Processing Systems",
      volume: "33",
      pages: "1877–1901",
      year: "2020",
      url: "https://arxiv.org/pdf/2005.14165",
      accessDate: "Jun. 19 2025",
      type: "conference"
    },
    {
      number: 20,
      authors: "Q. Dong et al.",
      title: "A Survey on In-context Learning",
      year: "Dec. 2022",
      type: "conference",
      url: "https://arxiv.org/abs/2301.00234"
    },
    {
      number: 21,
      authors: "J. Uesato et al.",
      title: "Solving math word problems with process- and outcome-based feedback",
      year: "Nov. 2022",
      type: "conference",
      url: "http://arxiv.org/pdf/2211.14275v1"
    },
    {
      number: 22,
      authors: "H. Lightman et al.",
      title: "Let's Verify Step by Step",
      year: "May. 2023",
      type: "conference",
      url: "http://arxiv.org/pdf/2305.20050v1"
    },
    {
      number: 23,
      authors: "N. Carlini et al.",
      title: "Extracting Training Data from Large Language Models",
      year: "Dec. 2020",
      type: "conference",
      url: "http://arxiv.org/pdf/2012.07805v2"
    },
    {
      number: 24,
      authors: "T. Green, M. Gubri, H. Puerto, S. Yun, and S. J. Oh",
      title: "Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers",
      year: "Jun. 2025",
      type: "conference",
      url: "http://arxiv.org/pdf/2506.15674v1"
    },
    {
      number: 25,
      authors: "S. Pahune, Z. Akhtar, V. Mandapati, and K. Siddique",
      title: "The Importance of AI Data Governance in Large Language Models",
      venue: "BDCC",
      volume: "9",
      pages: "147",
      year: "2025",
      doi: "10.3390/bdcc9060147",
      type: "journal"
    },
    {
      number: 26,
      authors: "V. C. Müller",
      title: "Ethics of Artificial Intelligence and Robotics",
      url: "https://plato.stanford.edu/entries/ethics-ai/",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 27,
      authors: "European Union",
      title: "Proposal for a Regulation laying down harmonised rules on Artificial Intelligence (Artificial Intelligence Act)",
      year: "2021",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52021PC0206",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 28,
      authors: "MineDojo",
      title: "Voyager FAQ",
      venue: "GitHub, Inc.",
      year: "2023",
      url: "https://github.com/MineDojo/Voyager/blob/main/FAQ.md",
      accessDate: "Jun. 19 2025",
      type: "web"
    },
    {
      number: 29,
      authors: "A. Mathews",
      title: "Cost-benefit analysis: is generative AI worth the investment for enterprises",
      url: "https://aimresearch.co/conference-videos/cost-benefit-analysis-is-generative-ai-worth-the-investment-for-enterprises",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 30,
      authors: "M. Steinberg",
      title: "Cost-benefit analysis of AI technology investments in Finance",
      url: "https://www.mindbridge.ai/blog/cost-benefit-analysis-of-ai-technology-investments-in-finance/",
      accessDate: "Jun. 17 2025",
      type: "web"
    },
    {
      number: 31,
      authors: "M. Z. Elbashir, P. A. Collier, and M. J. Davern",
      title: "Measuring the effects of business intelligence systems: The relationship between business process and organizational performance",
      venue: "International Journal of Accounting Information Systems",
      volume: "9",
      pages: "135–153",
      year: "2008",
      doi: "10.1016/j.accinf.2008.03.001",
      type: "journal"
    },
    {
      number: 32,
      authors: "J. Li et al.",
      title: "Two Heads Are Better Than One: Dual-Model Verbal Reflection at Inference-Time",
      year: "Feb. 2025",
      type: "conference",
      url: "http://arxiv.org/pdf/2502.19230v1"
    },
    {
      number: 33,
      authors: "X. Wu",
      title: "Socratic RL: A Novel Framework for Efficient Knowledge Acquisition through Iterative Reflection and Viewpoint Distillation",
      year: "Jun. 2025",
      type: "conference",
      url: "http://arxiv.org/pdf/2506.13358v1"
    },
    {
      number: 34,
      authors: "K. J. L. Koa, Y. Ma, R. Ng, and T.-S. Chua",
      title: "Learning to Generate Explainable Stock Predictions using Self-Reflective Large Language Models",
      volume: "12706",
      pages: "4304–4315",
      year: "2024",
      doi: "10.1145/3589334.3645611",
      type: "journal"
    },
    {
      number: 35,
      authors: "N. Potamitis and A. Arora",
      title: "Are Retrials All You Need? Enhancing Large Language Model Reasoning Without Verbalized Feedback",
      year: "Apr. 2025",
      type: "conference",
      url: "http://arxiv.org/pdf/2504.12951v1"
    }
  ];

  constructor(
    public navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.setCurrentSection('bibliography');
    this.updateCategoryCounts();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredReferences() {
    if (this.selectedCategory === 'all') {
      return this.references;
    }
    return this.references.filter(ref => ref.type === this.selectedCategory);
  }

  getCategoryName(type: string): string {
    const categoryMap: { [key: string]: string } = {
      'journal': 'Journal',
      'conference': 'Conference',
      'web': 'Web Resource',
      'book': 'Book'
    };
    return categoryMap[type] || 'Other';
  }

  getJournalCount(): number {
    return this.references.filter(ref => ref.type === 'journal').length;
  }

  getConferenceCount(): number {
    return this.references.filter(ref => ref.type === 'conference').length;
  }

  getWebResourceCount(): number {
    return this.references.filter(ref => ref.type === 'web').length;
  }

  updateCategoryCounts(): void {
    this.categories = [
      { key: 'all', name: 'All References', icon: 'fas fa-list', count: this.references.length },
      { key: 'journal', name: 'Journal Articles', icon: 'fas fa-file-alt', count: this.getJournalCount() },
      { key: 'conference', name: 'Conference Papers', icon: 'fas fa-users', count: this.getConferenceCount() },
      { key: 'web', name: 'Web Resources', icon: 'fas fa-globe', count: this.getWebResourceCount() },
      { key: 'book', name: 'Books', icon: 'fas fa-book', count: this.references.filter(ref => ref.type === 'book').length }
    ];
  }

  viewOriginalPaper(): void {
    // Open PDF in new tab for viewing
    const pdfPath = 'assets/documents/Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    window.open(pdfPath, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  }

  downloadOriginalPaper(): void {
    // Trigger download of the PDF
    const pdfPath = 'assets/documents/Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Reflexion and Beyond Verbal Self-Reflection in Large Language Models.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
} 