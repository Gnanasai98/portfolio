import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageOptimizationService {
  private imageCache = new Map<string, string>();

  getOptimizedImageUrl(originalUrl: string, width?: number, height?: number): string {
    const cacheKey = `${originalUrl}_${width}_${height}`;
    
    if (this.imageCache.has(cacheKey)) {
      return this.imageCache.get(cacheKey)!;
    }

    let optimizedUrl = originalUrl;
    
    // Optimize Pexels images
    if (originalUrl.includes('pexels.com')) {
      const baseUrl = originalUrl.split('?')[0];
      const params = new URLSearchParams();
      params.set('auto', 'compress');
      params.set('cs', 'tinysrgb');
      
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      
      optimizedUrl = `${baseUrl}?${params.toString()}`;
    }
    
    this.imageCache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }

  preloadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = url;
    });
  }

  preloadImages(urls: string[]): Promise<void[]> {
    return Promise.all(urls.map(url => this.preloadImage(url)));
  }
}