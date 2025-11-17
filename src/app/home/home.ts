import { Component, inject } from '@angular/core';
import { HomeService } from './home.service';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  #homeService = inject(HomeService);
  projects: Project[] = this.#homeService.projects;
}
