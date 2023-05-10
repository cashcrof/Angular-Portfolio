import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../model/project';
import { Category } from '../model/category';
import { Tag } from '../model/tag';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  selectedProject: Project | undefined;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  clearSelectedProject(): void {
    this.selectedProject = undefined;
  }

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
    console.log('setCategoryFilter: ' + this.categoryFilter?.name);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    console.log('setTagFilter: ' + this.tagFilter?.name);

  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  projects: Project[] = [];

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getProjectsByCategory(id)
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByTag(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getProjectsByTag(id)
      .subscribe((projects) => (this.projects = projects));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
      } else if (segment === 'tags') {
        this.getProjectsByTag();
      } else {
        this.getProjects();
      }
    });
  }
}