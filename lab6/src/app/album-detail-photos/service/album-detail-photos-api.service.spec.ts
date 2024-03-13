import { TestBed } from '@angular/core/testing';


describe('AlbumDetailPhotosAPIService', () => {
  let service: AlbumDetailAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumDetailPhotosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});