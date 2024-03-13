import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailPhotosComponent } from './album-detail-photos.component';

describe('AlbumDetailPhotosComponent', () => {
  let component: AlbumDetailPhotosComponent;
  let fixture: ComponentFixture<AlbumDetailPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetailPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumDetailPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});