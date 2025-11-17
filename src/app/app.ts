import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  #themeService = inject(ThemeService);
  toggleTheme() {
    this.#themeService.toggleTheme();
  }
}
