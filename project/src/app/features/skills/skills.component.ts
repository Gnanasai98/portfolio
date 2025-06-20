import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills">
      <div class="container">
        <div class="skills-header">
          <h1 class="page-title">Skills & Expertise</h1>
          <p class="page-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div class="skills-categories">
          <div class="category-card" *ngFor="let category of categories">
            <div class="category-header">
              <h3 class="category-title">{{ category.title }}</h3>
              <p class="category-description">{{ category.description }}</p>
            </div>
            <div class="skills-grid">
              <div 
                class="skill-item" 
                *ngFor="let skill of getSkillsByCategory(category.key)"
              >
                <div class="skill-header">
                  <div class="skill-info">
                    <i [class]="skill.icon" class="skill-icon"></i>
                    <span class="skill-name">{{ skill.name }}</span>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    [style.width.%]="skill.level"
                    [style.animation-delay]="'0.5s'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="additional-skills">
          <h3>Additional Skills & Tools</h3>
          <div class="tools-grid">
            <div class="tool-item" *ngFor="let tool of tools">
              <i [class]="tool.icon"></i>
              <span>{{ tool.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 90, category: 'frontend', icon: 'fab fa-angular' },
    { name: 'React', level: 85, category: 'frontend', icon: 'fab fa-react' },
    { name: 'Vue.js', level: 75, category: 'frontend', icon: 'fab fa-vuejs' },
    { name: 'TypeScript', level: 88, category: 'frontend', icon: 'fas fa-code' },
    { name: 'JavaScript', level: 92, category: 'frontend', icon: 'fab fa-js' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', icon: 'fab fa-html5' },
    
    // Backend
    { name: 'Node.js', level: 82, category: 'backend', icon: 'fab fa-node-js' },
    { name: 'Python', level: 78, category: 'backend', icon: 'fab fa-python' },
    { name: 'Express.js', level: 80, category: 'backend', icon: 'fas fa-server' },
    { name: 'MongoDB', level: 75, category: 'backend', icon: 'fas fa-database' },
    { name: 'PostgreSQL', level: 70, category: 'backend', icon: 'fas fa-database' },
    { name: 'GraphQL', level: 65, category: 'backend', icon: 'fas fa-project-diagram' },
    
    // DevOps
    { name: 'Docker', level: 70, category: 'devops', icon: 'fab fa-docker' },
    { name: 'AWS', level: 65, category: 'devops', icon: 'fab fa-aws' },
    { name: 'Git', level: 90, category: 'devops', icon: 'fab fa-git-alt' },
    { name: 'CI/CD', level: 72, category: 'devops', icon: 'fas fa-cogs' },
    { name: 'Linux', level: 68, category: 'devops', icon: 'fab fa-linux' },
    
    // Design
    { name: 'UI/UX Design', level: 80, category: 'design', icon: 'fas fa-paint-brush' },
    { name: 'Figma', level: 85, category: 'design', icon: 'fab fa-figma' },
    { name: 'Adobe XD', level: 75, category: 'design', icon: 'fas fa-vector-square' },
    { name: 'Photoshop', level: 70, category: 'design', icon: 'fas fa-image' }
  ];

  categories = [
    {
      key: 'frontend',
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      key: 'backend',
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs'
    },
    {
      key: 'devops',
      title: 'DevOps & Tools',
      description: 'Deployment, version control, and development tools'
    },
    {
      key: 'design',
      title: 'Design & UX',
      description: 'User experience design and visual creativity'
    }
  ];

  tools = [
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Postman', icon: 'fas fa-paper-plane' },
    { name: 'Slack', icon: 'fab fa-slack' },
    { name: 'Trello', icon: 'fab fa-trello' },
    { name: 'Jira', icon: 'fab fa-jira' },
    { name: 'Notion', icon: 'fas fa-sticky-note' }
  ];

  ngOnInit() {
    this.animateSkillBars();
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  private animateSkillBars() {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.classList.add('animate');
        }, index * 100);
      });
    }, 500);
  }
}