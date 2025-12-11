import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { Tech } from '../interfaces/tech.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  readonly knowledgeTechs: readonly Tech[] = [
    { name: 'Angular', icon: 'assets/tech/angular.svg', url: 'https://angular.dev/' },
    {
      name: 'ASP.NET',
      icon: 'assets/tech/dotnet.svg',
      url: 'https://dotnet.microsoft.com/apps/aspnet',
    },
    { name: 'Bootstrap', icon: 'assets/tech/bootstrap.svg', url: 'https://getbootstrap.com/' },
    {
      name: 'C#',
      icon: 'assets/tech/csharp.svg',
      url: 'https://learn.microsoft.com/dotnet/csharp/',
    },
    { name: 'Firebase', icon: 'assets/tech/firebase.svg', url: 'https://firebase.google.com/' },
    { name: 'Flutter', icon: 'assets/tech/flutter.svg', url: 'https://flutter.dev/' },
    { name: 'React', icon: 'assets/tech/react.svg', url: 'https://react.dev/' },
    { name: 'Svelte', icon: 'assets/tech/svelte.svg', url: 'https://svelte.dev/' },
    { name: 'Tailwind CSS', icon: 'assets/tech/tailwind.svg', url: 'https://tailwindcss.com/' },
    {
      name: 'TypeScript',
      icon: 'assets/tech/typescript.svg',
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Visual Studio',
      icon: 'assets/tech/visualstudio.svg',
      url: 'https://visualstudio.microsoft.com/',
    },
    {
      name: 'Visual Studio Code',
      icon: 'assets/tech/vscode.svg',
      url: 'https://code.visualstudio.com/',
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

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
