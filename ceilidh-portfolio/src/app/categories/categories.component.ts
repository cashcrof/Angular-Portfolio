import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoryComponent {
  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  constructor(private categoryService: CategoryService) {}
  categories: Category[] = [];

  setCategoryFilter(category: Category) {
    console.log(category);
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }
  
  clearCategoryFilter() {
    this.categoryFilter = undefined;
  }
  getCategory(): void {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategory();
  }
}
