import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';

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
    fav: false,
  };

  constructor() {}

  ngOnInit(): void {}

  thoughtWidth(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavIcon() {
    if (this.thought.fav === false) {
      return 'inativo';
    }
    return 'ativo';
  }
}
