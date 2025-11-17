import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  $currentTheme: WritableSignal<string> = signal('light');

  toggleTheme() {
    const element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
    this.$currentTheme.set(this.$currentTheme() === 'light' ? 'dark' : 'light');
    console.log('Theme toggled to:', this.$currentTheme());
  }
}
