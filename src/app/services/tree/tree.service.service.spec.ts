import { TestBed } from '@angular/core/testing';

import { Tree.ServiceService } from './tree.service.service';

describe('Tree.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tree.ServiceService = TestBed.get(Tree.ServiceService);
    expect(service).toBeTruthy();
  });
});
