import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact">
      <div class="container">
        <div class="contact-header">
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-subtitle">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <i class="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:your.email&#64;example.com">your.email&#64;example.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <i class="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-8900</a>
                </div>
              </div>
              
              <div class="contact-method">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a href="https://github.com" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div class="contact-form-container">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  [class.error]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                  placeholder="Your full name"
                />
                <div 
                  class="error-message" 
                  *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                >
                  Name is required
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.error]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                  placeholder="your.email&#64;example.com"
                />
                <div 
                  class="error-message" 
                  *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                >
                  <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                  <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.error]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                  placeholder="What's this about?"
                />
                <div 
                  class="error-message" 
                  *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                >
                  Subject is required
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  [class.error]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  placeholder="Tell me about your project..."
                  rows="5"
                ></textarea>
                <div 
                  class="error-message" 
                  *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                >
                  Message is required
                </div>
              </div>

              <button 
                type="submit" 
                class="submit-btn"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>
            </form>

            <div class="success-message" *ngIf="showSuccessMessage">
              <i class="fas fa-check-circle"></i>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}