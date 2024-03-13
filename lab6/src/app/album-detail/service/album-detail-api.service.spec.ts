import { TestBed } from '@angular/core/testing';

import { AlbumDetailAPIService } from './album-detail-api.service';

describe('AlbumDetailAPIService', () => {
  let service: AlbumDetailAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumDetailAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});