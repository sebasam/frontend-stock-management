import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InventoryService } from '../../core/services/inventory.service';
import { AuthService } from '../../core/services/auth.service';
import { ProductResponse } from '../../core/models/product-response.interface';
import { MovementFormComponent } from '../movement-form/movement-form.component';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule, MovementFormComponent],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit {
  private inventoryService = inject(InventoryService);
  private authService = inject(AuthService);
  private router = inject(Router);
  
  products: ProductResponse[] = [];

  ngOnInit() {
    this.loadInventory();
  }

  loadInventory() {
    this.inventoryService.getInventory().subscribe({
      next: (data) => this.products = data,
      error: () => console.error('Failed to load inventory')
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}