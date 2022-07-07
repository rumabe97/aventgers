import { TestBed } from '@angular/core/testing';

import { HeroesListResolver } from './heroes-list.resolver';

describe('HeroesListResolver', () => {
  let resolver: HeroesListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeroesListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
