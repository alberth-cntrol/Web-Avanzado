import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectornumericoComponent } from './selectornumerico.component';

describe('SelectornumericoComponent', () => {
  let component: SelectornumericoComponent;
  let fixture: ComponentFixture<SelectornumericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectornumericoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectornumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
