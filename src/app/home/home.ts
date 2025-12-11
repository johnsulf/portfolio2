import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ProjectCard } from './components/project-card/project-card';
import { HomeService } from './home.service';
import { Project } from '../interfaces/project.interface';
import { Tech } from '../interfaces/tech.interface';

@Component({
  selector: 'app-home',
  imports: [ProjectCard, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  readonly #homeService = inject(HomeService);
  readonly knowledgeTechs: WritableSignal<readonly Tech[]> = signal(
    this.#homeService.knowledgeTechs,
  );
  readonly projects: readonly Project[] = this.#homeService.projects;
}
