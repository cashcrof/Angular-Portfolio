import { Injectable } from '@angular/core';
import { Project } from './model/project';
import { PROJECTS } from './data/projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

    getProject(id: number): Observable<Project> {
    const project = PROJECTS.find((p) => p.id === id)!;
    return of(project);
  }

   getProjectsByCategory(id: number): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => p.category_id === id)!;
    return of(projects);
  }

  getProjectsByTag(id: number): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => {
      if (p.tags.some((t: { id: number; }) => t.id === id)) {
        return true;
      } else {
        return false;
      }
    })!;
    return of(projects);
  }
}