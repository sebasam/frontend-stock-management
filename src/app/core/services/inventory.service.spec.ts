import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { InventoryService } from './inventory.service';
import { environment } from '../../../environments/environment';

describe('InventoryService', () => {
  let service: InventoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InventoryService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InventoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  it('should fetch inventory list', () => {
    const mockProducts = [{ id: 1, name: 'Product A', quantity: 10 }];

    service.getInventory().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products[0].name).toEqual('Product A');
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/productos/inventario`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});