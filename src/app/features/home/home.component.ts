import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hello, I'm <span class="highlight">Gnanasai Saravanan</span>
            </h1>
            <p class="hero-subtitle"><em>Full Stack Java Developer & Hobbyist Game Developer</em></p>
            <p class="hero-description">
              I create beautiful, functional, and user-centered digital experiences.
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>
            <div class="hero-buttons">
              <a routerLink="/projects" class="btn btn-primary">View My Work</a>
              <a routerLink="/contact" class="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-placeholder">
              <div class="profile-image">
                <img 
                  [src]="profileImageUrl" 
                  alt="Gnanasai Saravanan - Full Stack Developer"
                  loading="eager"
                  width="280"
                  height="280"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="about-content">
          <h2 class="section-title">About Me</h2>
          <div class="about-grid">
            <div class="about-text">
              <p>
                With over 5 years of experience in web development, I specialize in creating
                modern, responsive applications using the latest technologies. My journey began
                with a passion for problem-solving and has evolved into a career focused on
                delivering exceptional user experiences.
              </p>
              <div class="stats">
                <div class="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div class="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div class="stat">
                  <h3>20+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div class="about-skills">
              <h3>Core Technologies</h3>
              <div class="tech-stack">
                <span class="tech-item">Angular</span>
                <span class="tech-item">React</span>
                <span class="tech-item">Node.js</span>
                <span class="tech-item">TypeScript</span>
                <span class="tech-item">Python</span>
                <span class="tech-item">MongoDB</span>
                <span class="tech-item">PostgreSQL</span>
                <span class="tech-item">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileImageUrl = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400';

  ngOnInit() {
    // Preload critical images
    this.preloadImages();
  }

  private preloadImages() {
    const img = new Image();
    img.src = this.profileImageUrl;
  }
}