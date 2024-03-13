import { TestBed } from '@angular/core/testing';

import { AlbumListAPIService } from './album-list-api.service';

describe('AlbumListAPIService', () => {
  let service: AlbumListAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumListAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
