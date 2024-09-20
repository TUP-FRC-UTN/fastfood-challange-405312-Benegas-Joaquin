export enum OrderState {
  PENDING,
  COOKING,
  READY,
  DELIVERED,
}

export class Order {
  number: number; // Numero de pedido random de 1 a 1000
  name: string; // Nombre del cliente
  description: string; // Descripción del pedido
  date: Date; // Fecha de creación del pedido
  state: OrderState;

  constructor(
    name: string,
    description: string,
  ) {
    this.number = 0;
    this.name = name;
    this.description = description;
    this.date = new Date();
    this.state = OrderState.PENDING;
  }
}
