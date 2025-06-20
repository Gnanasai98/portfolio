import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/" class="logo-link">
            <div class="logo-content">
              <span class="logo-text">Gnanasai Saravanan</span>
              <p class="logo-subtitle"><em>Full Stack Java Developer & Hobbyist Game Developer</em></p>
            </div>
          </a>
        </div>
        
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a routerLink="/" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/projects" class="nav-link" routerLinkActive="active">Projects</a>
          <a routerLink="/skills" class="nav-link" routerLinkActive="active">Skills</a>
          <a routerLink="/contact" class="nav-link" routerLinkActive="active">Contact</a>
        </div>
        
        <div class="hamburger" [class.active]="isMenuOpen" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}