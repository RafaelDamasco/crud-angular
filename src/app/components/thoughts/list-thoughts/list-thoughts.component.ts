import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  thoughts: Thought[] = [];
  actualPage: number = 1;
  thereIsMoreThoughts: boolean = true;
  filter: string = '';

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list(this.actualPage).subscribe((thoughts) => {
      this.thoughts = thoughts;
    });
  }

  loadMoreThoughts() {
    this.service.list(++this.actualPage).subscribe((thoughts) => {
      this.thoughts.push(...thoughts);
      if (!thoughts.length) {
        this.thereIsMoreThoughts = false;
      }
    });
  }
}
