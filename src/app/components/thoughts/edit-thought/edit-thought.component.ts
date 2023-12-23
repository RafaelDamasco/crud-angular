import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  thought: Thought = {
    content: '',
    author: '',
    model: '',
  };
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
    console.log('AAAAAAAAAAA', this.route.snapshot.paramMap);
  }

  updateThought() {
    this.service.update(this.thought).subscribe((thought) => {
      this.router.navigate(['/listThought']);
    });
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
