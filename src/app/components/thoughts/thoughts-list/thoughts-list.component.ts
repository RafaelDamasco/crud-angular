import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.css'],
})
export class ThoughtsListComponent implements OnInit {
  thoughts: Thought[] = [];
  title: string = 'My Mural';
  actualPage: number = 1;
  thereIsMoreThoughts: boolean = true;
  filter: string = '';
  favourite: boolean = false;
  favourites: Thought[] = [];

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .list(this.actualPage, this.filter, this.favourite)
      .subscribe((thoughts) => {
        this.thoughts = thoughts;
      });
  }

  loadMoreThoughts() {
    this.service
      .list(++this.actualPage, this.filter, this.favourite)
      .subscribe((thoughts) => {
        this.thoughts.push(...thoughts);
        if (!thoughts.length) {
          this.thereIsMoreThoughts = false;
        }
      });
  }

  searchThoughts() {
    this.actualPage = 1;
    this.thereIsMoreThoughts = true;
    this.service
      .list(this.actualPage, this.filter, this.favourite)
      .subscribe((thoughts) => {
        this.thoughts = thoughts;
      });
  }

  reloadComponent() {
    this.actualPage = 1;
    this.favourite = false;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listFavourites() {
    this.title = 'My Favourite';
    this.actualPage = 1;
    this.thereIsMoreThoughts = true;
    this.favourite = true;
    this.service
      .list(this.actualPage, this.filter, this.favourite)
      .subscribe((favouritesThoughts) => {
        this.thoughts = favouritesThoughts;
        this.favourites = favouritesThoughts;
      });
  }
}
