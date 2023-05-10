import { Component, Input } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CategoryComponent } from './categories/categories.component';
import { TagComponent } from './tags/tags.component';

import { Project } from './model/project';
import { Category } from './model/category';
import { Tag } from './model/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ceilidh ashcroft';
  date = new Date();
  author = 'Ceilidh Ashcroft';

  tagFilter: Tag | undefined;
  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  categoryFilter: Category | undefined;
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }
  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  clearCategoryFilter() {
    this.categoryFilter = undefined;
  }

  clearTagFilter() {
    this.tagFilter = undefined;
  }
}
