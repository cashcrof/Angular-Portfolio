import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './model/project';
import { Tag } from './model/tag';
import { Category } from './model/category';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

transform(projects: Project[], tag: Tag | undefined, category: Category | undefined): Project[] {
    let filteredProjects = [];
    if (tag && category) {
      filteredProjects = projects.filter((project) => {
        // Convert the project tags as well as the tag to strings
        // Since indexOf returns -1 if not found, add 1 to make not found a falsy value
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1 &&
          JSON.stringify(project.category).indexOf(JSON.stringify(category)) + 1;
      });
    }
    else if (tag) {
      filteredProjects = projects.filter((project) => {
        // Convert the project tags as well as the tag to strings
        // Since indexOf returns -1 if not found, add 1 to make not found a falsy value
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1;
      });
    } 
    else if (category) {
      filteredProjects = projects.filter((project) => {
        // Convert the project category as well as the category to strings
        // Since indexOf returns -1 if not found, add 1 to make not found a falsy value
        return JSON.stringify(project.category).indexOf(JSON.stringify(category)) + 1;
      });
    }
    else {
      filteredProjects = projects;
    }
    return filteredProjects;
  }
}

