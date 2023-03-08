import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(acivatedRoute:ActivatedRoute,foodService:FoodService,private cartServices:CartService, private router:Router){
    acivatedRoute.params.subscribe((params)=>{
      if(params.id)
      foodService.getFoodById(params.id).subscribe((serverFood=>{
        
        
        this.food=serverFood
      }))
    })
  }
  addToCart(){
    this.cartServices.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
