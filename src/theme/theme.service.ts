import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  toggleTheme() {
    const element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
  }
}
