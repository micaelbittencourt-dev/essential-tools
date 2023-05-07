import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCardsComponent } from './panel-cards.component';

describe('PanelCardsComponent', () => {
  let component: PanelCardsComponent;
  let fixture: ComponentFixture<PanelCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
