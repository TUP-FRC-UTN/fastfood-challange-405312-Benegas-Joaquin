import { Component } from '@angular/core';
import { PointOfSellComponent } from "../point-of-sell/point-of-sell.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfSellComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

}
