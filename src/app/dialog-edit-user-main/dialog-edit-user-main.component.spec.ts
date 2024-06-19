import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserMainComponent } from './dialog-edit-user-main.component';

describe('DialogEditUserMainComponent', () => {
  let component: DialogEditUserMainComponent;
  let fixture: ComponentFixture<DialogEditUserMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
