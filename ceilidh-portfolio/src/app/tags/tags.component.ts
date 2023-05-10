import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagComponent {
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>()
  constructor(private tagService: TagService) {}
  tags: Tag[] = [];

  setTagFilter(tag: Tag) {
    console.log(tag);
    this.newTagFilterEvent.emit(tag);
  }

  clearTagFilter() {
    this.tagFilter = undefined;
  }
  
  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
  }
}
