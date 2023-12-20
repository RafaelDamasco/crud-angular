import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento: Thought = {
    id: 0,
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: '',
  };

  createThought = () => {
    alert('pensamento criado');
  };

  cancel = () => {
    alert('cancel');
  };

  constructor() {}

  ngOnInit(): void {}
}
