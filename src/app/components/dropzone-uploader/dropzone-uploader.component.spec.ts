import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropzoneUploaderComponent } from './dropzone-uploader.component';

describe('DropzoneUploaderComponent', () => {
  let component: DropzoneUploaderComponent;
  let fixture: ComponentFixture<DropzoneUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropzoneUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropzoneUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
