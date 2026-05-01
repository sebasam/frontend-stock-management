import { MovementType } from "./movement-type.enum";

export interface MovementRequest { 
    productId: number; 
    quantity: number; 
    type: MovementType; 
}