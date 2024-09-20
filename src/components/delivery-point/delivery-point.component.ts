import { Component, inject } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css',
})
export class DeliveryPointComponent {
  orders: Order[] = [];

  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  deliverOrder(order: Order) {
    this.orderService.deliverOrder(order);
  }

  getReadyOrders() {
    return this.orderService.getReadyOrders(this.orders);
  }

  getDeliveredOrders() {
    return this.orderService.getDeliveredOrders(this.orders);
  }
}
