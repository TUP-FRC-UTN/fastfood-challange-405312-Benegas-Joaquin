import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderService } from '../../service/order.service';
import { Order } from '../../models/order';

interface FormData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css',
})
export class PointOfSellComponent {
  formData: FormData = this.getInitialFormData();

  private orderService = inject(OrderService);

  getInitialFormData(): FormData {
    return {
      name: '',
      description: '',
    };
  }

  onSubmit(form: NgForm) {
    const newOrder = new Order(this.formData.name, this.formData.description);

    if (form.valid) {
      this.orderService.addOrder(newOrder);
      this.formData = this.getInitialFormData();
    }
  }
}
