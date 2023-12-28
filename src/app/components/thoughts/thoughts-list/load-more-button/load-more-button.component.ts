import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css'],
})
export class LoadMoreButtonComponent implements OnInit {
  @Input() thereIsMoreThoughts: boolean = false;
  constructor() {}

  ngOnInit() {}
}
