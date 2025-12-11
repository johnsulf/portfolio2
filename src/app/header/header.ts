import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  #theme = inject(ThemeService);
  $currentTheme = this.#theme.$currentTheme;

  toggleTheme() {
    this.#theme.toggleTheme();
  }

  returnThemeIcon() {
    return this.$currentTheme() === 'light' ? 'pi pi-moon' : 'pi pi-sun';
  }
}
