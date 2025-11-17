import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme/theme.service';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  #themeService = inject(ThemeService);
  toggleTheme() {
    this.#themeService.toggleTheme();
  }
}
