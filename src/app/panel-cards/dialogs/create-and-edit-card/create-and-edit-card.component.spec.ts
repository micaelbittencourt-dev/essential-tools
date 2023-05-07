import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditCardComponent } from './create-and-edit-card.component';

describe('CreateAndEditCardComponent', () => {
  let component: CreateAndEditCardComponent;
  let fixture: ComponentFixture<CreateAndEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndEditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAndEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
