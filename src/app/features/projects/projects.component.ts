import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageOptimizationService } from '../../core/services/image-optimization.service';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="container">
        <div class="projects-header">
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div class="filter-tabs">
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')"
          >
            All
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'web'"
            (click)="setFilter('web')"
          >
            Web Apps
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'mobile'"
            (click)="setFilter('mobile')"
          >
            Mobile
          </button>
          <button 
            class="filter-btn" 
            [class.active]="activeFilter === 'design'"
            (click)="setFilter('design')"
          >
            Design
          </button>
        </div>

        <div class="projects-grid">
          <div 
            class="project-card" 
            *ngFor="let project of filteredProjects; trackBy: trackByProjectId"
            [class.fade-in]="true"
          >
            <div class="project-image">
              <img 
                [src]="getOptimizedImageUrl(project.image)" 
                [alt]="project.title"
                loading="lazy"
                width="350"
                height="200"
              />
              <div class="project-overlay">
                <div class="project-actions">
                  <a 
                    *ngIf="project.demoUrl" 
                    [href]="project.demoUrl" 
                    target="_blank" 
                    class="action-btn"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    Demo
                  </a>
                  <a 
                    *ngIf="project.githubUrl" 
                    [href]="project.githubUrl" 
                    target="_blank" 
                    class="action-btn"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-technologies">
                <span 
                  class="tech-tag" 
                  *ngFor="let tech of project.technologies; trackBy: trackByTech"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeFilter = 'all';

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Material UI'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React Native', 'API Integration', 'Maps'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing creative work with smooth animations and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['Angular', 'SCSS', 'Animations'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'design'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with scheduling and engagement tracking.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with personalized recommendations.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      technologies: ['Flutter', 'Firebase', 'Machine Learning'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'mobile'
    }
  ];

  constructor(private imageOptimizationService: ImageOptimizationService) {}

  ngOnInit() {
    // Preload visible project images
    this.preloadProjectImages();
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  trackByTech(index: number, tech: string): string {
    return tech;
  }

  getOptimizedImageUrl(originalUrl: string): string {
    return this.imageOptimizationService.getOptimizedImageUrl(originalUrl, 350, 200);
  }

  private preloadProjectImages() {
    const imageUrls = this.projects.map(project => 
      this.getOptimizedImageUrl(project.image)
    );
    this.imageOptimizationService.preloadImages(imageUrls.slice(0, 3)); // Preload first 3 images
  }
}