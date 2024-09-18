class Pedido {
  number: number; // Numero de pedido random de 1 a 1000
  name: string; // Nombre del cliente
  description: string; // Descripción del pedido
  date: Date; // Fecha de creación del pedido

  constructor(number: number, name: string, description: string, date: Date) {
    this.number = number;
    this.name = name;
    this.description = description;
    this.date = date;
  }
}
