import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Connect</h3>
            <div class="social-links">
              <a href="https://github.com" target="_blank" rel="noopener" class="social-link">
                <i class="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link">
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="mailto:your.email@example.com" class="social-link">
                <i class="fas fa-envelope"></i>
                Email
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Quick Links</h3>
            <nav class="footer-nav">
              <a href="#home" class="footer-link">Home</a>
              <a href="#projects" class="footer-link">Projects</a>
              <a href="#skills" class="footer-link">Skills</a>
              <a href="#contact" class="footer-link">Contact</a>
            </nav>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <p>Built with Angular & ❤️</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}