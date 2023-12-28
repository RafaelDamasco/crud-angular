import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
    favourite: false,
  };
  @Input() favourites: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {}

  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavouriteIcon() {
    if (this.thought.favourite === false) {
      return 'inativo';
    }
    return 'ativo';
  }

  updateFavourites() {
    this.service.updateFavoutire(this.thought).subscribe(() => {
      this.favourites.splice(this.favourites.indexOf(this.thought), 1);
    });
  }
}
