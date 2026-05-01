import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MovementFormComponent } from './movement-form.component';

describe('MovementFormComponent', () => {
  let component: MovementFormComponent;
  let fixture: ComponentFixture<MovementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementFormComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the movement form component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an invalid form', () => {
    expect(component.movementForm.valid).toBeFalsy();
  });

  it('should be valid when all required fields are filled', () => {
    component.movementForm.controls['productId'].setValue(1);
    component.movementForm.controls['type'].setValue(0);
    component.movementForm.controls['quantity'].setValue(5);
    expect(component.movementForm.valid).toBeTruthy();
  });
});