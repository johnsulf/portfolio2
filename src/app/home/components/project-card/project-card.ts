import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [ImageModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;
}
