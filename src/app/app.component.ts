import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {
    // Remove loading screen once app is ready
    this.removeLoadingScreen();
  }

  private removeLoadingScreen() {
    setTimeout(() => {
      const loadingElement = document.querySelector('.loading-container');
      if (loadingElement) {
        loadingElement.remove();
      }
    }, 1000);
  }
}