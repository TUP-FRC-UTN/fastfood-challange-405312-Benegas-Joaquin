import { Component, inject, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../service/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
})
export class KitchenComponent implements OnInit {
  orders: Order[] = [];

  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  cookOrder(order: Order) {
    this.orderService.cookOrder(order);
  }

  prepareOrder(order: Order) {
    this.orderService.prepareOrder(order);
  }

  getPendingOrders() {
    return this.orderService.getPendingOrders(this.orders);
  }

  getCookingOrders() {
    return this.orderService.getCookingOrders(this.orders);
  }
}
