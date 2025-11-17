import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  projects: Project[] = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      screenshot: 'assets/project-one.png',
      githubRepo: 'https://github.com/user/project-one',
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      screenshot: 'assets/project-two.png',
      githubRepo: 'https://github.com/user/project-two',
      liveDemo: 'https://project-two.demo.com',
    },
    {
      title: 'Project Three',
      description: 'Description for project three.',
      screenshot: 'assets/project-three.png',
      githubRepo: 'https://github.com/user/project-three',
    },
  ];
}
