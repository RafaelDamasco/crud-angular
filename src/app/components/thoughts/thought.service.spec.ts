/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThoughtService } from './thought.service';

describe('Service: Thought', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThoughtService]
    });
  });

  it('should ...', inject([ThoughtService], (service: ThoughtService) => {
    expect(service).toBeTruthy();
  }));
});
