import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFromFilePage } from './import-from-file.page';

describe('ImportFromFilePage', () => {
  let component: ImportFromFilePage;
  let fixture: ComponentFixture<ImportFromFilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportFromFilePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFromFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
