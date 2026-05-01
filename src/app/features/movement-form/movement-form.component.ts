import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InventoryService } from '../../core/services/inventory.service';
import { ProductResponse } from '../../core/models/product-response.interface';

@Component({
  selector: 'app-movement-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movement-form.component.html',
  styleUrl: './movement-form.component.css'
})
export class MovementFormComponent {
  @Input() products: ProductResponse[] = [];
  @Output() movementRegistered = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private inventoryService = inject(InventoryService);

  movementForm: FormGroup = this.fb.group({
    productId: ['', Validators.required],
    type: [0, Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]]
  });

  message = '';
  isError = false;

  onSubmit() {
    if (this.movementForm.valid) {
      const payload = {
        ...this.movementForm.value,
        productId: Number(this.movementForm.value.productId),
        type: Number(this.movementForm.value.type)
      };

      this.inventoryService.registerMovement(payload).subscribe({
        next: () => {
          this.message = 'Movement registered successfully!';
          this.isError = false;
          this.movementForm.patchValue({ quantity: 1 });
          this.movementRegistered.emit();
        },
        error: () => {
          this.message = 'Error: Invalid movement or insufficient stock.';
          this.isError = true;
        }
      });
    }
  }
}