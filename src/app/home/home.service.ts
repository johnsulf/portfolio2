import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  projects: Project[] = [
    {
      title: 'Project Exam 2',
      description:
        'The final exam for my studies at Noroff. Holidaze web app – browse venues, create a user to book venues or become a venue manager to create and host your own venues.',
      screenshot: 'assets/pe2.png',
      githubRepo: 'https://github.com/johnsulf/project-exam-2',
      liveDemo: 'https://johnsulf.github.io/project-exam-2/',
    },
    {
      title: 'JSF CA',
      description:
        'The Course Assignment for the JavaScript Frameworks course. This is a simple eCommerce demo built with React, TypeScript and Vite.',
      screenshot: 'assets/jsfca.png',
      githubRepo: 'https://github.com/johnsulf/jsf-ca-ecom-store',
      liveDemo: 'https://jsf-ca-ecom-store.netlify.app/',
    },
    {
      title: 'Semester Project 2',
      description:
        'The second semester project for my studies at Noroff. A responsive web app for a fictional auction house.',
      screenshot: 'assets/sp2.png',
      githubRepo: 'https://github.com/johnsulf/semester-project-2',
      liveDemo: 'https://johnsulf.github.io/semester-project-2/',
    },
  ];
}
