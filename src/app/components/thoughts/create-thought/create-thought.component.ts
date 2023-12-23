import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    content: '',
    author: '',
    model: '',
  };

  form!: FormGroup;

  
  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  createThought = () => {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  };

  cancel = () => {
    this.router.navigate(['/listThought']);
  };
}
