import { Component } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}

  heroProject : Project =   {
    id: 10,
    title: "Hero Project",
    excerpt: "A project to showcase my skills.",
    body: "This is the body of the hero project.",
    url:"http://www.hero-project.com",
    published_date: "2023-04-14",
    image: "images/Hero.jpg",
    thumb: "images/Hero.jpg",
    category_id: 3,
    created_at: "2023-04-20T20:05:37.000000Z",
    updated_at: "2023-04-20T20:05:37.000000Z",
    slug: "hauler",
    category: { "id": 3, "slug": "full-stack", "name": "Full Stack" },
    tags: [
      {
        id: 1,
        name: "React Native",
        slug: "react-native"
      }
    ]
  }

}
