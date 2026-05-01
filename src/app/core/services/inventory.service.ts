import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-response.interface';
import { MovementRequest } from '../models/movement-request.interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/productos`;

  getInventory(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/inventario`);
  }

  registerMovement(request: MovementRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/movimiento`, request);
  }
}