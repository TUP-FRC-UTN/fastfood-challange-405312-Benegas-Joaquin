import { Injectable } from '@angular/core';
import { Order, OrderState } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [];

  getOrders() {
    return this.orders;
  }

  getPendingOrders(orders: Order[]) {
    return orders.filter((order) => order.state === OrderState.PENDING);
  }

  getCookingOrders(orders: Order[]) {
    return orders.filter((order) => order.state === OrderState.COOKING);
  }

  getReadyOrders(orders: Order[]) {
    return orders.filter((order) => order.state === OrderState.READY);
  }

  getDeliveredOrders(orders: Order[]) {
    return orders.filter((order) => order.state === OrderState.DELIVERED);
  }

  addOrder(order: Order) {
    this.orders.push({
      ...order,
      number: this.orders.length + 1,
      state: OrderState.PENDING,
      date: new Date(),
    });
  }

  cookOrder(order: Order) {
    const cookingOrders = this.getCookingOrders(this.orders);
    if (cookingOrders.length < 1) {
      const index = this.orders.indexOf(order);
      if (index >= 0) {
        this.orders[index].state = OrderState.COOKING;
      }
    }
  }

  prepareOrder(order: Order) {
    const index = this.orders.indexOf(order);
    if (index >= 0) {
      this.orders[index].state = OrderState.READY;
    }
  }

  deliverOrder(order: Order) {
    const index = this.orders.indexOf(order);
    if (index >= 0) {
      this.orders[index].state = OrderState.DELIVERED;
    }
  }

  constructor() {}
}
